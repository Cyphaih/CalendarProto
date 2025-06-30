"use client"

import { useState, useEffect } from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


interface dateAndTimeCallBack{
    onDateTimeChange:(date:Date)=>void;
}


export function DateAndTimePicker({onDateTimeChange}:dateAndTimeCallBack) {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setTime] = useState("00:00:00");

  let appDate = new Date();



  
  const setAppDate = () =>{
    
    let combinedDateTime: Date;
    if (date && selectedTime) {
      const [hours, minutes] = selectedTime.split(':').map(Number);

      

      combinedDateTime = new Date(date); // Start with the selected date
      combinedDateTime.setHours(hours, minutes, 0, 0); // Set hours and minutes
      appDate = new Date(combinedDateTime);
      console.log(appDate);
      onDateTimeChange(combinedDateTime)
    }
    
  }
 
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
    
  };
  
  useEffect(setAppDate,[selectedTime,date]);

  let eMonth = new Date();
  eMonth.setFullYear(2099);

  return (
    <div className="flex justify-end gap-4 mb-8">
      <div className="flex flex-col gap-3">
        <Label htmlFor="date-picker" className="px-1">
          Date
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-picker"
              className="w-32 justify-between font-normal"
            >
              {date ? date.toLocaleDateString() : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
            endMonth={eMonth}
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={(date) => {
                setDate(date)
                setOpen(false)
               
              
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="time-picker" className="px-1">
          Time
        </Label>
        <Input
          type="time"
          id="time-picker"
          step="1"
          value = {selectedTime}
          onChange={handleTimeChange}
          className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </div>
    </div>
  )
}
