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
import { SubTitleH2 } from "./styles/components/SubTitleH2";
import { ContainerUp } from "./styles/components/ContainerUp";
import { Paragraph } from "./styles/components/Paragraph";

// ==============================================================================
type ThemeLine = 'dark' | 'light';

export const App: FC = () => {
  const [date, setDate] = useState('');
  const [measureSelected, setMeasureSelected] = useState('')
  const [modalOpen, setModalOpen] = useState(false);
  const [theme, setTheme] = useState(dark);
  const [themeLine, setThemeLine] = useState<ThemeLine>('dark')

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
        <ContainerFlex>
          <Container>
            <Title>Weather Station IoT - Lima</Title>

            <ContainerUp>

              <ContainerMenus className="resumen-wrap">
                <SubTitleH2>resumen</SubTitleH2>
                <Paragraph>App que monitorea en tiempo real variables climatológicas de temperatura, 
                humedad y radiación luminosa a través de una estación metereológica <strong>inalámbrica</strong> ubicada en Lima, 
                implementada con tecnologías IoT de bajo consumo y alta eficiencia como MQTT.</Paragraph>
              </ContainerMenus>

              <ContainerMenus className="menus-wrap">
                <div className="select-wrap">
                  <SubTitleH2>variable</SubTitleH2>
                  <SelectMeasure onSelectMeasure = {handleSelectMeasure} />
                </div>
                <div className="calendar-wrap">
                  <SubTitleH2>fecha</SubTitleH2>
                  <ButtonMenu onClick={openModal}>{date}</ButtonMenu>
                  <Modal isOpen={modalOpen} onClose={closeModal}>
                    <DateCalendar onNewDate={handleNewDate} />
                  </Modal>
                </div>
              </ContainerMenus>
            </ContainerUp>

            <ContainerMenus>
              <Line newDate={date} newMeasure={measureSelected} themeLine={themeLine} nameValue={measureSelected}/>

            </ContainerMenus>
                
          </Container>
        </ContainerFlex>
        <Footer/>
    </ThemeProvider>

  )
}