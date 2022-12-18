import React, { useEffect, useState } from "react";

export default function TestEslintConfig() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setNumber(0);
  }, [setNumber]);

  return (
    <>
      <h3>TestEslintConfig</h3>
      <p>Count: {number}</p>
      <button type="button" onClick={() => setNumber(number + 1)}>
        Count: +
      </button>
      <button type="button" onClick={() => setNumber(number - 1)}>
        Count: -
      </button>
    </>
  );
}
