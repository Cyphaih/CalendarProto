"use client"
import { supabase } from "../superbase-client"
import { useState, useEffect  } from "react"

interface Act{

  id: string;
  start:Date;
  end:Date | null;
  title:string;
  notes:string;
  
}





export function ListView() {
  const monatsNamen = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "Novembar", "Dezember"];
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
  


  

  return (
    <div className="m-8  rounded-lg overflow-y-scroll">
      <h2 className="text-2xl font-bold mb-4">Aktivitäten</h2>
      <div className="grid-cols-1 grid-rows-auto space-y-4">
        {acts.map((act, actIndex) => (
          <div key = {act.id} className = "mr-8">
          <div className = "text-start text-[30px]">
            {weekdays[act.start.getDay()]}. {act.start.getDate()} {monatsNamen[act.start.getMonth()]}
          </div>
          <div key = {actIndex} className="p-4 text-start rounded bg-secondary h-30">
            <div className = "font-bold">
            {act.title} 
            </div>
            <div className = "font-light">
            Zeit: {act.start.getHours()}:{act.start.getMinutes().toString().padStart(2, '0')} 
            {act.end && (<span> {'  -  '} 
                {act.end.getHours()}:{act.end.getMinutes().toString().padStart(2, '0')}  
              </span>)}
            </div>
            <div className = "font-light">
            
             Info:    {act.notes} 
            </div>

            </div>
          </div>
        ))}


      </div>
      
    </div>
  );
}