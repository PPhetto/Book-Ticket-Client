import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login/login';
import Home from "./Home/home"

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
