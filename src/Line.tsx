import { ReactECharts } from "./ReactEcharts";
import { useFetchMeasure } from "./hooks/useFetchMeasure";
import { optionECharts } from "./helpers/optionEChart";
import 'react-calendar/dist/Calendar.css';

export const Line = ({newDate}) => {
  const { measures, isLoading, error } = useFetchMeasure(newDate);

  const temperatures = measures.map( (measure) => {
    return measure.light;
  })

  const date = measures.map( (measure) => {
    return measure.timeStamp;
  })

  const options = optionECharts(date, temperatures)

  return (

    <div>
      {
        error ?
        <div> Hubo un error </div>
        :
        <ReactECharts option={options} style={{height: "300px"}} theme="light" loading={isLoading}/>
      }
    </div>
  )
}
