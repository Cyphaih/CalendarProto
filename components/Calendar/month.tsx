"use client"


import { useCalendarContext } from '@/app/context';






export default function MonthView() {
//German because calendar will be in german

const weekdays = ["Mo","Di","Mi","Do", "Fr","Sa","So"]; 


const {currentEventDate} = useCalendarContext(); 




    
    //This will return all days that will be visible in the calendar view
    //Includes last month and next month remains to fill the week 
    const getCalendarDays = (date:Date): Date[] =>{
        
        //This list will be returned
        const dayList: Date[] = []
        
        //Checks where the month starts 
        const dayOneOfMonth = new Date(date.getFullYear(),date.getMonth(),1);
        
        //Get the  difference to the Monday of the current week, +6 and %7 because getDayreturns 0 as Sunday
        const difToMo = (dayOneOfMonth.getDay() +6 )%7;
        
        //Create and iterator date for the for loop
        const itDate = new Date(date);
        itDate.setDate(dayOneOfMonth.getDate() - difToMo);
        
        //for loop that goes through 42 days (6 weeks) and safes the new dates to the list
        for(let i = 0; i<42; i++){
            dayList.push(new Date(itDate));
            itDate.setDate(itDate.getDate()+1)
        }
        
        //Finally return the list of 42 elements to be further processed 
        return dayList;
    }
    
    
    

    const dayList = getCalendarDays(currentEventDate);

    
   

    return(
        
    <div>
        
        <div className="grid grid-cols-7 gap-px border-b">
        {weekdays.map(dayName => (
          <div key={dayName} className="text-center text-sm font-medium py-2">
            {dayName}
          </div>
        ))}
      </div>
        <div className = "grid grid-cols-7 grid-rows-auto  ">
            
            {dayList.map((day, dayIndex) => (
                <div key = {dayIndex} className = "h-20 p-2 border-2 rounded">
                    {day.getDate()}
                </div>
        
            ))}
        </div>
    </div>
    )

  
}


