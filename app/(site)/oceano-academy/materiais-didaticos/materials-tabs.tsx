"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { validTabs, type ValidTab } from "./constants";
import {
  MaterialsTabContent,
  type MaterialsTab,
} from "./materials-tab-content";

function isValidTab(tab?: string | null): tab is ValidTab {
  return validTabs.includes(tab as ValidTab);
}

type MaterialsTabsProps = {
  tabs: MaterialsTab[];
  defaultTab: ValidTab;
};

export function MaterialsTabs({ tabs, defaultTab }: MaterialsTabsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tabParam = searchParams.get("tab");
  const activeTab = isValidTab(tabParam) ? tabParam : defaultTab;

  function handleTabChange(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

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
