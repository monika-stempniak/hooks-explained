import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count:  state.count + 1 }
    case "decrement":
      return { count:  state.count - 1 }
    case "reset":
      return { count:  action.payload }
    default:
      return state
  }
}

function UseReducerHook({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {count: initialCount});

  console.log(state);

  const increment = () => dispatch({type: "increment"});
  const decrement = () => dispatch({type: "decrement"});
  const reset= () => dispatch({type: "reset", payload: initialCount });

  return (
    <>
      <h1>useReducer Hook</h1>
      <p>Count: {state.count}</p>
      <br />
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

export default UseReducerHook;