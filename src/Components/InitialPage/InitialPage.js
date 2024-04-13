import { Button, Radio, Divider, List, Space } from "antd";
import { Link } from "react-router-dom";
import "./InitialPage.css";

function InitialPage() {
  const size = 'large';
  return (
    <>
      <Link to="/services-list">
        <Button className="start_button" type="primary" size={size}>Записаться онлайн</Button>
      </Link>
    </>
  )
}
export default InitialPage;