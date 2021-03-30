import React, { useReducer, useState } from "react";
import reducer, { initialState, ADD, DEL, COMPLETE, UNCOMPLETE } from "./reducer";

      
    function App() {
      const [state, dispatch] = useReducer(reducer, initialState);
      const [newToDo, setNewToDo] = useState("");
      const onSubmit = e => {
        e.preventDefault();
        dispatch({ type: ADD, payload: newToDo });
        setNewToDo("");
      };
      const onChange = e => {
        const {
          target: { value }
        } = e;
        setNewToDo(value);
      };
      return (
        <>
          <h1>Add to do</h1>
          <form onSubmit={onSubmit}>
            <input 
              value={newToDo}
              type="text"
              placeholder="Add to your to do list..."
              onChange={onChange}
            />  
          </form>
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
