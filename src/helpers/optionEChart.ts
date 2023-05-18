import { ReactEChartsProps } from "../ReactEcharts";

export const optionECharts = ( dateList: string[], valueList: number[] ) => {

  const option: ReactEChartsProps["option"]  = {

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
        data: valueList,
      }
    ],
  };

  return (
    option
  )
  
} 
