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
  const { selectedDate, setSelectedDate } = useContext(AppContext);

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
        <div>
          {Object.keys(masters).map((master) => (
            <div key={master}>
              <div className="master">{master}</div>
            </div>
          ))}
        </div>
        <div className="datePickerContainer">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline
            locale={ru}
          />
        </div>
        {Object.keys(masters).length !== 0 &&
        masters["Алексей"][
          selectedDate
            .toLocaleDateString("en", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })
            .replaceAll("/", "-")
        ] ? (
          <div>
            {Object.entries(
              masters["Алексей"][
                selectedDate
                  .toLocaleDateString("en", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })
                  .replaceAll("/", "-")
              ]
            ).map(([time, appointmentData]) => (
              <Button>{time}</Button>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <Link to="/client-info">
        <Button className="next_button" type="primary" size={size}>Далее</Button>
      </Link>
    </>
  );
}

export default AppointmentTime;
