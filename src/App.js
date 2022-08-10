import React, { useState } from "react";
import './App.css';
// Importing components
import Form from "./components/Form";
import TodoList from './components/TodoList';

// 3:39 hello
function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        {/* <h1>ElixiumCN Todo List {inputText}</h1> */}
        {/* reading the value of inputText & printing it in an h1 tag */}
        <h1>ElixiumCN Todo List</h1>
      </header>
      <Form setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;
