import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data";

function CategoriesDropdown( {selectedSlug, selectedCategoryId, setSelectedCategoryId}: {
  selectedSlug: string, 
  selectedCategoryId: string,
  setSelectedCategoryId: (categoryId: string) => void
} ) {

  const selectedCategories = categories.filter(
    (cat) => cat.slug === selectedSlug
  );

  const selectedCategory = categories.find(cat => cat._id === selectedCategoryId);

  return (
    <>
      <div className="ml-5 hidden md:block">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="secondary" className="md:w-45 lg:w-50 h-10 lg:h-12 ">
              {selectedCategory ? selectedCategory.name : (selectedCategories.length > 0 ? selectedCategories[0].name : "Select Category")}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            {selectedCategories.map((cat) => (
              <DropdownMenuItem 
                key={cat._id}
                onClick={() => setSelectedCategoryId(cat._id)}
              >
                {cat.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}

export default CategoriesDropdown;
