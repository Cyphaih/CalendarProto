import Header from "./calendarheader";
import { ShowDate } from "./showdate";
import { ConditionalDisplay } from "./conditionaldisplay";

export default function CalendarMain(){

    return(
        <div className = "h-[90vh] ">
        <div className = "m-20 mx-[10%] h-full">
        <div className = " items-center h-[100%]">
            <div className = "flex h-[15%] flex-col justify-end">
                <div className= "">
                    <Header/>

                </div>
                
                <div>
                <div className =  "text-center"> 
                    <ShowDate/>
                </div>
            </div>
        </div>
            <div className = "overflow-y-scroll h-[70%] justify-center-safe ">
                <div className = " w-full"> 
                <ConditionalDisplay/>
                </div>
            
            </div>
        </div>
        </div>
        </div>
    )
}