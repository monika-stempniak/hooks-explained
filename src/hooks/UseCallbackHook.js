import React, { useCallback, useEffect, useState } from "react";

export default function UseCallbackHook() {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 2]
  }, [number]);

  const styles = {
    backgroundColor: theme ? "red" : "yellow"
  }

  return (
    <>
      <h1>useCallback Hook</h1>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <br />
      <br />
      <button onClick={() => setTheme(prevTheme => !prevTheme)}>Change theme</button>
      <br />
      <div style={styles}>
        <Items getItems={getItems} />
      </div>
    </>
  );
}


const Items = ({getItems}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("Get items...");
  }, [getItems])

  return items.map(item => <p key={item}>{item}</p>)
};


