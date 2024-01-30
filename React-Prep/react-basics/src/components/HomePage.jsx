import React, { useState } from "react";

/**
 * 1.Using useState hook with Object Spread Syntax(user object)
 * 2. Using Callback Function in useState(student object)
 */
const HomePage = () => {
  const [user, setUser] = useState({ name: "", age: 20 });
  const [student, setstudent] = useState(() => {
    return { sname: "", age: 20 };
  });

  // console.log(user);

  const updateName = (newName) => {
    setUser({ ...user, name: newName });
  };

  const updateStud = (newName) => {
    setstudent((prevStudent) => {
      return { ...prevStudent, sname: newName };
    });
  };

  // console.log(user);
  console.log(student);
  return (
    <div>
      {/* <input value={user.name} onChange={(e) => updateName(e.target.value)} /> */}

      <input value={student.sname} onChange={(e) => updateStud(e.target.value)} />
    </div>
  );
};

export default HomePage;
