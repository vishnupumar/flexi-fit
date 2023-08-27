import "./App.css";
import { Nav } from "./components/Header/Nav";
import { Main } from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import { Exercise } from "./components/Pages/Exercise";

function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/exercise/:id" element={<Exercise />} />
      </Routes>
    </div>
  );
}

export default App;
