import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

// Estilos de la lista desplegable
const SelectContainer = styled.div`
  width: fit-content;
  padding: 1rem;
  border-radius: 8px;
`;

const Option = styled.option`
  background-color: ${({theme}) => theme.backgroundButton};
  color: ${ ({theme}) => theme.text };
  &:checked {
    color: #4992FF;
  }
`;

const Select = styled.select`
  font-family: 'Overpass', Arial, sans-serif;
  font-size: 1.6rem;
  background-color: ${({theme}) => theme.backgroundButton};
  color: #4992FF;
  padding: 1rem;
  cursor: pointer;
  border-radius: 8px;
  position: relative;
  appearance:none;
`
interface SelectMeasureProps {
  onSelectMeasure: (selectMeasure: string) => void;
}

export const SelectMeasure: FC<SelectMeasureProps> = ({onSelectMeasure}) => {
  const [selectedMeasure, setSelectedMeasure] = useState('temperature');

  const handleSelectMeasure = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMeasure(event.target.value);
  };

  useEffect(() => {
    onSelectMeasure(selectedMeasure)
  }, [selectedMeasure, onSelectMeasure])

  return (
    <SelectContainer>
      <Select value={selectedMeasure} onChange={handleSelectMeasure}>
        <Option value="temperature">Temperature &#8451;</Option>
        <Option value="humidity">Humidity %RH</Option>
        <Option value="light">Luminosity</Option>
      </Select>
    </SelectContainer>
  );
};
