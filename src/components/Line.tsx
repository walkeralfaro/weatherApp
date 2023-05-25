import { ReactECharts } from "./ReactEcharts";
import { useFetchMeasure } from "../hooks/useFetchMeasure";
import { optionECharts } from "../helpers/optionEChart";
import { getArrayMeasures, getArrayTimestamp } from "../helpers/getArrayMeasures";

interface LineProps {
  newDate: string,
  newMeasure: string,
  themeLine: "light" | "dark";
}

export const Line = ({newDate = '', newMeasure = '', themeLine = 'light'}:LineProps) => {
  
  const { measures, isLoading, error } = useFetchMeasure(newDate);

  // Echart requiere que se definan las propiedades del gráfico en el arreglo "option"
  // La función "options" retorna el arreglo "option" y tiene dos parámetros de entradas
  // que son: el timeStamp y el Array de valores 
  const options = optionECharts(getArrayTimestamp(measures, "timeStamp"), getArrayMeasures(measures, newMeasure))

  return (
    <div>
      {
        error ?
        <div> Hubo un error </div>
        :
        <ReactECharts option={options} style={{height: "300px"}} theme={themeLine} loading={isLoading}/>
      }
    </div>
  )
}
