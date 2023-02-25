import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Menu1 from "./pages/Menu1";
import Menu2 from "./pages/Menu2";
import LungClincalPage from "./pages/LungClincalPage";
import PatientInfo from "./pages/PatientInfo";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/menu" element={<Menu1 />} />   
        <Route path="/menu2" element={<Menu2 />} />

        <Route path="/LungCancerPatientDataset" element={<LungClincalPage />} />
        <Route
          path="/PatientInfopage"
          element={<PatientInfo />}
        />
      </Routes>
    </div>
  );
}

export default App;
