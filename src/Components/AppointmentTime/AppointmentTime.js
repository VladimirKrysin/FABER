import "./AppointmentTime.css";

import { Link } from "react-router-dom";

function AppointmentTime() {
  return (
    <>
      <div className="appointmentTime">Second Page &#128522;</div>
      <Link to="/client-info">Далее</Link>
    </>
  );
}

export default AppointmentTime;
