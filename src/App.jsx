import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const App= () => {
    const[todo,setTodo]= useState("");
    const[todos,setTodos]=useState(0);
    if(todo!=="") {
        const addTodo = () => {
            setTodos([...todos, todo]);
            setTodo("");
        }
    }
    const deleteTodo = () =>{
        const newTodo = todos.filter((todo)=>{
            return todo !== text;

        });
        setTodos(newTodo);
    };



    return (
        <div className="App">
            <h1> React Todo App</h1>
            <div className="input-wrapper">
                <input type="text" name="todo" placeholder="create a new todo"
                onChange={(e)=> setTodo(e.target.value)}/>
                <button className="add-button">Add</button>
                <ul className="todo-list">{todos.map((todo,index)=>(
                <div className="todo1">
                    <li> key={index}>{todo} </li>
                    <button className="delete-button" onClick={deleteTodo(todo)}>Delete</button>

                </div>))}
                </ul>
            </div>

        </div>
    );
}