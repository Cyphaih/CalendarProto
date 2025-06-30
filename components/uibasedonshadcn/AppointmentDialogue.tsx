"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { supabase } from "../superbase-client"
import { useState } from "react"
import { DateAndTimePicker } from "./DateAndTimePicker"


export function AppointmentDialogue() {
  
  const [isDialogOpen, setIsDialogOpen] = useState(false); 
  const[selectedDate,setSelectedDate] = useState(new Date());
  const[newAct, setNewAct] = useState({title: "", notes: "",start: selectedDate})

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) =>{
    e.preventDefault()
    newAct.start = selectedDate;
    console.log(selectedDate);
    
    const {error, data} = await supabase.from("appointments").insert(newAct).single();
    if (error) {
       
        console.error("Supabase Insertion Error:", error.message || error);
       
      } else {
        
        console.log("Activity saved successfully!", data);
        setNewAct({ title: "", notes: "", start:selectedDate }); 
        setIsDialogOpen(false);
    } 
    
   
  }

  return (
    <Dialog open ={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <form >
        <DialogTrigger asChild>
          <Button variant="outline" className = "text-[20px]">Termin erstellen</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Neuen Termin erstellen</DialogTitle>
            <DialogDescription>
               Speichert einen Termin in einer Datenbank.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-4">
              <Label htmlFor="title"> Titel </Label>
              <Input id="title" name="title" value = {newAct.title} 
              onChange={(e) => setNewAct((prev) =>({...prev,title: e.target.value}))}
              />
            </div>
            <div className="grid gap-4">
              <Label htmlFor="notes"> Notizen</Label>
              <Input id="notes" name="notes" value = {newAct.notes}
              onChange={(e) => setNewAct((prev) =>({...prev,notes: e.target.value}))}
               />
            </div>

            <div className="grid  gap-4">
              
              <DateAndTimePicker
                onDateTimeChange={setSelectedDate}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type = "button" variant="outline">Schließen</Button>
              
            </DialogClose>
            <Button onClick={handleSubmit} >Speicher Aktivität</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
