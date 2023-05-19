import { FC, useState } from "react"
import 'react-calendar/dist/Calendar.css';
import { DateCalendar, Line, Modal, SelectMeasure } from "./components";


export const App: FC = () => {
  const [date, setDate] = useState('');
  const [measureSelected, setMeasureSelected] = useState('')
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

  const handleSelectMeasure = (selectMeasure: string) => {
    setMeasureSelected(selectMeasure)
  }
  
  return (
    <div>
      <SelectMeasure onSelectMeasure = {handleSelectMeasure} />
      <div>
        <button onClick={openModal}>{date}</button>
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <DateCalendar onNewDate={handleNewDate} />
        </Modal>
      </div>
      <Line newDate={date} newMeasure={measureSelected}/>
    </div>
  )
}