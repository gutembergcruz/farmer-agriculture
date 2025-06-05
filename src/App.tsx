import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Farmer from "./pages/Farmer";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/farmer" element={<Farmer />} />
      </Routes>
    </>
  );
}

export default App;
