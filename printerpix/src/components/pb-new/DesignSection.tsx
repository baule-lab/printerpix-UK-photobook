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
      tab.name === tabName
        ? { ...tab, active: true }
        : { ...tab, active: false },
    );
  });

  return (
    <section class="container mx-auto flex flex-col items-center justify-center gap-6 px-4 first-letter:gap-6 md:px-0">
      <div class="flex w-[713px] max-w-full flex-col gap-4">
        <h2 class="text-3xl font-bold text-zinc-800 max-md:max-w-full text-center">
          Designs for your stories. Endless Possibilities
        </h2>
        <TabMenu tabs={designCategories.value} onTabClick={handleTabClick} />
      </div>
      <div
        class="flex h-[400px] w-full items-center justify-center gap-7"
        style="background-image: url('/images/tab-banner.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;"
      ></div>
      <button class="m-auto w-[196px] max-w-full gap-2.5 self-stretch rounded bg-pink-500 px-4 py-3 text-sm text-white shadow-sm">
        Explore Travel Themes
      </button>
    </section>
  );
});
