import React from "react";
import Todo from "./Todo";

//2.3
const Todos = (props) => {

    return(
    
        <div>
        {/*2.4 is component name /Todo.js 4.2/ then proceed to 4.3 Todo*/}
            {props.todos.map(todo => <Todo key={todo.key} id={todo.key} todo={todo.text} delete={props.delete}/>)}
        </div>
    )
}

export default Todos
