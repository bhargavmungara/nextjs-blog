import { useState } from "react";

export default function Po() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>
        Click for incrementing {counter}
      </button>
    </>
  );
}
