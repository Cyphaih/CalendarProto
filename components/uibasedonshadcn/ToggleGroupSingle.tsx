"use client"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

import { useCalendarContext } from '@/app/context';

type CalendarView = 'list' | 'month' | 'week';


export function ToggleGroupSingle() {
  const { currentView, setCurrentView } = useCalendarContext();

  return (
    
    <ToggleGroup 
      className = "m-1 rounded" type="single"
      value ={currentView}
      onValueChange={(value:CalendarView) =>{
        if(value){
          setCurrentView(value);
        }
      }}>
        
      <ToggleGroupItem className = "rounded" value= "list" aria-label="Show List View">
        Liste 
      </ToggleGroupItem>
      <ToggleGroupItem className = "rounded" value="month" aria-label="Show Month View">
        Monat
      </ToggleGroupItem>
      <ToggleGroupItem className = "rounded" value="week" aria-label="Show Week View">
        Woche
      </ToggleGroupItem>
    </ToggleGroup>

    
  )
}
