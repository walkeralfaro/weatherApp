import { FC, useState } from "react"
import { DateCalendar, Line, Modal, NavBar, SelectMeasure } from "./components";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { light, dark } from './styles/themes';
import { ButtonMenu } from "./styles/components/ButtonMenu";

import { Container } from "./styles/components/Container";
import { ContainerFlex } from "./styles/components/ContainerFlex";
import { ContainerMenus } from "./styles/components/ContainerMenus";
import { Title } from "./styles/components/Title";
import { Footer } from "./components/Footer";

// ==============================================================================
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
      <NavBar toggleTheme={toggleTheme}/> 
        <Title>Weather Station Project</Title>
        <ContainerFlex>
      <Container>


            <ContainerMenus>
              <SelectMeasure onSelectMeasure = {handleSelectMeasure} />
              <div className="calendar-wrap">
                <ButtonMenu onClick={openModal}>{date}</ButtonMenu>
                <Modal isOpen={modalOpen} onClose={closeModal}>
                  <DateCalendar onNewDate={handleNewDate} />
                </Modal>
              </div>
            </ContainerMenus>
            <Line newDate={date} newMeasure={measureSelected} themeLine={themeLine}/>
            

      </Container>
        </ContainerFlex>
        <Footer/>
    </ThemeProvider>

  )
}