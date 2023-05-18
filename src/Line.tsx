import { ReactECharts, ReactEChartsProps } from "./ReactEcharts";
import TEST from '../tests.json'
import { useFetchMeasure } from "./hooks/useFetchMeasure";

const dateList = TEST.map( ({timeStamp}) => {
  const epoch = parseInt(timeStamp.$date.$numberLong);
  const dateFormat = new Date(epoch);
  const date = `${dateFormat.getUTCHours()}:${dateFormat.getUTCMinutes()}`;
  return date
} )

const tempList =  TEST.map( ({temperature}) => {
  return temperature
} )


const option: ReactEChartsProps["option"]  = {
  visualMap: [
    {
      show: false,
    }
  ],
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 100,
    },
    {
      start: 0,
      end: 100,
    }
  ],
  tooltip: {
    trigger: 'axis'
  },
  xAxis: [
    {
      data: dateList,
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      max: function (value) { return value.max + 2 },
      min: function (value) { return value.min - 2 },
      axisTick: {
        alignWithLabel: true
      }
      
    }
  ],
  series: [
    {
      type: 'line',
      showSymbol: false,
      data: tempList,
    }
  ]
};

export const Line = () => {


  const { measures, isLoading } = useFetchMeasure('2023-03-2');
  
  
  return (
    <div>
      <ReactECharts option={option} style={{height: "300px"}} theme="light" loading={false}/>
    </div>
  )
}
