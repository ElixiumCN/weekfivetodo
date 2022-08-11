import React from 'react';
//Import components
import Todo from './Todo';
const TodoList = ({ todos, setTodos }) => {
    console.log ("todos");
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo =>(
                    <Todo 
                    setTodos={setTodos} 
                    todos={todos} 
                    key={todo.id} 
                    todo={todo}
                    text={todo.text} 
                    id={todo.id} />
                ))}
            </ul> 
                {/* <Todo /> */}
        </div>
    );
};

export default TodoList;

 // update something with props, pass down data in components to render out dynamic data
 // 
