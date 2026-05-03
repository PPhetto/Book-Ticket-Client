import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login/login';
import Home from "./Home/home";
import Register from './Register/register';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
