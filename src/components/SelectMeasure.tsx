import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ButtonMenu } from '../styles/components/ButtonMenu';


const SelectContainer = styled.div`
  width: fit-content;
`;

const Option = styled.option`
  background-color: ${({theme}) => theme.backgroundButton};
  color: ${ ({theme}) => theme.text };
  &:checked {
    color: #4992FF;
  }
`;

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
      <ButtonMenu as="select" value={selectedMeasure} onChange={handleSelectMeasure} >
        <Option value="temperature">Temperatura</Option>
        <Option value="humidity">Humedad</Option>
        <Option value="light">Luminosidad</Option>
      </ButtonMenu>
    </SelectContainer>
  );
};
