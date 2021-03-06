import React, { useState } from "react";
import { ADD } from "../action";
import { useDispatch } from "../context";

export default () => {
    const [newToDo, setNewToDo] = useState("");
    const dispatch = useDispatch();
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
        <form onSubmit={onSubmit}>
            <input 
              value={newToDo}
              type="text"
              placeholder="Add to your to do list..."
              onChange={onChange}
            />
        </form>      
    );
};