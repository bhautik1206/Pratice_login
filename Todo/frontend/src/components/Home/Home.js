import React, { useEffect, useState } from "react";
import Create from "../Create/Create";
import axios from "axios";
import "../Create/Create.css";
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from "react-icons/bs";
import { MdOutlineModeEdit, MdCheck } from "react-icons/md";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id, currentDone) => {
    axios.put(`http://localhost:3001/update/${id}`, { done: !currentDone })
      .then(result => {
        setTodos(prevTodos =>
          prevTodos.map(todo =>
            todo._id === id ? { ...todo, done: !todo.done } : todo
          )
        );
      })
      .catch(err => console.log(err));
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`)
      .then(result => {
        setTodos(prevTodos => prevTodos.filter(todo => todo._id !== id));
      })
      .catch(err => console.log(err));
  }

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  }

  const handleUpdate = (id) => {
    axios.put(`http://localhost:3001/edit/${id}`, { task: editingText })
      .then(result => {
        setTodos(prevTodos =>
          prevTodos.map(todo =>
            todo._id === id ? { ...todo, task: editingText } : todo
          )
        );
        setEditingId(null);
        setEditingText("");
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="home">
      <h1>Todo List</h1>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2>No record found</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div className="task" key={todo._id}>
            <div className="checkbox" onClick={() => handleEdit(todo._id, todo.done)}>
              {todo.done ? <BsFillCheckCircleFill className="icon" /> : <BsCircleFill className="icon" />}
              {editingId === todo._id ? (
                <input
                className="edit_input"
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
              ) : (
                <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
              )}
            </div>
            <div>
              <span><BsFillTrashFill className="icon" onClick={() => handleDelete(todo._id)} /></span>
              {editingId === todo._id ? (
                <MdCheck className="icon" onClick={() => handleUpdate(todo._id)} />
              ) : (
                <MdOutlineModeEdit className="icon" onClick={() => startEditing(todo._id, todo.task)} />
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
