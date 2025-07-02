"use client"

import { useCalendarContext } from '@/app/context';
import { useState,useEffect } from 'react';
import { supabase } from '../superbase-client';


interface Act{

  id: string;
  start:Date;
  end:Date | null;
  title:string;
  notes:string;
  
}


interface CHour{
    hour:number;
    acts:Act[];
}

interface CDay{
    date:Date;
    chour:CHour[];
}




export default function WeekView(){
    const hourspday = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
    const weekdays = ["Mo","Di","Mi","Do", "Fr","Sa","So"]; 
    const [acts,setActs] = useState<Act[]>([]);
    
    const initCDay = (cDay:CDay)=>{
        for(let i = hourspday[0]; i < hourspday.length; i++){
            cDay.chour[i]= {hour:hourspday[i],acts:[]};
            
        }
    }
    
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


    //returns the week days dates depending on input date
    const getWeek = (date:Date): CDay[] => {
        const dayList: CDay[] = [];

        const difToMo = (date.getDay() + 6)%7;

        const itDate = new Date(date);
        itDate.setDate(date.getDate() - difToMo);

        for(let i = 0; i < 7; i++){
            const day:CDay = { date: new Date(itDate),chour: new Array(24)};
            initCDay(day);
            dayList.push(day);
            itDate.setDate(itDate.getDate()+1);
        }


        return dayList;
    }
    
    

    const SameDayCheck= (date1:Date,date2:Date): boolean=>{
        return(date1.getFullYear()===date2.getFullYear()&& date1.getMonth() === date2.getMonth()&& date1.getDate() === date2.getDate());

    }
    

    const {currentEventDate} = useCalendarContext(); 
    const week = getWeek(currentEventDate);
   
    let actIndex= 0;
    //This is probably inefficient with a lot of appointments, would need to change if its an issue
    for(let i= 0;i< week.length ;i++){
      
      while(actIndex < acts.length && !(!(SameDayCheck(acts[actIndex].start,week[i].date)) && acts[actIndex].start.getTime()> week[i].date.getTime()   )){
      if(SameDayCheck(acts[actIndex].start,week[i].date)){

        
        week[i].chour[acts[actIndex].start.getHours()].acts.push(acts[actIndex]);

        //console.log(week[i].chour[acts[actIndex].start.getHours()]);
      }
      actIndex = actIndex+1;
     }
     
     
    }



   

    //This is too static and not really flexible, will address this if I have more time
    return(
        <div className="">
            {/*
                I tried to make this work with a grid for way too long, this works now 
        */}

                <table className =  " border w-full table-fixed divide-y text-[15px]">
                    <thead>
                        <tr key = "HeadLine" className = "h-10">
                            <th className = "border w-[5%] "> Time </th>
                            {weekdays.map((dayName,dayIndex) => (
                                <th  key={dayIndex} className = "border">
                                    {dayName}: {week[dayIndex].date.getDate()}.{week[dayIndex].date.getMonth() +1 }
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>

                         {hourspday.map((hour,hourindex) => (     
                            <tr key = {hourindex} className = "border h-25">
                                <td className = "border rounded text-center text-[18px]">
                                    {hour}:00
                                </td>
                                {weekdays.map((dayName,dayIndex) => (
                                <td key ={`${hourindex}-${dayIndex}`} className = "border align-top text-center">
                                    
                                      {week[dayIndex].chour[hourindex].acts.map((act) =>  (
                                        <div key = {act.id} className = "bg-secondary mb-2">
                                            {act.title}
                                        </div>
                                      ))}
                                          
                                </td>
                                ))}
                            </tr>
                          ))}  
                        
                        
                    </tbody>
                </table>




        </div>


    )

    
}