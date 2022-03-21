import logo from "./logo.svg";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { AllTasks } from "./component/AllTasks";
import { OneTask } from "./component/OneTask";

function App() {
  return (
    <div className="App">
      <h2>Hello All tasks</h2>
      <Routes>
        <Route path="/" element={<AllTasks />} />
        <Route path="/items/:id" element={<OneTask />} />
        {/* <Route path="/edit/:id" element={<EditTask />} /> */}
      </Routes>
    </div>
  );
}

export default App;
