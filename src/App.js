import React, { useReducer } from "react";

  const INCREMENT = "increment";
  const DECREMENT = "decrement";

  const reducer = (state, action) => {
    if (action === INCREMENT) {
      return { count: state.count + 1 };
    } else if (action === DECREMENT) {
      return { count: state.count - 1 };
    }
    return { count: 99 };
  };
    
  function App() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
      <>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch (INCREMENT)}>Add</button>
        <button onClick={() => dispatch (DECREMENT)}>Remove</button>
      </>  
    );
  }

export default App;
