import logo from "../assets/images/logo.jpg";
import { useState } from "react";
import { Login } from "./auth/login";
import { SignUp } from "./auth/SignUp";
import { RoomList } from "./RoomList";
import { Search } from "./Search";
import { Chat } from "./chat/chat";

export const Home = ({ user }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [chatting, setChat] = useState(false);
  return (
    <>
      <div>
        {/* Header */}
        <div className="px-5 py-5 flex justify-between bg-white ">
          <div className="font-semibold leading-6 text-base capitalize text-emerald-900 text-2xl">
            <img alt="logo" src={logo} />
          </div>
        </div>
        <div className="flex w-full flex-row  bg-white">
          {/* chatList */}
          <RoomList
            setShowSignUp={setShowSignUp}
            setShowLogin={setShowLogin}
            user={user}
            setChat={setChat}
          />
          {!chatting && <Search />}
          {chatting && user && <Chat />}
          {chatting && !user && <Login setShowLogin={setShowLogin} />}
        </div>
      </div>
      {showLogin ? (
        <>
          <Login setShowLogin={setShowLogin} />
        </>
      ) : null}
      {showSignUp ? (
        <>
          <SignUp setShowSignUp={setShowSignUp} setShowLogin={setShowLogin} />
        </>
      ) : null}
    </>
  );
};
