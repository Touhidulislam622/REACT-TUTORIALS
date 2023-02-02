import React, { useState , useEffect } from "react";

const UseEfect = () => {
  const [count, setCount] = useState(0);
  const [isLoading, seTIsLoading] = useState(false);


  useEffect(() => {
    console.log("useEffect");
  }, [count]);

  return (
    <div>
      {console.log("rendering")}
      <h2>count: {count} </h2>
      <button
        onClick={() => { setCount((count) => count + 1)}}>  ++ </button>
        <button
        onClick={() => { seTIsLoading(!isLoading)}}>isLoading++ </button>
    </div>
  );
};

export default UseEfect;
