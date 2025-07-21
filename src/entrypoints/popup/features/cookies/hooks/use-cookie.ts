import { useEffect, useState } from "react";
import { useCurrentTab } from "./use-current-tab";

declare const chrome: any;

export function useCookies() {
  const [cookies, setCookies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { tab, loading: tabLoading, error: tabError } = useCurrentTab();
  useEffect(() => {
    const fetchCookies = async () => {
      if (tabLoading) return;
      try {
        setLoading(true);
        if (tab && tab.url) {
          const cookies = await chrome.cookies.getAll({ url: tab.url });
          setCookies(cookies);
        } else {
          setCookies([]);
        }
      } catch (err: any) {
        setError(err?.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchCookies();
  }, [tab, tabLoading]);

  return { cookies, loading: loading || tabLoading, error: error || tabError };
}
