import type { PropFunction } from "@builder.io/qwik";
import { component$, $, useSignal } from "@builder.io/qwik";

interface Tab {
  name: string;
  active: boolean;
}

interface TabMenuProps {
  tabs: Tab[];
  onTabClick: PropFunction<(name: string) => void>;
}

export const TabMenu = component$(({ tabs, onTabClick }: TabMenuProps) => {
  const activeTab = useSignal(tabs.find((tab) => tab.active)?.name || "");

  // Wrap the function inside $() to ensure it's reactive and serializable
  const handleTabClick = $((name: string) => {
    activeTab.value = name;
    onTabClick(name); // Properly referenced with $
  });

  return (
    <div class="flex overflow-x-auto whitespace-nowrap md:items-center items-start md:text-[32px] text-base font-semibold text-[#B1B1B1] gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          class={`inline-block px-4 py-2 pb-6 ${
            activeTab.value === tab.name ? "text-[#F02480] border-b-4 border-[#F02480]" : ""
          }`}
          onClick$={() => handleTabClick(tab.name)} // Use handleTabClick properly wrapped
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
});