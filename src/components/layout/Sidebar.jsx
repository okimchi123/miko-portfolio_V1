import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Sidebar() {
return (
    <Sheet>
      <SheetTrigger>
            <AlignJustify color="white" className="md:hidden" />
      </SheetTrigger>
      <SheetContent side="top">
        <main className="px-4">
            Projects
        </main>
      </SheetContent>
    </Sheet>
  );
}