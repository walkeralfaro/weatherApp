import { useEffect, useState } from "react"
import { getMeasures } from "../helpers/getMeasures";

export const useFetchMeasure = (date: string) => {

  const [measures, setMeasures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getValuesMeasured = async() => {
    const newMeasures = await getMeasures(date);
    setMeasures(newMeasures);
    setIsLoading(false);
  }

  useEffect(() => {
    getValuesMeasured();    
  }, []);
  
  return {
    measures,
    isLoading,
  }
}
