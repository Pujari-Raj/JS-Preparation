import React, { useEffect, useState } from "react";

const UsersData = () => {
  const [usersData, setUsersdata] = useState([]);

  useEffect(() => {
    // function for calling API , using async-await keyword, try-catch block
    const fetchusersdata = async () => {
      try {
        // it returns promise
        const usersdata = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await usersdata.json();
        setUsersdata(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchusersdata();
  }, []);

  return (
    <div >
      <h1>User's list:</h1>
      <ul>
        {usersData.map((user, index) => (
          <>
            <li key={index}>
              {user.id}
              {user.email}
              {user.name}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default UsersData;
