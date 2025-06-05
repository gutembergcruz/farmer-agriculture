import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Farmer from "./pages/Farmer";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/farmer" element={<Farmer />} />
      </Routes>
    </>
  );
}

export default App;
