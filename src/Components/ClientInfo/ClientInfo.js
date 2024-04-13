import "./ClientInfo.css";
import { useState } from 'react';
import { Button } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";

function ClientInfo() {
  const navigate = useNavigate();

  const { selectedDate, selectedService, selectedMaster, selectedTime } = useContext(AppContext);

  const [clientName, setClientName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  // const master = 'Алексей';
  // // const date = '04-11-2024'
  // const time = '12-30';
  // const serviceName = 'Мужская стрижка (700 руб., 45 мин.)';

  const [size, setSize] = useState('large');

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:3000/appointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        clientName,
        phone,
        email,
        comment,
        master: selectedMaster,
        date: selectedDate.toLocaleDateString("en", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
          .replaceAll("/", "-"),
        time: selectedTime,
        serviceName: selectedService
      })
    });

    const result = await response.json();
    if (result.success) {
      navigate("/end-page")
    }
    console.log(result);
  };


  return (
    <>
      <div className="title">Введите свои данные</div>
      <label>
        Имя: <input name="clientName" value={clientName} onChange={e => setClientName(e.target.value)} />
      </label>
      <label>
        Телефон: <input name="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="79221110500" />
      </label>
      <label>
        Email: <input name="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        <p>Комментарий:</p>
        <textarea name="comment" value={comment} onChange={e => setComment(e.target.value)}></textarea>
      </label>
      <Button className="confirm_button" type="primary" size={size} onClick={handleSubmit}>Записаться</Button>
    </>
  );
}

export default ClientInfo;
