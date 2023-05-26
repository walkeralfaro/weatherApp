import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ContainerCalendar } from '../styles/components/ContainerCalendar';

interface DateCalendarProps {
  onNewDate: (dateString: string) => void;
}

export const DateCalendar = ({ onNewDate }: DateCalendarProps) => {
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
    <ContainerCalendar>
      <Calendar
        onChange={handleChange}
        value={date}
      />
    </ContainerCalendar>
  );
}
