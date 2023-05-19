import { ReactECharts } from "./ReactEcharts";
import { useFetchMeasure } from "./hooks/useFetchMeasure";
import { optionECharts } from "./helpers/optionEChart";
 

export const Line = ({newDate = ''}) => {

  

    const { measures, isLoading, error } = useFetchMeasure(newDate);

    const values = measures.map( (measure) => {
      return measure.temperature;
    })
  
    const date = measures.map( (measure) => {
      return measure.timeStamp;
    })
  
    const options = optionECharts(date, values)

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
