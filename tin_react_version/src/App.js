import Header from "./components/fragments/Header";
import Navigation from "./components/fragments/Navigation";
import MainContent from "./components/other/MainContent";
import Footer from "./components/fragments/Footer";
import DriverList from "./components/driver/DriverList";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/drivers" element={<DriverList />} />
        <Route path="/transits" />
        <Route path="/vehicles" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
