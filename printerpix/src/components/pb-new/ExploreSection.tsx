import { component$, useSignal, $ } from "@builder.io/qwik";

interface TabContent {
  name: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

export const ExploreSection = component$(() => {
  // Define tab contents
  const tabContents = useSignal<TabContent[]>([
    {
      name: "Hardcover",
      title: "Hardcover",
      description:
        "Our hardcover books are durable and designed to preserve your memories for a lifetime.",
      price: "$29.99",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/hardcover.png", // Replace with your actual image URL
    },
    {
      name: "Layflat",
      title: "Layflat",
      description:
        "Our clever binding technique lets you share your biggest moments and best photos across seamless two-page spreads.",
      price: "$48.99",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f35b44c4d28a22b58705d73978818cfbb6bdf7ace28e08e9d85aeb3cd5c05570?placeholderIfAbsent=true&apiKey=7f743169fed1434cba7b7dfa49538c27",
    },
    {
      name: "Softcover",
      title: "Softcover",
      description:
        "A lightweight and flexible option, our softcover books are easy to carry and enjoy.",
      price: "$19.99",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/softcover.png", // Replace with your actual image URL
    },
  ]);

  // Manage active tab state
  const activeTab = useSignal(tabContents.value[1].name); // Default to "Layflat"

  // Handle tab click
  const handleTabClick = $((tabName: string) => {
    activeTab.value = tabName;
  });

  // Find the content for the active tab
  const currentContent = tabContents.value.find(
    (content) => content.name === activeTab.value
  );

  return (
    <section class="flex flex-col gap-8 mt-20 mx-auto container md:px-0 px-4">
      <h2 class="self-start text-3xl font-bold text-center text-zinc-800 max-md:max-w-full">
        Explore all the amazing books
      </h2>
      <div class="flex flex-wrap gap-12 max-w-full w-full">
        {/* Display the image of the active tab */}
        <div class="flex-1 flex items-center justify-center">
          <img
            loading="lazy"
            alt="Book preview"
            class="object-contain self-start rounded aspect-square min-w-[240px] max-md:max-w-full"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/72c50723cfc55aa751d4c2d569a124a51e9493235d52969a312206bff82517c9?placeholderIfAbsent=true&apiKey=7f743169fed1434cba7b7dfa49538c27"
          />
        </div>
        <div class="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full gap-7">
          {/* Tabs */}
          <div class="flex flex-wrap gap-3 p-1.5 w-full text-sm font-medium leading-none whitespace-nowrap rounded-lg bg-neutral-100 min-h-[48px] text-slate-700 max-md:max-w-full">
            {tabContents.value.map((tab) => (
              <button
                key={tab.name}
                onClick$={() => handleTabClick(tab.name)}
                class={`flex-1 shrink gap-2.5 self-stretch px-3 py-1.5 h-full rounded ${
                  activeTab.value === tab.name ? "text-pink-600 bg-white" : ""
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
          {/* Content Section */}
          <div class="flex flex-col px-8 pt-8 pb-20 w-full rounded-lg bg-neutral-100 min-h-[459px] max-md:px-5 max-md:max-w-full">
            <div class="flex flex-col w-full max-md:max-w-full">
              <div class="flex flex-col max-w-full w-[157px]">
                <h3 class="text-3xl font-bold tracking-tight leading-loose text-zinc-800">
                  {currentContent?.title}
                </h3>
                <p class="mt-3 leading-none text-green-600 font-bold">
                  Starting at <span class="font-bold">{currentContent?.price}</span>
                </p>
              </div>
              <p class="mt-6 text-base tracking-normal text-black max-md:max-w-full">
                {currentContent?.description}
              </p>
            </div>
            <div class="flex flex-col justify-center self-start text-base text-black">
              <p>
                <span class="font-bold">Cover:</span> Standard, Acrylic, Fabric
              </p>
              <p class="mt-6">
                <span class="font-bold">Paper Finishes:</span> Semi-Gloss, Matte,
                Lustre
              </p>
              <p class="mt-6">
                <span class="font-bold">Pages:</span> Up to 400 pages
              </p>
              <p class="mt-6">
                <span class="font-bold">Sizes:</span> 8x8", 12x8", 12x12", 16x12"
              </p>
            </div>
          </div>
          <button class="overflow-hidden gap-2.5 self-stretch px-4 py-3  w-full text-sm font-semibold leading-6 bg-pink-500 rounded shadow-sm text-slate-50 max-md:max-w-full">
            Shop {currentContent?.title}
          </button>
        </div>
      </div>
    </section>
  );
});