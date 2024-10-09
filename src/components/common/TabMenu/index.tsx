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
    <div class="flex overflow-x-auto whitespace-nowrap items-center gap-1 md:gap-4 md:text-[32px] text-lg font-semibold text-[#B1B1B1]">
      {tabs.map((tab, index) => (
        <button
          key={tab.name}
          class={`inline-block px-2 py-1 pb-2 md:px-4 md:py-2 ${
            activeTab.value === tab.name
              ? "text-[#F02480] border-b-4 border-[#F02480]"
              : ""
          } ${index === tabs.length - 1 ? 'pr-8 md:pr-12' : ''}`} // Thêm khoảng cách cho item cuối cùng
          onClick$={() => handleTabClick(tab.name)} // Use handleTabClick properly wrapped
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
});
