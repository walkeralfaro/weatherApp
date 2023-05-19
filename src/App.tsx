import { FC, useState } from "react"
import { DateCalendar } from "./DateCalendar"
import { Line } from "./Line"
import { Modal } from "./Modal";
import 'react-calendar/dist/Calendar.css';

export const App: FC = () => {
  const [date, setDate] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleNewDate = (newDate: string) => {
    setDate(newDate);
    setModalOpen(false);
  };
  
  return (
    <div>
      <div>
        <button onClick={openModal}>{date}</button>
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <DateCalendar onNewDate={handleNewDate} />
        </Modal>
      </div>
      <Line newDate={date}/>
    </div>
  )
}