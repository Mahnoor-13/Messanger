import React, { useState, useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";

const Input = () => {
  const { sendMessage } = useContext(ContextProvider);

  const [msg, setMsg] = useState("");
  const sendMsg = (e) => {
    console.log("e",e);
    e.preventDefault();
    sendMessage(msg);
    setMsg("")
  };
  return (
    <div className="input__form">
      <form onSubmit={sendMsg}>
        <input
          type="text"
          className="input__control"
          placeholder="Write message"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
          required
        />
      </form>
    </div>
  );
};

export default Input;
