import "./App.css";

function App() {
  let person = "Ali Hassan";

  const changeName = () => {
    console.log("hiiiiiiiiiiii");
    person = "ELRAYEK ♣";
  };

  return (
    <div className="App">
      <h2>My name is {person}</h2>
      <button onClick={changeName}>Change name</button>
    </div>
  );
}

export default App;
