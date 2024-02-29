import React, { useEffect, useState } from "react";

const UsersData = () => {
  const [usersData, setUsersdata] = useState([]);

  useEffect(() => {
    // function for calling API
    const fetchusersdata = async () => {
      try {
        // it retuens promise
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
    <div>
      <h1>User's list:</h1>
      <ul>
        {usersData.map((user, index) => (
          <>
            <li key={index}>
              {/* <li>  */}
              {user.id}
              {/* </li> */}
              {/* <li>  */}
              {user.email}
              {/* </li> */}
              {/* <li>  */}
              {user.name}
              {/* </li>     */}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default UsersData;
