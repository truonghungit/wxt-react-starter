import { useEffect, useState } from "react";

declare const chrome: any;

export function useCurrentTab() {
  const [tab, setTab] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTab = async () => {
      try {
        setLoading(true);
        const tabs = await chrome.tabs.query({
          active: true,
          lastFocusedWindow: true,
        });
        setTab(tabs[0] || null);
      } catch (err: any) {
        setError(err?.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    
    fetchTab();

    function handleTabUpdated(tabId: number, changeInfo: any, updatedTab: any) {
      if (updatedTab.active && changeInfo.url) {
        setTab((prevTab: any) => {
          if (!prevTab || prevTab.id !== tabId) return prevTab;
          return { ...prevTab, url: changeInfo.url };
        });
      }
    }
    chrome.tabs.onUpdated.addListener(handleTabUpdated);
    return () => {
      chrome.tabs.onUpdated.removeListener(handleTabUpdated);
    };
  }, []);

  return { tab, loading, error };
}
