
interface DataItem {
  temperature: number;
  humidity: number;
  light: number;
  [key: string]: number;
}

// Función auxiliar que devuelve el arreglo de los valores medido como temperatura o humedad
// según lo definido en el DataItem
// parámetros: measures (JSON almacenado en el estado measure del hook "useFetchMeasures")
// y key, que es el tipo de valor que regresa según el DataItem
export const getArrayMeasures = (measures: DataItem[], key: keyof DataItem): number[] => 
{
  return measures.map((item: DataItem) => item[key as keyof DataItem]);
};

// Función que retorna el arreglo con las timeStamp para graficar los valores en el eje X
// El timeStamp es convertido de formato utc 2023-05-06T00:21:46.00Z al formato utc-5 hh:mm
export const getArrayTimestamp = (measures: DataItem[], key: string) => 
{
  return measures.map((item) => {
    const timestamp = item[key];
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0");
    return formattedTime;
  });
};