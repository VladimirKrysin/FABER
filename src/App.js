import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// components
import ServicesList from "./Components/ServicesList/ServicesList.js";
import AppointmentTime from "./Components/AppointmentTime/AppointmentTime.js";
import ClientInfo from "./Components/ClientInfo/ClientInfo.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <h3>
          Форма записи(тут можно общий для все страниц текст или ещё че-нибудь
          добавить)
        </h3>

        <Routes>
          <Route path="/" element={<ServicesList />} />
          <Route path="appointment-time" element={<AppointmentTime />} />
          <Route path="client-info" element={<ClientInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
