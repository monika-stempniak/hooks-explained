import { useState, useRef, useLayoutEffect } from "react";

export const useMeasure = dependency => {
  const [rect, setRect] = useState({});
  const myRef = useRef();

  useLayoutEffect(() => {
    const btnRect = myRef.current.getBoundingClientRect();
    setRect(btnRect);
  }, [dependency]);

  return [rect, myRef];
}


