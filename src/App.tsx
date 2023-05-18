import { useState } from "react"
import { DateCalendar } from "./DateCalendar"
import { Line } from "./Line"


export const App = () => {
  const [date, setDate] = useState('')

  const handleNewDate = (newDate: string) => {
    setDate(newDate)
  }
  
  return (
    <div>
      <DateCalendar onNewDate={handleNewDate} />
      <Line newDate={date}/>
    </div>
  )
}
