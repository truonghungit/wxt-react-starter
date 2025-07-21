import React from "react";
import { useCookies } from "./hooks/use-cookie";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { Button } from "@/components/ui/button";
import { ExportOptions } from "./components/export-options";
import { ExportPanel } from "./components/export-panel";
import { useExport } from "./hooks/use-export";

export default function CookiesPage() {
  const [selected, setSelected] = React.useState<any>(null);
  const [openExportPanel, setOpenExportPanel] = React.useState<boolean>(false);
  const { cookies, loading, error } = useCookies();

  const handleExport = useExport();

  const handleSelectExportOption = (format: "json" | "text" | null) => {
    if (!format) {
      setOpenExportPanel(true);
      return;
    }

    handleExport({ format, encrypt: false }); // Mặc định không mã hóa
  };

  return (
    <div>
      <div className="mb-2 flex flex-wrap items-center justify-between space-y-2 gap-x-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Cookies</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your cookies!
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="space-x-1">
            <span>Add</span>
          </Button>
          <Button variant="outline" size="sm" className="space-x-1">
            <span>Import</span>
          </Button>
          <ExportOptions onSelect={handleSelectExportOption} />

          <ExportPanel
            open={openExportPanel}
            onOpenChange={setOpenExportPanel}
            handleExport={handleExport}
          />
        </div>
      </div>
      <div className="flex-1 overflow-auto py-1 lg:flex-row lg:space-y-0 lg:space-x-12">
        <DataTable columns={columns} data={cookies} />
      </div>
    </div>
  );
}
