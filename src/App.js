import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState, createContext } from "react";

// components
import ServicesList from "./Components/ServicesList/ServicesList.js";
import AppointmentTime from "./Components/AppointmentTime/AppointmentTime.js";
import ClientInfo from "./Components/ClientInfo/ClientInfo.js";
import InitialPage from "./Components/InitialPage/InitialPage.js";
import EndPage from "./Components/EndPage/EndPage.js";

export const AppContext = createContext(null);

function App() {
  // id выбраной услуги
  const [selectedService, setSelectedService] = useState(1);
  // имя выбранного мастера
  const [selectedMaster, setSelectedMaster] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  // выбранная дата посещения
  const [selectedDate, setSelectedDate] = useState(
    new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
  );

  return (
    <>
      <BrowserRouter>
        <h3>
          Салон FABER
        </h3>

        <AppContext.Provider
          value={{
            selectedService,
            setSelectedService,
            selectedMaster,
            setSelectedMaster,
            setSelectedDate,
            selectedDate,
            selectedTime,
            setSelectedTime
          }}
        >
          <Routes>
            <Route path="/" element={<InitialPage />} />
            <Route path="services-list" element={<ServicesList />} />
            {/* <Route path="/" element={<ServicesList />} /> */}
            <Route path="appointment-time" element={<AppointmentTime />} />
            <Route path="client-info" element={<ClientInfo />} />
            <Route path="end-page" element={<EndPage />} />
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
    </>
  );
}
export default App;
