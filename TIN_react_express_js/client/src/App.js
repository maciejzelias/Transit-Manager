import { useState, useEffect } from "react";
import Header from "./components/fragments/Header";
import Navigation from "./components/fragments/Navigation";
import MainContent from "./components/other/MainContent";
import Footer from "./components/fragments/Footer";
import DriverList from "./components/driver/list/DriverList";
import DriverDetails from "./components/driver/details/DriverDetails";
import DriverAdd from "./components/driver/form/DriverAdd";
import DriverEdit from "./components/driver/form/DriverEdit";
import TransitList from "./components/transit/list/TransitList";
import TransitDetails from "./components/transit/details/TransitDetails";
import TransitAdd from "./components/transit/form/TransitAdd";
import TransitEdit from "./components/transit/form/TransitEdit";
import VehicleList from "./components/vehicle/list/VehicleList";
import VehicleDetails from "./components/vehicle/details/VehicleDetails";
import VehicleAdd from "./components/vehicle/form/VehicleAdd";
import VehicleEdit from "./components/vehicle/form/VehicleEdit";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginCard from "./components/other/LoginCard";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [cardIsShown, setCardIsShown] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const logoutHandler = () => {
    setUser(null);
    navigate(0);
  };
  const loginHandler = (userData) => {
    setUser(userData);
    setCardIsShown(false);
    navigate(0);
  };

  const openLoginCard = () => {
    setCardIsShown(true);
  };
  const closeLoginCard = () => {
    setCardIsShown(false);
  };

  return (
    <div>
      {cardIsShown && (
        <LoginCard onClose={closeLoginCard} onSubmit={loginHandler} />
      )}
      <Header />
      <Navigation
        onLogout={logoutHandler}
        openLoginCard={openLoginCard}
        user={user}
      />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/drivers" element={<DriverList />} />
        <Route path="/drivers/add" element={<DriverAdd />} />
        <Route path="/drivers/edit/:driverId" element={<DriverEdit />} />
        <Route path="/drivers/details/:driverId" element={<DriverDetails />} />
        <Route path="/transits" element={<TransitList />} />
        <Route path="/transits/add" element={<TransitAdd />} />
        <Route path="/transits/edit/:transitId" element={<TransitEdit />} />
        <Route
          path="/transits/details/:transitId"
          element={<TransitDetails />}
        />
        <Route path="/vehicles" element={<VehicleList />} />
        <Route path="/vehicles/add" element={<VehicleAdd />} />
        <Route path="/vehicles/edit/:vehicleId" element={<VehicleEdit />} />
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
