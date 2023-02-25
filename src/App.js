import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Menu1 from "./pages/Menu1";
import Menu2 from "./pages/Menu2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/menu" element={<Menu1 />} />   
        <Route path="/menu2" element={<Menu2 />} />
      </Routes>
    </div>
  );
}

export default App;
