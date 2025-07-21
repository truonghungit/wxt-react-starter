import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ExportOptionsProps = {
  onSelect: (option?: { format: "json" | "text" }) => void;
};

export function ExportOptions({ onSelect }: ExportOptionsProps) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="space-x-1">
          <span>Export</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => onSelect({ format: "json" })}
        >
          Export as JSON
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => onSelect({ format: "text" })}
        >
          Export as Text
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={() => onSelect()}>
          More Options
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
