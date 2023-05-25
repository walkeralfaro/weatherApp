import { FC, useState } from "react"
import { DateCalendar, Line, Modal, NavBar, SelectMeasure } from "./components";
import { GlobalStyles } from "./styles/GlobalStyles";
import 'react-calendar/dist/Calendar.css';
import { ThemeProvider } from "styled-components";
import { light, dark } from './styles/themes';
import { ThemeButton } from "./styles/components/ThemeButton";

type ThemeLine = 'dark' | 'light';

export const App: FC = () => {
  const [date, setDate] = useState('');
  const [measureSelected, setMeasureSelected] = useState('')
  const [modalOpen, setModalOpen] = useState(false);
  const [theme, setTheme] = useState(light);
  const [themeLine, setThemeLine] = useState<ThemeLine>('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === light ? dark : light));
    setThemeLine(themeLine === 'dark' ? 'light' : 'dark')
  };

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

    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <NavBar/>
      <ThemeButton onClick={toggleTheme}>cambiar tema</ThemeButton>
      <SelectMeasure onSelectMeasure = {handleSelectMeasure} />
      <div>
        <button onClick={openModal}>{date}</button>
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <DateCalendar onNewDate={handleNewDate} />
        </Modal>
      </div>
      <Line newDate={date} newMeasure={measureSelected} themeLine={themeLine}/>
      
    </ThemeProvider>

  )
}