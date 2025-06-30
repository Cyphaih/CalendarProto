
import { DatePicker } from "@/components/uibasedonshadcn/DatePicker";
import { AppointmentDialogue } from "@/components/uibasedonshadcn/AppointmentDialogue";
import { TerminFilterDropDown } from "@/components/uibasedonshadcn/TerminFilter";
import { ToggleGroupSingle } from "@/components/uibasedonshadcn/ToggleGroupSingle";
import { ShowDate } from "@/components/Calendar/showdate";
import { ConditionalDisplay } from "@/components/Calendar/conditionaldisplay";


export default function Home() {
  
  
  //I want to find a better way to do this at some point, but this works out fine for now
  return (
    <div className = "m-20">
      <div className = "grid grid-row-3 items-center">
      
        <div className = "mt-4 m-2 justify-between flex-row flex">
            <div className = "ml-8 flex  w-[30%]">
             
              <div className = "mx-4   flex  rounded items-end px-2">
                <DatePicker/>
              </div>
             
              <div className = "mx-4  flex border rounded items-end">
                <ToggleGroupSingle/>
              </div>
              
            </div>
            <div className = "mr-8 flex w-[30%]">
              
              <div className = "mx-4 w-[50%] items-end justify-end flex rounded ">
                <TerminFilterDropDown/>
              </div>
              
              <div className = "mx-4  flex rounded items-end">
                <AppointmentDialogue/>
              </div>
              
            </div>

          
        </div>
        <div>
          <div className =  "flex  items-center justify-center"> 
            <ShowDate/>
        </div>

        </div>
        <div className = "flex  justify-center-safe">
            <div className = "h-[600] w-full"> 
              <ConditionalDisplay/>
            </div>
          
        </div>
      </div>
    </div>
    )
}
