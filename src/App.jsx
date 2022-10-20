import "./App.css";
import { useState } from "react";

function App() {
  const [person, setPerson] = useState("Ali Hassan");
  const [age, setage] = useState("28");
  const [count, setcount] = useState(0);

  const changeName = () => {
    setage("33");
  };

  return (
    <div className="App">
      <h2>My name is {person}</h2>
      <button
        onClick={() => {
          setPerson("ELRAYEK♣");
        }}
      >
        Change name
      </button>
      <br />
      <br />

      <h2>My Age is {age}</h2>
      <button onClick={changeName}>Change Age</button>

      <br />
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          setcount(count + 10);
        }}
      >
        count is {count}
      </button>
    </div>
  );
}

export default App;
