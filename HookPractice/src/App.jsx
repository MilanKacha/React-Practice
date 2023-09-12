import { useRef, useState } from "react";

function App() {
  const refElement = useRef("");
  const [name, setName] = useState("");

  function Reset() {
    setName("");
    refElement.current.focus();
  }
  function Color() {
    refElement.current.style.color = "red";
  }
  // console.log(refElement);
  return (
    <>
      <h1>Learing UseRef</h1>
      <input
        type="text"
        value={name}
        ref={refElement}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={Reset}>Reset</button>
      <button onClick={Color}>Change Text color</button>
    </>
  );
}

export default App;
