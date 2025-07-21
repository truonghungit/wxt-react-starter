// Khai báo global cho chrome để tránh lỗi TS
import React from "react";
// import CookieTable from "./components/cookie-table";
import { IconDownload, IconPlus } from "@tabler/icons-react";
import { useCookies } from "./hooks/use-cookie";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { Button } from "@/components/ui/button";
import { ExportOptions } from "./components/export-options";
import { ExportPanel } from "./components/export-panel";
import { ExportOption } from "./types/export-option";

export default function CookiesPage() {
  const [viewType, setViewType] = React.useState<"table" | "cards">("table");
  const [selected, setSelected] = React.useState<any>(null);
  const [openExportPanel, setOpenExportPanel] = React.useState<boolean>(false);
  const { cookies, loading, error } = useCookies();

  // Dummy handlers
  const handleView = (cookie: any) => setSelected(cookie);
  const handleEdit = (cookie: any) => alert("Edit: " + cookie.name);
  // Xử lý xóa cookie: chỉ demo, thực tế cần gọi chrome.cookies.remove
  const handleDelete = (cookie: any) => {
    alert("Delete: " + cookie.name);
    // Thực tế: chrome.cookies.remove({ url: ..., name: ... })
  };
  const handleImport = () => alert("Import cookies");

  const handleSelectExportOption = (option?: { format: "json" | "text" }) => {
    if (!option) {
      setOpenExportPanel(true);
      return;
    }

    handleExport({ format: option.format, encrypt: false }); // Mặc định không mã hóa
  };

  const handleExport = (option: ExportOption) => {
    const downloadLink = document.createElement("a");
    const dataExport = JSON.stringify(cookies, null, 2);
    const blob = new Blob([dataExport], { type: "application/json" });
    const fileName = "cookies_export.json";
    downloadLink.download = fileName;
    downloadLink.href = URL.createObjectURL(blob);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
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
          {/* <Button
            variant="outline"
            size="sm"
            className="space-x-1"
            onClick={handleExport}
          >
            <span>Export</span>
          </Button> */}
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
