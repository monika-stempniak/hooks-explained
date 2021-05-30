import React, { useState, useMemo, useEffect } from "react";

export default function UseMemoHook() {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(false);

  const calculation = useMemo(() => calculate(number), [number]);
  // console.log(calculation);

  function calculate(num) {
    // console.log("Calculation...");
    for (let i = 0; i <= 1000000; i++) {};
    return num * 2;
  }

  const styles = useMemo(() => ({
    backgroundColor: theme ? "red" : "yellow"
  }), [theme]);

  useEffect(() => {
    console.log("Theme changed");
  }, [styles])

  return (
    <>
      <h1>useMemo Hook</h1>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <br />
      <br />
      <button onClick={() => setTheme(prevTheme => !prevTheme)}>Change theme</button>
      <p style={styles}>{calculation}</p>
    </>
  );
}
