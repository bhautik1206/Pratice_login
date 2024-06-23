import React, { useState } from "react";

const App = () => {
  const getTodoFromLocalStorage = () => {
    if (localStorage.getItem("todo")) {
      console.log(localStorage.getItem("todo"));
      return JSON.parse(localStorage.getItem("todo"));
    }
    return [];
  };

  const [todo, setTodo] = useState(getTodoFromLocalStorage());
  const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };
  const handleAdd = () => {
    //on click on the add button
    setTodo((prevTodo) => {
      const todos = [...prevTodo, input];
      localStorage.setItem("todo", JSON.stringify(todos));
      return todos;
    });
    setInput("");
  };
  const handleAtoZButton = () => {
    console.log("atoz", setTodo([...todo.sort()]));
    setTodo([...todo.sort()]);
  };
  const handleZtoAButton = () => {
    setTodo([...todo.sort().reverse()]);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleOnChange} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleAtoZButton}>AtoZ</button>
      <button onClick={handleZtoAButton}>AtoZ</button>
      <ul>
        {todo.map((currTodo, index) => {
          return <li key={index}>{currTodo}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
