import React, { useEffect } from "react";
import { types, useFetch } from "./custom/useFetch";

function UseReducerHook() {
  const [state, dispatch] = useFetch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => dispatch({ type: types.FETCH_SUCCESS, payload: data }))
      .catch(_err => dispatch({ type: types.FETCH_ERROR }))
  }, [dispatch])

  return (
    <>
     <h1>useReducer async Hook</h1>
     {state.loading && <p>Loading...</p>}
     {state.error && <p>{state.error}</p>}
     {state.data.map(user => <div key={user.id}>{user.name}</div>)}
    </>
  )
}

export default UseReducerHook;