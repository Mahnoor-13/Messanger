import React, { useContext } from "react";
import Welcome from "./Welcome";
import Messager from "./Messages";
import { ContextProvider } from "../context/ContextProvider";
import Messages from "./Messages";

const Home = () => {
  const { loader, user } = useContext(ContextProvider);
  return (
    <div>{!loader ? user ? <Messages /> : <Welcome /> : "loading......."}</div>
  );
};

export default Home;
