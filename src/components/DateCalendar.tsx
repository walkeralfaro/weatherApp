import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';

export const DateCalendar = ({ onNewDate }) => {
  const [date, setDate] = useState<Date>(new Date());

  function handleChange(nextValue: Date) {
    setDate(nextValue);
  }

  useEffect(() => {
    const yy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
  
    const dateString = `${yy}-${mm}-${dd}`;
    onNewDate(dateString);
  }, [date])

  return (
    <Calendar
      onChange={handleChange}
      value={date}
    />
  );
}
