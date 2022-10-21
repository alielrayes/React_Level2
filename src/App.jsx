import "./App.css";
import "./theme.css";
import { useState } from "react";

function App() {
  const [person, setPerson] = useState("Ali Hassan");
  const [age, setage] = useState("28");
  const [count, setcount] = useState(0);
  const [theme, settheme] = useState("");

  const changeName = () => {
    setage("33");
  };

  return (
    <div className={`App ${theme}`}>
      <button
        onClick={() => {
          settheme(theme == "" ? "dark" : "");
        }}
        style={{ marginBottom: "44px" }}
      >
        Toggle Theme
      </button>

      <div
        onChange={() => {
          settheme(theme == "" ? "dark" : "");
        }}
        style={{ marginBottom: "44px" }}
        className="btn-container"
      >
        <i className="fa fa-sun-o" aria-hidden="true" />
        <label className="switch btn-color-mode-switch">
          <input
            type="checkbox"
            name="color_mode"
            id="color_mode"
            defaultValue={1}
          />
          <label
            htmlFor="color_mode"
            data-on="Dark"
            data-off="Light"
            className="btn-color-mode-switch-inner"
          />
        </label>
        <i className="fa fa-moon-o" aria-hidden="true" />
      </div>

      <div>
        <button
          onClick={() => {
            settheme("");
          }}
          style={{ marginRight: "26px" }}
        >
          Light
        </button>
        <button
          onClick={() => {
            settheme("dark");
          }}
          style={{ marginRight: "26px" }}
        >
          Dark
        </button>
        <button
          onClick={() => {
            settheme("grey");
          }}
          style={{ marginRight: "26px" }}
        >
          Grey
        </button>
        <button
          onClick={() => {
            settheme("pink");
          }}
        >
          Pink
        </button>
      </div>

      <h2 style={{ marginTop: "66px" }}>My name is {person}</h2>
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
