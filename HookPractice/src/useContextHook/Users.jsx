import React, { useContext } from "react";
import Details from "./Details";
import UserContext from "../context/UserContext";

const Users = () => {
  const data = useContext(UserContext);
  //   console.log(data);
  return (
    <>
      <div>Users:{data.username}</div>
      <Details />
    </>
  );
};

export default Users;
