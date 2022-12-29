import { useState } from "react";
import axios from "axios";

export const Login = ({ setShowLogin }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [msg, setMsg] = useState("");
  const login = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("https://uzi-chat-ev06.onrender.com/api/v1/users/login", {
          username,
          password,
        })
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem("token", JSON.stringify(response.data.token));
          window.location.reload();
        });
    } catch (err) {
      if (err.response) {
        setMsg(err.response.data.message);
      }
    }
  };
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative  flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
            <h3 className="text-3xl font=semibold">Log In</h3>
            <button
              className="bg-transparent border-0 text-black float-right"
              onClick={() => setShowLogin(false)}
            >
              <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                x
              </span>
            </button>
          </div>
          <div className="relative p-6 flex-auto">
            <h1 className="text-red-500 ">{msg}</h1>
            <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
              <label className="block text-black text-sm font-bold mb-1">
                Username
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                type="text"
              />
              <label className="block text-black text-sm font-bold mb-1">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                type="password"
              />
            </form>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => setShowLogin(false)}
            >
              Close
            </button>
            <button
              className="bg-green-900 text-white active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="submit"
              onClick={login}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
