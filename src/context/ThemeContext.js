import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = {
  theme:
    localStorage.getItem("mtTheme") === null
      ? "Light"
      : localStorage.getItem("mtTheme") === "Light"
      ? "Light"
      : "Dark",
};

//,

const reducer = (firstState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...firstState, theme: action.newValue };
    default:
      return firstState;
  }
};

export function ThemeProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);
  const toggleTheme = (newName) => {
    localStorage.setItem("mtTheme", newName);
    dispatch({ type: "CHANGE_THEME", newValue: newName });
  };

  return (
    <ThemeContexttt.Provider value={{ ...firstState, toggleTheme }}>
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;
