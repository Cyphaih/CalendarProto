import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function TerminFilterDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Termine Filtern</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>Termin Filter (Noch in Arbeit)</DropdownMenuLabel>
        
        <DropdownMenuGroup>
         
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Sortieren nach ... </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Zeit</DropdownMenuItem>
                <DropdownMenuItem>Art des Termins</DropdownMenuItem>
                <DropdownMenuItem>Anderem ... </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Filtern nach ...</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Art 1</DropdownMenuItem>
                <DropdownMenuItem>Art 2</DropdownMenuItem>
                <DropdownMenuItem>Art 3</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        
        
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
