import React, { useState } from "react";
import Users from "./Users";
import UserContext from "../context/UserContext";

const UserDashBoardContext = () => {
  const users = {
    username: "milan",
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
