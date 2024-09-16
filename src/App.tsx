import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className={"container"}>
      <div className="header">
        <Header />
      </div>
      <div className="side-nav">
        <NavBar />
      </div>
      <div className="main-area">
        <h1>Header</h1>
      </div>
    </div>
  );
}

export default App;
