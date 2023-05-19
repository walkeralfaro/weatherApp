import { ReactECharts } from "./ReactEcharts";
import { useFetchMeasure } from "../hooks/useFetchMeasure";
import { optionECharts } from "../helpers/optionEChart";
import { getArrayMeasures, getArrayTimestamp } from "../helpers/getArrayMeasures";

export const Line = ({newDate = '', newMeasure = ''}) => {
  
  const { measures, isLoading, error } = useFetchMeasure(newDate);

  const options = optionECharts(getArrayTimestamp(measures, "timeStamp"), getArrayMeasures(measures, newMeasure))

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
