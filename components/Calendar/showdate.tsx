"use client"
import { useCalendarContext } from "@/app/context";

export function ShowDate(){
    const monatsNamen = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "Novembar", "Dezember"]
    const {  currentEventDate} = useCalendarContext(); 

    const year = currentEventDate.getFullYear();
    const month = monatsNamen[currentEventDate.getMonth()];
    return(
        <div className = " text-[40px]">
            {month} {year}
        </div>
    )
}