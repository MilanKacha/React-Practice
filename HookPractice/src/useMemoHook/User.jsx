import React, { useMemo, useState } from "react";
import UserCart from "./UserCart";

const User = () => {
  const usersList = [
    { id: 1, name: "milan" },
    { id: 2, name: "parth" },
    { id: 3, name: "hardik" },
    { id: 4, name: "meet" },
    { id: 5, name: "param" },
  ];

  const [users, setUsers] = useState(usersList);
  const [counter, setCounter] = useState(0);
  const handelCounter = () => {
    setCounter((counter) => counter + 1);
  };
  const displayList = useMemo(
    () =>
      users.map((user, index) => {
        console.log("cart");
        return <UserCart data={user} key={index} />;
      }),
    [users]
  );

  const setUserDetails = (value) => {
    setUsers([
      ...users,
      {
        id: users.length + 1,
        name: value,
      },
    ]);
  };

  return (
    <div>
      User
      <h3>{counter}</h3>
      <button onClick={() => handelCounter()}>Increment</button>
      Enter Name :
      <input
        type="text"
        onBlur={(e) => {
          setUserDetails(e.target.value);
        }}
      />
      {displayList}
    </div>
  );
};

export default User;
