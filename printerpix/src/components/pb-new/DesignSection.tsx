// DesignSection.tsx
import { component$, useSignal, $ } from "@builder.io/qwik";
import { TabMenu } from "../common/TabMenu";

export const DesignSection = component$(() => {
  const designCategories = useSignal([
    { name: "Travel", active: true },
    { name: "Wedding", active: false },
    { name: "Family", active: false },
    { name: "Simple", active: false },
    { name: "Year In Review", active: false },
    { name: "All", active: false },
  ]);

  const handleTabClick = $((tabName: string) => {
    designCategories.value = designCategories.value.map((tab) =>
      tab.name === tabName ? { ...tab, active: true } : { ...tab, active: false }
    );
  });

  return (
    <section class="flex flex-col justify-center items-center first-letter:mt-20 gap-6 container mt-20 mx-auto md:px-0 px-4">
      <div class="flex flex-col max-w-full w-[713px]">
        <h2 class="text-3xl font-bold text-zinc-800 max-md:max-w-full">
          Designs for your stories. Endless Possibilities
        </h2>
        <TabMenu tabs={designCategories.value} onTabClick={handleTabClick} />
      </div>
      <div class="flex items-center justify-center gap-7 w-full">
        {/* Left group of small squares */}
        <div class="grid grid-cols-2 gap-7 flex-grow">
          {[...Array(4)].map((_, index) => (
            <div key={index} class="flex bg-zinc-300 h-[170px] min-h-[170px] w-full"></div>
          ))}
        </div>

        {/* Large square in the center */}
        <div class="flex shrink-0 bg-zinc-300 h-[371px] min-w-[240px] md:w-[464px] w-full"></div>

        {/* Right group of small squares */}
        <div class="grid grid-cols-2 gap-7 flex-grow">
          {[...Array(4)].map((_, index) => (
            <div key={index} class="flex bg-zinc-300 h-[170px] min-h-[170px] w-full"></div>
          ))}
        </div>
      </div>
      <button class="gap-2.5 self-stretch px-4 py-3 m-auto max-w-full text-sm text-white bg-pink-500 rounded shadow-sm w-[196px]">
        Explore Travel Themes
      </button>
    </section>
  );
});