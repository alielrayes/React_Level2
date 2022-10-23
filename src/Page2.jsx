import {useContext } from "react";
import ThemeContext from "./context/Datacontext";

const Page2 = () => {
  const {name} = useContext(ThemeContext);

  return (
    <div>
      <h2>Welcome to page2</h2>
      <h2>I'am {name}</h2>
    </div>
  );
}

export default Page2;
