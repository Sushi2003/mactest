// import React, {useRef, useEffect, useState} from 'react';
// import {carSvg} from "./svg-fixture.js";
//
// console.log('carSvg', carSvg);
//
// // parse the svg
//
//
// function SVGEditor() {
//
//   // let counter = 0;
//   const [counter, setCounter] = useState(0);
//
//   const ref = useRef(); // ignore this part
//
//   useEffect(() => {
//     if (ref.current) {
//       const parser = new DOMParser();
//       const doc = parser.parseFromString(carSvg, 'image/svg+xml');
//       const svgNode = doc.firstElementChild;
//       console.log('svgNode',svgNode);
//
//       const div = ref.current;
//       div.appendChild(svgNode);
//     }
//   }, [ref]);
//
//   useEffect(() => {
//     console.log('running useEffect for counter ', counter);
//   }, [counter]);
//
//
//   const handleClick = () => {
//     setCounter(counter + 1);
//     // console.log('counter is ', counter);
//   }
//
//     return (
//         <div>
//           <h1>SVG Editor</h1>
//           <div ref={ref}>
//             This is the div element.
//           </div>
//
//           <div>
//             Value of the counter is {counter}
//           </div>
//
//           <button onClick={handleClick}>
//             Increment
//           </button>
//
//         </div>
//     );
// }
//
// export default SVGEditor;


//using useState
import {useState} from "react";


const App = ()=> {

    const [todo,setTodo]= useState("");
//adding a item to todos list now
    const [todos,setTodos]= useState([]);
    const addTodo = () => {
        if(todo !== " ") {
            setTodos([...todos, todo]);
            setTodo(""); //turning the value as null after adding
        }
    };
//deleting todo items
    const deleteTodo = (text)=> {
        const newTodos = todos.filter((todo)=>{
            return todo != text;
        });
        setTodos(newTodos);
    }

    return <div className='App'>
        <h1>
            React Todo App
        </h1>

        <div className='inputwrapper'>
            <input type="text" name="todo" placeholder="create a new todo"
            onChange={(e) =>{
            setTodo(e.target.value)}// gets the value to getter method
            }/>
            <button className="add-button" onClick={addTodo}>Add </button>
        </div>
        {/*displaying the todos item */}
        <ul className="todo-list">
            {todos.map((todo,index)=> (
                <div className="todo">
                    <li key={index}>{todo}</li>
                    <button className="delete-button" onClick={ () =>deleteTodo(todo)}>Delete</button>
                </div>
                ))}
        </ul>
    </div>
};
export default App;
//output not produced
