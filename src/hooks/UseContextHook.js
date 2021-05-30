import React, { useContext, useState } from "react";

const SignInContext = React.createContext();

export default function UseContextHook() {
  const [signedIn, setSignedIn] = useState(false);

  const handleSignIn = () => {
    setSignedIn(prevSignedIn => !prevSignedIn);
  }

  return (
    <>
      <h1>useContext Hook</h1>
      <SignInContext.Provider value={signedIn}>
        <button onClick={handleSignIn}>Sign in</button>
        <br />
        <Items />
      </SignInContext.Provider>
    </>
  );
}

const Items = () => {
  return [1, 2, 3].map(item => <Item key={item} item={item}/>)
};

const Item = ({item}) => {
  const signedIn = useContext(SignInContext);
  return <p style={{background: signedIn ? "green" : "black"}}>Item: {item}</p>
};
