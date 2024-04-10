import "./ServicesList.css";
import { useEffect, useState, useContext } from "react";

import { Link } from "react-router-dom";
// ui
import { Button, Radio, Divider, List, Space } from "antd";

import { AppContext } from "../../App";

function ServicesList() {
  const { selectedService, setSelectedService } = useContext(AppContext);

  const [services, setServices] = useState([]);
  const onChange = (e) => {
    setSelectedService(e.target.value);
  };
  useEffect(() => {
    fetch("http://localhost:3000/haircut-services")
      .then((response) => response.json())
      .then((services) => setServices(services))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Divider orientation="left">Парикмахерские услуги</Divider>
      <Radio.Group
        className="servicesList"
        onChange={onChange}
        value={selectedService}
      >
        <Space direction="vertical">
          {services.map((service) => (
            <Radio value={service.id}>
              {service.name} ({service.price} руб., {service.duration} мин.)
            </Radio>
          ))}
        </Space>
      </Radio.Group>
      <Link to="/appointment-time">Далее</Link>
    </>
  );
}

export default ServicesList;
