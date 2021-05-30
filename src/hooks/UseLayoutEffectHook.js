import React, { useState, useRef } from "react";
import { useMeasure } from "./custom/useMeasure";

function UseLayoutEffectHook() {
  const [count, setCount] = useState(1);
  const [rect, spanRef] = useMeasure(count);

  const btnRef = useRef();

  const handleClick = () => setCount(count * 10);

  return (
    <div>
      <h1>useLayoutEffect Hook</h1>
      <span ref={spanRef}>{count}</span>
      <br />
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <button ref={btnRef} onClick={handleClick}>Click</button>
    </div>
  );
}

export default UseLayoutEffectHook;
