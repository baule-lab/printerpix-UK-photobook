/* eslint-disable qwik/no-use-visible-task */
/* eslint-disable qwik/jsx-img */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { component$, useSignal, $, useVisibleTask$ } from "@builder.io/qwik";
import { TabMenu } from "../common/TabMenu";

export const GallerySection = component$(() => {
  const isMobile = useSignal(false);
  const isLoading = useSignal(false); // Loading state
  const activeTabName = useSignal("Travel"); // Default active tab

  const designCategories = useSignal([
    { name: "Travel", active: true },
    { name: "Wedding", active: false },
    { name: "Family", active: false },
    { name: "Simple", active: false },
    { name: "Year In Review", active: false },
    { name: "All", active: false },
  ]);

  const imagesByTab = designCategories.value.reduce(
    (
      acc: Record<
        string,
        {
          left: { src: string; alt: string; size?: string }[];
          right: { src: string; alt: string; size?: string }[];
          main: string;
        }
      >,
      category,
    ) => {
      const folderName = category.name.toLowerCase().replace(/ /g, "-");
      acc[category.name] = {
        left: [
          {
            src: `/calendar/images/theme_category/${folderName}/${folderName}-1.jpg`,
            alt: `${category.name} Image 1`,
            size: "small",
          },
          {
            src: `/calendar/images/theme_category/${folderName}/${folderName}-2.jpg`,
            alt: `${category.name} Image 2`,
            size: "small",
          },
          {
            src: `/calendar/images/theme_category/${folderName}/${folderName}-3.jpg`,
            alt: `${category.name} Image 3`,
            size: "large",
          },
          {
            src: `/calendar/images/theme_category/${folderName}/${folderName}-4.jpg`,
            alt: `${category.name} Image 4`,
            size: "small",
          },
        ],
        right: [
          {
            src: `/calendar/images/theme_category/${folderName}/${folderName}-5.jpg`,
            alt: `${category.name} Image 5`,
            size: "large",
          },
          {
            src: `/calendar/images/theme_category/${folderName}/${folderName}-6.jpg`,
            alt: `${category.name} Image 6`,
            size: "small",
          },
          {
            src: `/calendar/images/theme_category/${folderName}/${folderName}-7.jpg`,
            alt: `${category.name} Image 7`,
            size: "small",
          },
          {
            src: `/calendar/images/theme_category/${folderName}/${folderName}-8.jpg`,
            alt: `${category.name} Image 8`,
            size: "small",
          },
        ],
        main: `/calendar/images/theme_category/${folderName}/${folderName}-main.jpg`,
      };
      return acc;
    },
    {},
  );

  const currentImages = useSignal(imagesByTab.Travel);

  const handleTabClick = $((tabName: string) => {
    // Show the skeleton loading effect
    isLoading.value = true;
    activeTabName.value = tabName; // Update the active tab name

    // Simulate loading delay of 0.3s to 0.5s
    setTimeout(
      () => {
        const newImages = imagesByTab[tabName as keyof typeof imagesByTab];
        if (!newImages) {
          console.error(
            `Tab name "${tabName}" không tồn tại trong imagesByTab`,
          );
          console.log("Existing tabs:", Object.keys(imagesByTab)); // Debug existing tabs
          return;
        }

        // Update tab active status and images
        designCategories.value =
          designCategories.value.map((tab) =>
            tab.name === tabName
              ? { ...tab, active: true }
              : { ...tab, active: false },
          ) || [];

        currentImages.value = newImages;

        // Stop the loading effect
        isLoading.value = false;
      },
      700 + Math.random() * 200,
    ); // Delay between 0.3s and 0.5s
  });

  useVisibleTask$(() => {
    const checkScreenSize = () => {
      isMobile.value = window.innerWidth < 768;
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  });

  // Skeleton component
  const SkeletonImage = ({ size }: { size: string }) => (
    <div
      class="animate-pulse  bg-gray-200"
      style={{ width: size, height: size }}
    />
  );

  return (
    <section class="mx-auto flex w-full flex-col items-center justify-center gap-6 first-letter:gap-6 md:w-[90%] md:px-0">
      <div class="flex w-[90%] flex-col md:items-center items-start gap-4 md:w-full overflow-hidden">
        <h2 class="text-center md:text-5xl text-3xl font-bold leading-tight text-[#1A1A1A] max-md:max-w-full">
          Calendar Themes to Inspire Your 2025
        </h2>
        <div class="w-full overflow-hidden flex items-center justify-center">
          <TabMenu tabs={designCategories.value} onTabClick={handleTabClick} />
        </div>
      </div>

      {/* Background and images */}
      <div
        class="relative flex w-full flex-col items-center justify-center px-4 md:px-0"
        // style={{
        //   backgroundImage: `url(${isMobile.value ? "/images/theme_category/mobile_background.jpg" : "/images/theme_category/background.svg"})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: `${isMobile.value ? "13% 30px" : "-57px -50px"}`,
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        {/* Desktop layout (>= 820px) */}
        <div class="hidden lg:block w-full">
          <div class="container mx-auto max-w-[1320px]">
            <div class="grid grid-cols-[1fr_auto_1fr] gap-6 items-center">
              {/* Left side */}
              <div class="flex flex-col justify-between gap-6">
                {[0, 2].map((rowIndex) => (
                  <div key={rowIndex} class="flex justify-between gap-4">
                    {[0, 1].map((colIndex) => {
                      const image = currentImages.value.left[rowIndex + colIndex];
                      const isLarge = image.size === "large";
                      return (
                        <div 
                          key={colIndex} 
                          class={`${isLarge ? 'w-[55%]' : 'w-[45%]'}`}
                        >
                          {isLoading.value ? (
                            <SkeletonImage size="100%" />
                          ) : (
                            <div class="relative w-full pb-[100%]">
                              <img
                                class="absolute inset-0 w-full h-full object-cover shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105"
                                src={image.src}
                                alt={image.alt}
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Center main image */}
              <div class="w-[30vw] max-w-[375px] min-w-[200px]">
                {isLoading.value ? (
                  <SkeletonImage size="100%" />
                ) : (
                  <div class="relative w-full pb-[150%]">
                    <img
                      src={currentImages.value.main}
                      alt="Main Image"
                      class="absolute inset-0 w-full h-full object-cover shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
              </div>

              {/* Right side */}
              <div class="flex flex-col justify-between gap-6">
                {[0, 2].map((rowIndex) => (
                  <div key={rowIndex} class="flex justify-between gap-4">
                    {[0, 1].map((colIndex) => {
                      const image = currentImages.value.right[rowIndex + colIndex];
                      const isLarge = image.size === "large";
                      return (
                        <div 
                          key={colIndex} 
                          class={`${isLarge ? 'w-[55%]' : 'w-[45%]'}`}
                        >
                          {isLoading.value ? (
                            <SkeletonImage size="100%" />
                          ) : (
                            <div class="relative w-full pb-[100%]">
                              <img
                                class="absolute inset-0 w-full h-full object-cover shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105"
                                src={image.src}
                                alt={image.alt}
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Mobile and Tablet layout (<820px) */}
        <div class="flex flex-col w-full lg:hidden">
          {/* Main container with relative positioning */}
          <div class="relative w-[90%] mx-auto">
            {/* Main Image */}
            <div class="w-full">
              {isLoading.value ? (
                <SkeletonImage size="100%" />
              ) : (
                <img
                  src={currentImages.value.main}
                  alt="Main Image"
                  class="w-full aspect-[4/3] object-cover shadow-lg rounded-lg"
                />
              )}
            </div>

            {/* Container for smaller images */}
            <div class="relative w-full" style={{ paddingTop: "120%" }}>
              {/* Image 1 - Top Left */}
              <div class="absolute left-[-5%] top-[-10%] md:w-[42%] w-[45%] z-10">
                {isLoading.value ? (
                  <SkeletonImage size="100%" />
                ) : (
                  <div class="relative w-full pb-[100%]">
                    <img
                      class="absolute inset-0 w-full h-full object-cover shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105"
                      src={currentImages.value.left[0].src}
                      alt={currentImages.value.left[0].alt}
                    />
                  </div>
                )}
              </div>

              {/* Image 2 - Top Right */}
              <div class="absolute right-[-5%] top-[5%] md:w-[42%] w-[45%] z-20">
                {isLoading.value ? (
                  <SkeletonImage size="100%" />
                ) : (
                  <div class="relative w-full pb-[100%]">
                    <img
                      class="absolute inset-0 w-full h-full object-cover shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105"
                      src={currentImages.value.left[1].src}
                      alt={currentImages.value.left[1].alt}
                    />
                  </div>
                )}
              </div>

              {/* Image 3 - Bottom Left */}
              <div class="absolute left-[5%] bottom-[25%] md:w-[42%] w-[45%] z-30">
                {isLoading.value ? (
                  <SkeletonImage size="100%" />
                ) : (
                  <div class="relative w-full pb-[100%]">
                    <img
                      class="absolute inset-0 w-full h-full object-cover shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105"
                      src={currentImages.value.left[2].src}
                      alt={currentImages.value.left[2].alt}
                    />
                  </div>
                )}
              </div>

              {/* Image 4 - Bottom Right */}
              <div class="absolute right-[2%] bottom-[0%] md:w-[42%] w-[45%] z-40">
                {isLoading.value ? (
                  <SkeletonImage size="100%" />
                ) : (
                  <div class="relative w-full pb-[100%]">
                    <img
                      class="absolute inset-0 w-full h-full object-cover shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105"
                      src={currentImages.value.left[3].src}
                      alt={currentImages.value.left[3].alt}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Button */}
          <button class="w-[90%] mx-auto mt-6 py-3 bg-[#F02480] text-white rounded-md font-semibold">
            Explore {activeTabName.value} Themes
          </button>
        </div>
      </div>
    </section>
  );
});
