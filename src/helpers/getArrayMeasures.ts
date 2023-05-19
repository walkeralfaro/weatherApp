
interface DataItem {
  temperature: number;
  humidity: number;
  light: number;
  [key: string]: number;
}

export const getArrayMeasures = (measures: DataItem[], key: keyof DataItem): number[] => {
  return measures.map((item: DataItem) => item[key as keyof DataItem]);
};

export const getArrayTimestamp = (measures: DataItem[], key: string) => {
  return measures.map((item) => {
    const timestamp = item[key];
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0");
    return formattedTime;
  });
};