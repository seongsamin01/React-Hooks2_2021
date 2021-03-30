import React from "react";
import Add from "./Add";

      
    function App() {
      return (
        <>
          <Add />
          <ul>
            <h2>MY To Do List</h2>
            {state.toDos.map(toDo => ( 
              <li key={toDo.id}>
                <span>{toDo.text}</span>
                <span onClick={() => dispatch({ type: COMPLETE, payload: toDo.id })}>⭕️</span>
                <span onClick={() => dispatch({ type: DEL, payload: toDo.id })}>❌</span>
              </li>
            ))}
          </ul>
          <ul>
            {state.completed.length !== 0 && (
              <>
            <h2>Completed</h2>
            {state.completed.map(toDo => ( 
              <li key={toDo.id}>
                <span>{toDo.text}</span>
                <span onClick={() => dispatch({ type: DEL, payload: toDo.id })}>
                  👍
                </span>
                <span onClick={() => dispatch({ type: UNCOMPLETE, payload: toDo.id })}>
                ❌
                </span>
              </li>
          ))}</>)}
        </ul>
      </>  
    );
  }

export default App;
