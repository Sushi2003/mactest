import {useState} from "react";
const [todo,setTodo]=useState("");
const[todos,setTodos]=useState(0);
//program to add all the todos entered
const addTodo = ()=>{
    if(todo!== " "){
        setTodos([...todos,todo]);
        setTodo("");
    }
}
//creating a delete function
const deleteTodo=(text)=>{
    const newTodo= todos.filter((todo)=>{
        return todo!=text;
    }
    );
    setTodos(newTodo);
}








//creating a initial mockup,
const App=()=>{
    return <div>
        <h1>
            React todo App
        </h1>
        <div>
            <input type="text" name="todo" placeholder="Create a new todo" onChange={(e)=>{setTodo(e.target.value)}}></input>
            <button onClick={addTodo}>Add</button>
        </div>
        <div>
            <ul className="todo-list">
                <li key={index}>{todo}</li>
                <button className="delete-todo" onClick={deleteTodo}>Delete</button>
            </ul>
        </div>
    </div>
}