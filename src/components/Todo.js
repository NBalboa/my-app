import React from "react";

//2.4
//4.3
const Todo = (props) => {
    return (
        <div>
            <p className="List">{props.todo}</p>
            <button className="Delete" onClick={props.delete} id={props.id}>Delete</button>
        </div>
    )
}

export default Todo