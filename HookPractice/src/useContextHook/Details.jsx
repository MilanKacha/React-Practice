import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Details = () => {
  const { updateName } = useContext(UserContext);
  //   console.log(data);
  return (
    <>
      <div>Details</div>
      <button onClick={() => updateName("milan")}>Update Name</button>
    </>
  );
};

export default Details;
