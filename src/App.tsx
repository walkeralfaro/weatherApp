import { FC, useState } from "react"
import { DateCalendar, Line, Modal, SelectMeasure } from "./components";
import { GlobalStyles } from "./styles/GlobalStyles";
import 'react-calendar/dist/Calendar.css';


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
      <GlobalStyles/>
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