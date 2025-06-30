"use client"
import React, { useState } from 'react';
import { useCalendarContext } from '@/app/context';

export default function WeekView(){
    
    const weekdays = ["Mo","Di","Mi","Do", "Fr","Sa","So"]; 

    //returns the week days dates depending on input date
    const getWeek = (date:Date): Date[] => {
        const dayList: Date[] = [];

        const difToMo = (date.getDay() + 6)%7;

        let itDate = new Date(date);
        itDate.setDate(date.getDate() - difToMo);

        for(let i = 0; i < 7; i++){
            dayList.push(new Date(itDate));
            itDate.setDate(itDate.getDate()+1);
        }


        return dayList;
    }
    
    const {currentEventDate} = useCalendarContext(); 
    const week = getWeek(currentEventDate);
    const [today] = useState(new Date());
    const hourspday = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
   

    //This is too static and not really flexible, will address this if I have more time
    return(
        <div className="h-[600] overflow-y-scroll">
            {/*
                I tried to make this work with a grid for way too long, this works now 
        */}

                <table className =  " border w-full table-fixed divide-y text-[15px]">
                    <thead>
                        <tr key = "HeadLine" className = "h-10">
                            <th className = "border w-[5%] "> Time </th>
                            {weekdays.map((dayName,dayIndex) => (
                                <th  key={dayIndex} className = "border">
                                    {dayName}: {week[dayIndex].getDate()}.{week[dayIndex].getMonth() +1 }
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
                                <td key ={`${hourindex}-${dayIndex}`} className = "border">
                                    
                                </td>
                                ))}
                            </tr>
                          ))}  
                        
                        
                    </tbody>
                </table>




        </div>


    )

    
}