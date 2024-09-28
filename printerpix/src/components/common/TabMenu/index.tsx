// TabMenu.tsx
import type { PropFunction } from "@builder.io/qwik";
import { component$, $, useSignal } from "@builder.io/qwik";

interface Tab {
  name: string;
  active: boolean;
}

interface TabMenuProps {
  tabs: Tab[];
  onTabClick: PropFunction<(name: string) => void>; // Use PropFunction to ensure proper serialization
}

export const TabMenu = component$(({ tabs, onTabClick }: TabMenuProps) => {
  const activeTab = useSignal(tabs.find((tab) => tab.active)?.name || "");

  // Wrap the function inside $() to ensure it's reactive and serializable
  const handleTabClick = $((name: string) => {
    activeTab.value = name;
    onTabClick(name); // Properly referenced with $
  });

  return (
    <div class="flex flex-wrap gap-10 items-center self-center mt-3 text-base font-semibold text-neutral-400 max-md:max-w-full">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          class={`self-stretch my-auto ${
            activeTab.value === tab.name ? "text-pink-600" : ""
          }`}
          onClick$={() => handleTabClick(tab.name)} // Use handleTabClick properly wrapped
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
});
