import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    <ToastContainer position="top-center" />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/update/:id" element={<Contact />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
