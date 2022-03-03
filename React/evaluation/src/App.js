import logo from "./logo.svg";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Login } from "./component/Login";
import { UserPage } from "./component/UserPage";
import { Navbar } from "./component/Navbar";
import { Post } from "./component/Post";
import { NotFound } from "./component/NotFound";
import { UserPost } from "./component/UserPost";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<Post />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/:id/post" element={<UserPost />} />
      </Routes>
    </div>
  );
}

export default App;
