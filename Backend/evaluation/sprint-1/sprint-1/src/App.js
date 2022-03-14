import logo from "./logo.svg";
import "./App.css";
import { Table } from "./components/Table";
import { Route, Routes } from "react-router-dom";
import { CreateForm } from "./components/CreateForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/create/:id" element={<CreateForm />} />
      </Routes>
    </div>
  );
}

export default App;
