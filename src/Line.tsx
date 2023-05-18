import { ReactECharts } from "./ReactEcharts";
import { useFetchMeasure } from "./hooks/useFetchMeasure";
import { optionECharts } from "./helpers/optionEChart";

export const Line = () => {
  
  
  const { measures, isLoading } = useFetchMeasure('2023-03-22');

  const temperatures = measures.map( (measure) => {
    return measure.temperature;
  })

  const date = measures.map( (measure) => {
    return measure.timeStamp;
  })

  const options = optionECharts(date, temperatures)
  
  // console.log(measures);
  // console.log(isLoading);

  
  return (
    <div>
      <ReactECharts option={options} style={{height: "300px"}} theme="light" loading={isLoading}/>
    </div>
  )
}
