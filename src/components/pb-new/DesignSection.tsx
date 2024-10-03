/* eslint-disable qwik/no-use-visible-task */
/* eslint-disable qwik/jsx-img */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { component$, useSignal, $, useVisibleTask$ } from "@builder.io/qwik";
import { TabMenu } from "../common/TabMenu";

export const DesignSection = component$(() => {
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
            src: `/images/theme_category/${folderName}/${folderName}-1.jpg`,
            alt: `${category.name} Image 1`,
            size: "small",
          },
          {
            src: `/images/theme_category/${folderName}/${folderName}-2.jpg`,
            alt: `${category.name} Image 2`,
            size: "small",
          },
          {
            src: `/images/theme_category/${folderName}/${folderName}-3.jpg`,
            alt: `${category.name} Image 3`,
            size: "large",
          },
          {
            src: `/images/theme_category/${folderName}/${folderName}-4.jpg`,
            alt: `${category.name} Image 4`,
            size: "small",
          },
        ],
        right: [
          {
            src: `/images/theme_category/${folderName}/${folderName}-5.jpg`,
            alt: `${category.name} Image 5`,
            size: "large",
          },
          {
            src: `/images/theme_category/${folderName}/${folderName}-6.jpg`,
            alt: `${category.name} Image 6`,
            size: "small",
          },
          {
            src: `/images/theme_category/${folderName}/${folderName}-7.jpg`,
            alt: `${category.name} Image 7`,
            size: "small",
          },
          {
            src: `/images/theme_category/${folderName}/${folderName}-8.jpg`,
            alt: `${category.name} Image 8`,
            size: "small",
          },
        ],
        main: `/images/theme_category/${folderName}/${folderName}-main.jpg`,
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
          console.error(`Tab name "${tabName}" không tồn tại trong imagesByTab`);
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
    <section class="mx-auto flex md:w-[90%] w-full flex-col items-center justify-center gap-6 first-letter:gap-6 md:px-0">
      <div class="flex md:w-full w-[90%] flex-col gap-4">
        <h2 class="text-center text-3xl font-bold text-[#1A1A1A] max-md:max-w-full">
          Hundreds of Themes for Every Story
        </h2>
        <TabMenu tabs={designCategories.value} onTabClick={handleTabClick} />
      </div>

      {/* Background and images */}
      <div
        class="relative flex w-full flex-col items-center justify-center md:py-10 md:px-0 px-4"
        style={{
          backgroundImage: `url(${isMobile.value ? "/images/theme_category/mobile_background.jpg" : "/images/theme_category/background.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: `${isMobile.value ? "13% 30px" : "-57px -50px"}`,
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Desktop layout */}
        <div class="container relative mt-[55px] hidden items-center justify-center md:flex">
          {/* Left and right layout */}
          <div class="grid grid-cols-3 gap-6">
            {/* Left side with two rows and two columns */}
            <div class="flex flex-col justify-between gap-6">
              {[0, 2].map((rowIndex) => (
                <div key={rowIndex} class="flex justify-around gap-4">
                  {[0, 1].map((colIndex) => {
                    const image = currentImages.value.left[rowIndex + colIndex];
                    const size = image.size === "large" ? "240px" : "180px";
                    return (
                      <div key={colIndex} class="relative">
                        {isLoading.value ? (
                          <SkeletonImage size={size} />
                        ) : (
                          <img
                            class="h-auto  transform shadow-lg transition-transform duration-300 hover:scale-105"
                            src={image.src}
                            alt={image.alt}
                            style={{
                              objectFit: "cover",
                              width: size,
                              height: "auto",
                              aspectRatio: "1 / 1",
                            }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Main image */}
            <div class="flex transform items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105">
              {isLoading.value ? (
                <SkeletonImage size="450px" />
              ) : (
                <img
                  src={currentImages.value.main}
                  alt="Main Image"
                  class="object-cover shadow-lg"
                  style={{
                    width: "450px",
                    height: "auto",
                    aspectRatio: "1 / 1",
                  }}
                />
              )}
            </div>

            {/* Right side with two rows and two columns */}
            <div class="flex flex-col justify-between">
              {[0, 2].map((rowIndex) => (
                <div key={rowIndex} class="flex justify-around gap-4">
                  {[0, 1].map((colIndex) => {
                    const image =
                      currentImages.value.right[rowIndex + colIndex];
                    const size = image.size === "large" ? "240px" : "180px";
                    return (
                      <div key={colIndex} class="relative">
                        {isLoading.value ? (
                          <SkeletonImage size={size} />
                        ) : (
                          <img
                            class="h-auto max-w-full transform shadow-lg transition-transform duration-300 hover:scale-105"
                            src={image.src}
                            alt={image.alt}
                            style={{
                              objectFit: "cover",
                              width: size,
                              height: "auto",
                              aspectRatio: "1 / 1",
                            }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div class="mt-0 flex flex-col items-center gap-4 md:hidden">
          {/* Main Image */}
          <div class="flex items-center justify-center">
            {isLoading.value ? (
              <SkeletonImage size="300px" />
            ) : (
              <img
                src={currentImages.value.main}
                alt="Main Image"
                class="transform object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                style={{ width: "332px", height: "300px" }}
              />
            )}
          </div>

          {/* Three smaller images below the main image */}
          <div class="grid grid-cols-3 gap-4">
            {currentImages.value.left.slice(0, 3).map((image, index) => (
              <div key={index} class="relative">
                {isLoading.value ? (
                  <SkeletonImage size="100px" />
                ) : (
                  <img
                    class="transform object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Button with dynamic tab name */}
      <button class="m-auto w-[90%] max-w-full gap-2.5 self-stretch rounded bg-[#F02480] px-4 py-3 text-base text-white shadow-sm md:w-[340px] font-semibold">
        Explore {activeTabName.value} Themes
      </button>
    </section>
  );
});
