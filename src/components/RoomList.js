import { useState, useEffect } from "react";
import axios from "axios";

export const RoomList = ({ user, setShowSignUp, setShowLogin, setChat }) => {
  const [rooms, setRooms] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [logoutBtn, setShowLogout] = useState(false);
  const [search, setSearch] = useState([]);

  const activeChart = async (usernme, id) => {
    localStorage.setItem("activeRoom", usernme);
    localStorage.setItem("room_id", id);
  };

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  useEffect(() => {
    const getRooms = async () => {
      try {
        const response = await axios.get(
          "https://uzi-chat-ev06.onrender.com/api/v1/rooms",
          {
            params: {
              q: search,
            },
          }
        );
        setRooms(response.data.rooms);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    getRooms();
  }, [search]);
  return (
    <div className="flex flex-col overflow-y-auto">
      <div className="py-4 ml-2">
        <h3 className="text-gray-900 my-2 mb-2 font-bold capitalize leading-6 text-start">
          Rooms
        </h3>
        <div class="relative text-gray-600 focus-within:text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              class="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="q"
            class="py-2 text-sm border-2 border-gray-400 text-gray-900 bg-white rounded-full  pl-10 focus:outline-none"
            placeholder="Search group name"
            autocomplete="off"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {loading && <p>Loading</p>}
      {!loading && (
        <div>
          {rooms.map((room) => (
            <div
              onClick={() => {
                setChat(true);
                activeChart(room.name, room.room_id);
              }}
              key={room.id}
              className="flex flex-row mx-2 px-2 my-2 justify-center items-center hover:bg-green-800 hover:text-white"
            >
              <div className="w-1/4">
                <img
                  src={room.profile}
                  className="object-cover h-12 mr-2 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full ml-2">
                <div class="text-sm w-full font-semibold">
                  {room.name}
                  <span className="p-2 text-gray-500">#{room.room_id}</span>
                  <span className="text-gray-500">
                    {new Date(room.updatedAt).toLocaleDateString("en-US")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="fixed bottom-0">
        {user && (
          <div class="flex flex-row py-4 px-4">
            <div class="w-1/4 mx-2">
              <img
                src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                class="object-cover h-12 w-44 rounded-full"
                alt=""
              />
            </div>
            <div class="w-full">
              <div class="text-lg font-semibold">{user.username}</div>
              <span class="text-gray-500">@{user.username}</span>
            </div>
            <span class="text-black-400" onClick={() => setShowLogout(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </span>
            {logoutBtn && (
              <div>
                <a href="/#">Profile</a>
                <button onClick={() => logout()}>Logout</button>
              </div>
            )}
          </div>
        )}
        {!user && (
          <div class="flex flex-row py-4 px-4">
            <div class="w-full">
              <div class="text-lg font-semibold">
                <button onClick={() => setShowLogin(true)}>Login</button>
              </div>
              <span class="text-gray-500">
                Don't you have an account
                <button
                  onClick={() => setShowSignUp(true)}
                  className="text-black p-2"
                >
                  Sign up
                </button>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
