import "./AppointmentTime.css";
import "../../App.css";
import { useEffect, useState, useContext } from "react";
import { Button, Radio, Divider, List, Space } from "antd";
import DatePicker from "react-datepicker";
import { ru } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";

import { Link } from "react-router-dom";

import { AppContext } from "../../App";

function AppointmentTime() {
  // global state
  const { selectedDate, setSelectedDate, selectedMaster, setSelectedMaster, selectedTime,
    setSelectedTime } = useContext(AppContext);

  // component state
  const [masters, setMasters] = useState({});
  const [size, setSize] = useState('middle');

  useEffect(() => {
    fetch("http://localhost:3000/masters")
      .then((response) => response.json())
      .then((masters) => setMasters(masters))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="container">
        <div className="masters_wrapper">
          <div>Выберите мастера</div>
          <div clientName="masters-list">
            {Object.keys(masters).map((master) => (
              <div key={master}>
                <Button type={selectedMaster === master ? "primary" : "secondary"} className="master" onClick={() => setSelectedMaster(master)}>{master}</Button>
              </div>
            ))}
          </div>
        </div>
        <div className="dateTime_wrapper">
          <div className="datePickerContainer">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              inline
              locale={ru}
            />
          </div>
          {masters[selectedMaster] &&
            masters[selectedMaster][
            selectedDate
              .toLocaleDateString("en", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })
              .replaceAll("/", "-")
            ] ? (
            <>
              <div className="time-slots">
                {Object.entries(
                  masters[selectedMaster][
                  selectedDate
                    .toLocaleDateString("en", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })
                    .replaceAll("/", "-")
                  ]
                ).map(([time, appointmentData]) =>
                  appointmentData.appointment.clientName && appointmentData.appointment.phone ? <Button disabled>{time}</Button> :
                    <Button type={selectedTime === time ? "primary" : ""} onClick={() => setSelectedTime(time)}>{time}</Button>
                )}
              </div>
              {selectedTime && (
                <Link to="/client-info">
                  <Button className="next_button" type="primary" size={size}>Далее</Button>
                </Link>
              )}
            </>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      {/* <Link to="/client-info">
        <Button className="next_button" type="primary" size={size}>Далее</Button>
      </Link> */}
    </>
  );
}

export default AppointmentTime;
