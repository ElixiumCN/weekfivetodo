import React, { useState } from "react";
import './App.css';
// Importing components
import Form from "./components/Form";
import TodoList from './components/TodoList';
// data does not flow upwards in react
// states and props flow downwards into components
// 3:39 hello
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>What do you want to do today?</h1>
      </header>
      <Form 
        inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList setTodos={setTodos} todos={todos}/> 
    </div>
  );
}

export default App;
