import "./AppointmentTime.css";
import '../../App.css';
import { useEffect, useState } from 'react';
import { Button, Radio, Divider, List, Space } from 'antd'
import DatePicker from "react-datepicker";
import { ru } from 'date-fns/locale';
import "react-datepicker/dist/react-datepicker.css";

import { Link } from "react-router-dom";

function AppointmentTime() {
  const [masters, setMasters] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/masters")
      .then(response => response.json())
      .then(masters => setMasters(masters))
      .catch(error => console.error(error));
  }, []);
  const [currentDate, setCurrentDate] = useState(new Date(new Date().getTime() + 24 * 60 * 60 * 1000))
  console.log(currentDate.toLocaleDateString('en', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).replaceAll('/', '-'));
  return (
    <>
      <div className='container'>
        <div>
          {Object.keys(masters).map((master) => (
            <div key={master}>
              <div className='master'>{master}</div>
            </div>
          ))}
        </div>
        <div className='datePickerContainer'>
          <DatePicker
            selected={currentDate}
            onChange={(date) => setCurrentDate(date)}
            inline
            locale={ru}
          />
        </div>
        {Object.keys(masters).length !== 0 && masters['Алексей'][currentDate.toLocaleDateString('en', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        }).replaceAll('/', '-')] ?
          <div>
            {Object.entries(masters['Алексей'][currentDate.toLocaleDateString('en', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric'
            }).replaceAll('/', '-')]).map(([time, appointmentData]) =>
              <Button>{time}</Button>
            )}
          </div>
          : <div></div>}
      </div>
      <Link to="/client-info">Далее</Link>
    </>
  );
}

export default AppointmentTime;
