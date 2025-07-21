import { useCallback } from "react";
import { CookieItem } from "../types/cookie";

export type ExportOption = {
  format: "json";
  encrypt: boolean;
};

export function useExport(cookies: CookieItem[], option: ExportOption) {
  const exportCookies = useCallback(() => {
    const data = JSON.stringify(cookies, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "cookies.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [cookies]);

  return exportCookies;
}
