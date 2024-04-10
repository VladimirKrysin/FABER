import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState, createContext } from "react";

// components
import ServicesList from "./Components/ServicesList/ServicesList.js";
import AppointmentTime from "./Components/AppointmentTime/AppointmentTime.js";
import ClientInfo from "./Components/ClientInfo/ClientInfo.js";

export const AppContext = createContext(null);

function App() {
  // id выбраной услуги
  const [selectedService, setSelectedService] = useState(1);
  // имя выбранного мастера
  const [selectedMaster, setSelectedMaster] = useState([]);
  // выбранная дата посещения
  const [selectedDate, setSelectedDate] = useState(
    new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
  );

  return (
    <>
      <BrowserRouter>
        <h3>
          Форма записи(тут можно общий для все страниц текст или ещё че-нибудь
          добавить)
        </h3>

        <AppContext.Provider
          value={{
            selectedService,
            setSelectedService,
            selectedMaster,
            setSelectedMaster,
            setSelectedDate,
            selectedDate,
          }}
        >
          <Routes>
            <Route path="/" element={<ServicesList />} />
            <Route path="appointment-time" element={<AppointmentTime />} />
            <Route path="client-info" element={<ClientInfo />} />
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
    </>
  );
}
export default App;
