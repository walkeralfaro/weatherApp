import { FC, useEffect, useState } from "react"

interface SelectMeasureProps {
  onSelectMeasure: (selectMeasure: string) => void;
}

export const SelectMeasure: FC<SelectMeasureProps> = ({onSelectMeasure}) => {
  const [selectMeasure, setSelectMeasure] = useState('temperature');

  const handleClickSelection = (measureSelected: string) => {
    setSelectMeasure(measureSelected);
  }

  useEffect(() => {
    onSelectMeasure(selectMeasure)
  }, [selectMeasure, onSelectMeasure])
  
  return (
    <div>

      <div onClick={ () => handleClickSelection('temperature') }>Temperature</div>
      <div onClick={ () => handleClickSelection('humidity') }>Humidity</div>
      <div onClick={ () => handleClickSelection('light') }>Luminosity</div>

    </div>
  )
}
