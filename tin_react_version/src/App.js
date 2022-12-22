import Header from "./components/fragments/Header";
import Navigation from "./components/fragments/Navigation";
import MainContent from "./components/other/MainContent";
import Footer from "./components/fragments/Footer";
import DriverList from "./components/driver/list/DriverList";
import DriverDetails from "./components/driver/details/DriverDetails";
import DriverForm from "./components/driver/DriverForm";
import TransitList from "./components/transit/list/TransitList";
import TransitDetails from "./components/transit/details/TransitDetails";
import TransitForm from "./components/transit/TransitForm";
import VehicleList from "./components/vehicle/list/VehicleList";
import VehicleDetails from "./components/vehicle/details/VehicleDetails";
import VehicleForm from "./components/vehicle/VehicleForm";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/drivers" element={<DriverList />} />
        <Route path="/drivers/add" element={<DriverForm />} />
        <Route path="/drivers/edit/:driverId" element={<DriverForm />} />
        <Route path="/drivers/details/:driverId" element={<DriverDetails />} />
        <Route path="/transits" element={<TransitList />} />
        <Route path="/transits/add" element={<TransitForm />} />
        <Route path="/transits/edit/:transitId" element={<TransitForm />} />
        <Route
          path="/transits/details/:transitId"
          element={<TransitDetails />}
        />
        <Route path="/vehicles" element={<VehicleList />} />
        <Route path="/vehicles/add" element={<VehicleForm />} />
        <Route path="/vehicles/edit/:vehicleId" element={<VehicleForm />} />
        <Route
          path="/vehicles/details/:vehicleId"
          element={<VehicleDetails />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
