import "./EndPage.css";
import { useContext } from "react";
import { AppContext } from "../../App";

function EndPage() {
  const { selectedDate, selectedService, selectedMaster, selectedTime } = useContext(AppContext);
  return (
    <div className="end-page-container">
      <div className="notification">Запись успешно оформлена!</div>
      <div className="appointment-info">
        {`Вы записаны к мастеру "${selectedMaster}" на "${selectedService}".
          Время визита ${selectedDate.toLocaleDateString("ru", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })} ${selectedTime}`}
      </div>
    </div>

  )
}

export default EndPage;