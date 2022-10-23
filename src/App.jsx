import "./App.css";
import "./theme.css";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./context/Datacontext";

// const initialData = {
//   name: "Ali Hassan",
//   age: 28,
//   startCount: 0,
//   theme: "light",
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "CHANGE_NAME":
//       return { ...state, name: action.newValue };

//     case "CHANGE_AGE":
//       return { ...state, age: action.newValue };

//     case "INCREASE":
//       return { ...state, startCount: action.newValue };

//     case "CHANGE_THEME":
//       return { ...state, theme: action.newValue };

//     default:
//       return state;
//   }
// };

function App() {
  const { name, changeName } = useContext(DataContext);

  // const [allData, dispatch] = useReducer(reducer, initialData);

  return (
    <div className={`App`}>
      <Link to="/page2">Go to Page2</Link>
      <br />
      <br />
      <br />

      <button style={{ marginBottom: "44px" }}>Toggle Theme</button>

      <div style={{ marginBottom: "44px" }} className="btn-container">
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
        <button style={{ marginRight: "26px" }}>Light</button>
        <button style={{ marginRight: "26px" }}>Dark</button>
        <button style={{ marginRight: "26px" }}>Grey</button>
        <button>Pink</button>
      </div>

      <h2 style={{ marginTop: "66px" }}>My name is {name} </h2>
      <button
        onClick={() => {
          changeName();
        }}
      >
        Change name
      </button>
      <br />
      <br />

      <h2>My Age is 28</h2>
      <button>Change Age</button>

      <br />
      <br />
      <br />
      <br />
      <button>count is 0</button>
    </div>
  );
}

export default App;
