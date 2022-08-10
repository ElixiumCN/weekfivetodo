import React from "react";

//11:35
const Form = ({ setInputText }) => {
//Here I can write JS code & functions.
const inputTextHandler = (e) => {
    console.log(e.target.value); // E = event.
    // e.target value = retrieve what the user is typing
    setInputText(e.target.value);
};
    return(
<form>
    <input onChange={inputTextHandler} type="text" className="todo-input" />
    <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
    </button>
    <div className="select">
        <select name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
        </select>
    </div>
    </form>

    );

}

export default Form;