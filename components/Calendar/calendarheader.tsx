import { DatePicker } from "@/components/uibasedonshadcn/DatePicker";
import { AppointmentDialogue } from "@/components/uibasedonshadcn/AppointmentDialogue";
import { TerminFilterDropDown } from "@/components/uibasedonshadcn/TerminFilter";
import { ToggleGroupSingle } from "@/components/uibasedonshadcn/ToggleGroupSingle";


export default function Header() {
    return(
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
    )
}