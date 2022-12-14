import React from "react";

//29:52
const Form = ({ setInputText, todos, setTodos, inputText }) => {
//Here I can write JS code & functions.
const inputTextHandler = (e) => {
    console.log(e.target.value); // E = event.
    // e.target value = retrieve what the user is typing
    setInputText(e.target.value);
};
const submitTodoHandler = (e) => {
    e.preventDefault(); // prevent page refreshing after pressing submit - reset text of the input box after a submitted entry is made.
    setTodos([
        ...todos, 
        {text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
// 

};
    return(
<form>
    <input value ={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
    <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
    </button>
    
    </form>

    );

}

export default Form;