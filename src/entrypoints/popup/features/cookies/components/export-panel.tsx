import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ExportOption } from "../types/export-option";

type ExportPanelProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  handleExport?: (option: ExportOption) => void;
};

export function ExportPanel({ open, onOpenChange, handleExport }: ExportPanelProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Export Cookies</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          {/* <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Name</Label>
            <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Username</Label>
            <Input id="sheet-demo-username" defaultValue="@peduarte" />
          </div> */}
        </div>
        <SheetFooter>
          <Button type="button" onClick={() => handleExport({ format: "json", encrypt: false })}>Export</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
