export const getMeasures = async (date: string) => {

  const url = `${import.meta.env.VITE_API_HOST}${import.meta.env.VITE_API_END_POINT}${date}`;
  
  try {

    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error message: ', error);
  }
}

