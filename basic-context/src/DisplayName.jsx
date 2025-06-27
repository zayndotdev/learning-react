import React, { useContext } from "react";
import UserContext from "./context/UserContext";

function DisplayName() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1 className="text-5xl text-white">
        {user ? `Welcome, ${user.username}` : "Please log in to see your name"}
      </h1>
    </div>
  );
}

export default DisplayName;
