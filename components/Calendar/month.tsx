"use client"


import { useCalendarContext } from '@/app/context';
import { useState,useEffect} from 'react';
import { supabase } from "../superbase-client"

interface Act{

  id: string;
  start:Date;
  end:Date | null;
  title:string;
  notes:string;
  
}

interface CDay{
    date:Date;
    acts:Act[]
}




export default function MonthView() {
//German because calendar will be in german

const weekdays = ["Mo","Di","Mi","Do", "Fr","Sa","So"]; 
const [acts,setActs] = useState<Act[]>([]);



  const fetchData = async ()=>{
    
    const { error, data } =await supabase.from("appointments").select("*").order("start",{ascending: true})
  
    
    if(error){
      console.error("Error reading data", error);
      return;
    }
  
  
    const transformedActs: Act[] = data.map(item => ({
    ...item, 
     
    
    start: new Date(item.start),
    end: item.end ? new Date(item.end):null,
   
    
    }));
  
  
    setActs(transformedActs);
    
  
    }
    useEffect(() => {
      fetchData();
    }, []);
    
const {currentEventDate} = useCalendarContext(); 




    
    //This will return all days that will be visible in the calendar view
    //Includes last month and next month remains to fill the week 
    const getCalendarDays = (date:Date): CDay[] =>{
        
        //This list will be returned
        const dayList: CDay[] = []
        
        //Checks where the month starts 
        const dayOneOfMonth = new Date(date.getFullYear(),date.getMonth(),1);
        
        //Get the  difference to the Monday of the current week, +6 and %7 because getDayreturns 0 as Sunday
        const difToMo = (dayOneOfMonth.getDay() +6 )%7;
        
        //Create and iterator date for the for loop
        const itDate = new Date(date);
        itDate.setDate(dayOneOfMonth.getDate() - difToMo);
        
        //for loop that goes through 42 days (6 weeks) and safes the new dates to the list
        for(let i = 0; i<42; i++){
           
            dayList.push({ date: new Date(itDate),acts:[]});
            itDate.setDate(itDate.getDate()+1)
        }
        
        //Finally return the list of 42 elements to be further processed 
        return dayList;
    }
    
    const SameDayCheck= (date1:Date,date2:Date): boolean=>{
        return(date1.getFullYear()===date2.getFullYear()&& date1.getMonth() === date2.getMonth()&& date1.getDate() === date2.getDate());

    }
    

    const dayList = getCalendarDays(currentEventDate);

    let actIndex= 0;
    //This is probably inefficient with a lot of appointments, would need to change if its an issue
    for(let i= 0;i< dayList.length ;i++){
      
      while(actIndex < acts.length && !(!(SameDayCheck(acts[actIndex].start,dayList[i].date)) && acts[actIndex].start.getTime()> dayList[i].date.getTime()   )){
      if(SameDayCheck(acts[actIndex].start,dayList[i].date)){
        dayList[i].acts.push(acts[actIndex]);
      }
      actIndex = actIndex+1;
     }
     
     
    }
   
    
   

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
                <div key = {dayIndex} className = "h-20 p-2 border-2 rounded flex ">
                    <div>
                      {day.date.getDate()}
                    </div>
                    
                    <div className ="ml-1 w-full flex flex-col overflow-hidden">
                    {day.acts.map((act) => (
                    <div key = {act.id} className = "text-[10px] flex mb-1 justify-end pr-2 bg-secondary">
                      {act.title}
                    </div>
                    ))}
                    </div>
                </div>
        
            ))}
        </div>
    </div>
    )

  
}


