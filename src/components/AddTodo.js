import React, { forwardRef, useState } from "react";


// const AddTodo = forwardRef((props, ref) => {
//     return (
//         <div>
//             <input ref={ref} type='text' style={{marginRight: 20}}  />
//             <button onClick={props.todo}>Add</button>
//         </div>
//     )
// } 

const AddTodo = forwardRef((props, ref) => {
    return (
        <div>
            <input onChange={props.todo} value={props.value} ref={ref} type='text' style={{marginRight: 20}}  />
            <button onClick={props.todo}>Add</button>
        </div>
    )
})

export default AddTodo