import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react';
import './components/Header'
import Header from './components/Header';
import Todos from './components/Todos';
//1 Create Header first

function App() {
  //2
  const [todos, setTodos] = useState([])
  //3.1
  const todoNameRef = useRef()
  //3
  const handleAddTodo = () => {
    const todo = todoNameRef.current.value

    if(todo === ''){
      return
    }
    else{
      setTodos(prevTodos => {
        const new_key = prevTodos.length + 1
        return [...prevTodos, {key: new_key, text: todo}]
      })

      todoNameRef.current.value = ''
    }
  }
  //4
  const handleDeleteTodo = (e) => {
    
    const new_todo = todos.filter((todo) => {
      return todo.key.toString() !== e.currentTarget.id
    })

    setTodos(new_todo)
  }

  return (
    <div className='App'>
    {/* 1.2 
    1.3 is on component folder name Header.js*/}
      <Header title={'Todo List'}/>
      {/*3.2 */}
      <div>
            <input  type='text' style={{marginRight: 20}} ref = {todoNameRef}  />
            <button onClick={handleAddTodo}>Add</button>
        </div>
      <div className='List-Box'>
      {/*2.1 , 2.2 is on Todos.js and 4.1 proceed 4.2 Todo.js*/}
        <Todos todos={todos} className='App-Todo' delete={handleDeleteTodo}/>
      </div>
    </div>
  );
}

export default App;
