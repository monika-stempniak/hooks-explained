import { useReducer } from "react";

export const types = {
  FETCH_PENDING: "FETCH_PENDING",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR"
}

const initialState = {
  loading: true,
  error: "",
  data: []
}

export const useFetch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case types.FETCH_SUCCESS:
        return {
          ...initialState,
          loading: false,
          data: action.payload
        }
      case types.FETCH_ERROR:
        return {
          loading: false,
          error: "Something went wrong!",
          data: []
        }
      default:
        return state
    }
  }

  return [state, dispatch];
}
