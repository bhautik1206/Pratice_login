import React, { useState } from "react";
import "./Create.css";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState([]);
  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => {
        window.location.reload();
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="create_form">
      <input
        type="text"
        name=""
        placeholder="Enter the task"
        onChange={(e) => setTask(e.target.value)}
        id=""
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default Create;
