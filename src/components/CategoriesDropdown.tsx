import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

function CategoriesDropdown() {
  return (
    <>
      <div className="ml-5 hidden md:block">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="secondary" className="md:w-45 lg:w-50 h-10 lg:h-12 ">
              Meat Dishes
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuItem>Chicken Parmesan</DropdownMenuItem>
            <DropdownMenuItem>Smoked Beef Bulgogi</DropdownMenuItem>
            <DropdownMenuItem>Chicken Fried Rice</DropdownMenuItem>
            <DropdownMenuItem>Barbeque Steak</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}

export default CategoriesDropdown;
