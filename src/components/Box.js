import React, { useRef } from "react";

function Box() {
  const elementRef = useRef();
  function handleMesureClick(){
    const div = elementRef.current;
    console.log("measurements:", div.getBoundingClientRect());
  }

  return (
    <div ref={elementRef}>
      <h1>Box</h1>
      <button onClick={handleMesureClick}>Measure</button>
    </div>
  );
}

export default Box;
