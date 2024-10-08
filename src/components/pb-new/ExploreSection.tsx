/* eslint-disable qwik/jsx-img */
import { component$, useSignal, $ } from "@builder.io/qwik";

interface TabContent {
  name: string;
  title: string;
  description: string;
  price: string;
  images: string[]; // Each tab now contains multiple images
}

export const ExploreSection = component$(() => {
  // Define tab contents with 3 images per tab
  const tabContents = useSignal<TabContent[]>([
    {
      name: "Hardcover",
      title: "Hardcover",
      description:
        "Our hardcover books are durable and designed to preserve your memories for a lifetime.",
      price: "$24.99",
      images: [
        "/images/slide/photo-book-slide-1.jpg",
        "/images/slide/photo-book-slide-1-2.jpg",
        "/images/slide/photo-book-slide-1-3.jpg",
      ],
    },
    {
      name: "Layflat",
      title: "Layflat",
      description:
        "Our clever binding technique lets you share your biggest moments and best photos across seamless two-page spreads.",
      price: "$48.99",
      images: [
        "/images/slide/photo-book-slide-2.jpg",
        "/images/slide/photo-book-slide-2-2.jpg",
        "/images/slide/photo-book-slide-2-3.jpg",
      ],
    },
    {
      name: "Softcover",
      title: "Softcover",
      description:
        "A lightweight and flexible option, our softcover books are easy to carry and enjoy.",
      price: "$24.99",
      images: [
        "/images/slide/photo-book-slide-3.jpg",
        "/images/slide/photo-book-slide-3-2.jpg",
        "/images/slide/photo-book-slide-3-3.jpg",
      ],
    },
  ]);

  // Manage active tab state
  const activeTab = useSignal(tabContents.value[1].name); // Default to "Layflat"

  // Manage active slide for the currently selected tab
  const currentSlide = useSignal(0); // Start with the first slide

  // Handle tab click and reset slide to the first image
  const handleTabClick = $((tabName: string) => {
    activeTab.value = tabName;
    currentSlide.value = 0; // Reset to the first slide when the tab is changed
  });

  // Handle dot click
  const goToSlide = $((index: number) => {
    currentSlide.value = index;
  });

  // Find the content for the active tab
  const currentContent = tabContents.value.find(
    (content) => content.name === activeTab.value,
  );

  return (
    <section class="container mx-auto flex flex-col items-center gap-8 px-4 md:px-0">
      <h2 class="text-center md:text-5xl text-3xl font-bold">
        Our Best-Selling Photo Book Styles
      </h2>
      <div class="flex w-full max-w-full flex-wrap gap-12">
        {/* Display the image slider */}
        <div class="relative flex flex-1 items-center justify-center">
          {/* Image Slider */}
          <div class="relative transition-opacity duration-700 ease-in-out h-full">
            <img
              loading="lazy"
              alt="Book preview"
              class="aspect-square min-w-[240px] self-start rounded object-cover transition-transform duration-500 ease-in-out max-md:max-w-full h-full"
              src={currentContent?.images[currentSlide.value]}
            />
          </div>

          {/* Pagination Dots */}
          <div class="absolute bottom-4 flex space-x-2">
            {currentContent?.images.map((_, index) => (
              <button
                key={index}
                class={`block h-4 w-4 rounded-full ${
                  currentSlide.value === index ? "bg-black" : "bg-gray-400"
                }`}
                onClick$={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>

        {/* Tabs Content */}
        <div class="flex min-w-[240px] flex-1 shrink basis-0 flex-col justify-between gap-7 max-md:max-w-full">
          {/* Tabs */}
          <div class="flex w-full flex-col gap-4">
            <div class="flex min-h-[48px] w-full flex-wrap gap-3 whitespace-nowrap rounded-lg bg-neutral-100 p-1.5 text-sm font-medium leading-none text-slate-700 max-md:max-w-full">
              {tabContents.value.map((tab) => (
                <button
                  key={tab.name}
                  onClick$={() => handleTabClick(tab.name)}
                  class={`h-full flex-1 shrink gap-2.5 self-stretch rounded px-3 py-1.5 ${
                    activeTab.value === tab.name ? "bg-white text-pink-600" : ""
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            {/* Content Section */}
            <div class="flex min-h-[459px] w-full flex-col rounded-lg bg-neutral-100 px-8 pb-20 pt-8 max-md:max-w-full max-md:px-5 md:min-h-[550px]">
              <div class="flex w-full flex-col max-md:max-w-full">
                <div class="flex w-[157px] max-w-full flex-col">
                  <h3 class="md:text-5xl text-3xl font-bold leading-loose tracking-tight text-[#1A1A1A]">
                    {currentContent?.title}
                  </h3>
                  <p class="mt-3 font-bold leading-none text-green-600">
                    Starting at{" "}
                    <span class="font-bold">{currentContent?.price}</span>
                  </p>
                </div>
                <p class="mt-6 text-base tracking-normal text-black max-md:max-w-full">
                  {currentContent?.description}
                </p>
              </div>
              <div class="flex flex-col justify-center self-start text-base text-black">
                <p>
                  <span class="font-bold">Cover:</span> Standard, Acrylic,
                  Fabric
                </p>
                <p class="mt-6">
                  <span class="font-bold">Paper Finishes:</span> Semi-Gloss,
                  Matte, Lustre
                </p>
                <p class="mt-6">
                  <span class="font-bold">Pages:</span> Up to 400 pages
                </p>
                <p class="mt-6">
                  <span class="font-bold">Sizes:</span> 8x8", 12x8", 12x12",
                  16x12"
                </p>
              </div>
            </div>
          </div>
          <button class="w-full gap-2.5 self-stretch overflow-hidden rounded  bg-[#F02480] px-4 py-3 text-sm font-semibold leading-6 text-slate-50 shadow-sm max-md:max-w-full">
            Shop {currentContent?.title}
          </button>
        </div>
      </div>
    </section>
  );
});
