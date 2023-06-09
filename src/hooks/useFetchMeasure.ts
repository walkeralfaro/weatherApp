import { useEffect, useState } from "react"
import { getMeasures } from "../helpers/getMeasures";

export const useFetchMeasure = (date: string) => {
  const [measures, setMeasures] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getValuesMeasured = async() => {

    if(date) {
      const newMeasures = await getMeasures(date);
      
      if(newMeasures.error) {
        setError(true);
        return;
      }
      setError(false);
      setMeasures(newMeasures);
      setIsLoading(false); 
    }
  }

  useEffect(() => {
    getValuesMeasured(); 
    setIsLoading(true);    
  }, [date]);


  return {
    error,
    measures,
    isLoading,
  }
}
