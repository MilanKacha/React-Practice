import React, { useState } from "react";
import Users from "./Users";
import UserContext from "../context/UserContext";

const UserDashBoardContext = () => {
  const [user, setUser] = useState("milan");
  const users = {
    username: user,
    updateName: setUser,
  };

  return (
    <>
      <UserContext.Provider value={users}>
        <div>UserDashBoardContext</div>
        <Users />
      </UserContext.Provider>
    </>
  );
};

export default UserDashBoardContext;
