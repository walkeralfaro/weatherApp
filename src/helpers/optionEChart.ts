import { ReactEChartsProps } from "../components/ReactEcharts";

interface optionEChartsProps {
  dateList: string[],
  valueList: number[],
  nameValue: string,
}

export const optionECharts = ( {dateList , valueList , nameValue }: optionEChartsProps ) => {

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
    title: [
      { 
        left: 'center',
        text: `${nameValue} graph during the day`,
      }
    ],
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
        name: `${nameValue}`,
        nameLocation: 'middle',
        nameGap: 50,
        nameTextStyle: {
          fontWeight: 'bolder',
          fontSize: 14,
        },
        max: function (value) { return value.max + 1 },
        min: function (value) { return value.min - 1 },
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
    textStyle: 
    {
      fontFamily: 'overpass',
      fontWeight: 'bold',
    },

  };

  return (
    option
  )
  
} 
