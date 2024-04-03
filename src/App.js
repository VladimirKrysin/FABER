import './App.css';
import { useEffect, useState } from 'react';
import { Button, Radio, Divider, List, Space } from 'antd'


function App() {
  const [services, setServices] = useState([]);
  const [activeService, setActiveService] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setActiveService(e.target.value);
  };

  useEffect(() => {
    fetch("http://localhost:3000/haircut-services")
      .then(response => response.json())
      .then(services => setServices(services))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <Divider orientation="left">Парикмахерские услуги</Divider>
      <Radio.Group className='servicesList' onChange={onChange} value={activeService}>
        <Space direction="vertical">
          {services.map((service => (
            <Radio value={service.id}>{service.name} ({service.price} руб., {service.duration} мин.)</Radio>
          )))}
        </Space>
      </Radio.Group >
    </>
  );
}

export default App;