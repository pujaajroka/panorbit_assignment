import {
  BrowserRouter ,
  Routes,
  Route
  } from "react-router-dom";

import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Gallery from "./pages/gallery/gallery";
import Posts from "./pages/posts/posts";
import Todo from "./pages/todo/todo";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/profile/:id' element={<Profile />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/posts' element={<Posts/>}></Route>
        <Route path='/todo' element={<Todo />}></Route>
      </Routes>
    </>
  );
}

export default App;
