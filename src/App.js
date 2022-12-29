import { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./components/Home";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) {
      const foundUser = JSON.parse(loggedUser);
      setUser(foundUser);
    }
  }, []);
  return <Home user={user} />;
}

export default App;
