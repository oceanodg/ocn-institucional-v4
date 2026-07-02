"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { validTabs, type ValidTab } from "./constants";
import {
  MaterialsTabContent,
  type MaterialsTab,
} from "./materials-tab-content";

function isValidTab(tab?: string | null): tab is ValidTab {
  return validTabs.includes(tab as ValidTab);
}

function getTabFromUrl(): ValidTab | null {
  const tab = new URLSearchParams(window.location.search).get("tab");
  return isValidTab(tab) ? tab : null;
}

type MaterialsTabsProps = {
  tabs: MaterialsTab[];
  defaultTab: ValidTab;
};

export function MaterialsTabs({ tabs, defaultTab }: MaterialsTabsProps) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<ValidTab>(defaultTab);

  const updateUrl = useCallback(
    (tab: string) => {
      const params = new URLSearchParams(window.location.search);
      params.set("tab", tab);
      window.history.replaceState(null, "", `${pathname}?${params.toString()}`);
    },
    [pathname]
  );

  function handleTabChange(value: string) {
    if (!isValidTab(value)) return;
    setActiveTab(value);
    updateUrl(value);
  }

  useEffect(() => {
    function onPopState() {
      setActiveTab(getTabFromUrl() ?? defaultTab);
    }

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [defaultTab]);

  return (
    <Tabs
      value={activeTab}
      onValueChange={handleTabChange}
      className="w-full"
    >
      <TabsList className="mb-6" variant="line">
        <TabsTrigger value="antigo">AT</TabsTrigger>
        <TabsTrigger value="novo">NT</TabsTrigger>
        <TabsTrigger value="personagens">Personagens</TabsTrigger>
        <TabsTrigger value="parabolas">Parábolas</TabsTrigger>
      </TabsList>

      {tabs.map((tab) => (
        <MaterialsTabContent key={tab.value} {...tab} />
      ))}
    </Tabs>
  );
}
