import React, { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const API_URL = "https://jsonplaceholder.typicode.com/todos";

  // method for making api call

  const fetchTodos = async () => {
    try {
      //
      const response = await fetch(API_URL);

      if (response.ok) {
        const todoData = await response.json();

        // console.log(todoData);

        setTodos(todoData);
      }else{
        console.log(response.status)
      }
    } catch (error) {
        console.error(error)
    }
  };

  useEffect(() => {
    //
    fetchTodos();
  },[])

  return (
    <div className="">
        {todos.map((todo, index) => (
            <ul key={index}>
                <li>{todo.id}</li>
                <li>{todo.title}</li>
            </ul>
        ))}
    </div>
  )
};

export default Todos;
