import "./App.css";
import { Home } from "./Component/Home";
import { Route, Routes } from "react-router-dom";
import { TodoItem } from "./Component/TodoItem";
import { EditItem } from "./Component/EditItem";
import { NotFoundItem } from "./Component/NotFoundItem";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todo/:id" element={<TodoItem />} />
        <Route path="todo/:id/edit" element={<EditItem />} />
        <Route path="*" element={<NotFoundItem />} />
      </Routes>
    </div>
  );
}

export default App;
