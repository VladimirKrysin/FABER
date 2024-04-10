import "./ClientInfo.css";

import { useContext } from "react";
import { AppContext } from "../../App";

function ClientInfo() {
  const { selectedDate, selectedService, selectedMaster } =
    useContext(AppContext);

  return (
    <>
      <div>
        {selectedDate.toString()}
        {selectedService}
      </div>
      <div className="clientInfo">Third Page &#128522;</div>
    </>
  );
}

export default ClientInfo;
