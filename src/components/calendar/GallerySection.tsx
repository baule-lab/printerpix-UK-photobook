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

  const mappingPosition = ( rowIndex: number, colIndex: number ) => {
    if (rowIndex === 0 && colIndex === 0) {
      return { left: "-10px", top: "-70px" };
    } else if (rowIndex === 0 && colIndex === 1) {
      return { right: "-10px", top: "30px" };
    } else if (rowIndex === 2 && colIndex === 0) {
      return { left: "25px", bottom: "90px" };
    } else {
      return { right: "15px", bottom: "0" };
    }
  }

  return (
    <section class="mx-auto flex w-full flex-col items-center justify-center gap-6 first-letter:gap-6 md:w-[90%] md:px-0">
      <div class="flex w-[90%] flex-col md:items-center items-start gap-4 md:w-full overflow-hidden">
        <h2 class="text-center md:text-5xl md:text-5xl text-3xl font-bold leading-tight text-[#1A1A1A] max-md:max-w-full">
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
        {/* Desktop layout */}
        <div class="container relative mt-6 flex hidden items-center justify-center md:flex">
          {/* Left and right layout */}
          <div class="grid grid-cols-[1fr_300px_1fr] justify-between gap-6">
            {/* Added justify-center and max-w */}
            {/* Left side with two rows and two columns */}
            <div class="flex flex-col justify-between gap-6">
              {[0, 2].map((rowIndex) => (
                <div key={rowIndex} class="flex justify-around gap-4">
                  {[0, 1].map((colIndex) => {
                    const image = currentImages.value.left[rowIndex + colIndex];
                    const size = image.size === "large" ? "220px" : "190px";
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
            <div class="flex transform items-center justify-center">
              {isLoading.value ? (
                <SkeletonImage size="300px" />
              ) : (
                <img
                  src={currentImages.value.main}
                  alt="Main Image"
                  class="object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                  style={{
                    width: "300px",
                    height: "450px",
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
                    const size = image.size === "large" ? "220px" : "190px";
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
        <div class="mt-0 flex flex-col items-center gap-4 md:hidden w-full">
          {/* Main Image */}
          <div class="flex items-center justify-center w-[85%] rounded-xl">
            {isLoading.value ? (
              <SkeletonImage size="100%" />
            ) : (
              <img
                src={currentImages.value.main}
                alt="Main Image"
                class="transform object-cover shadow-xl transition-transform duration-300 hover:scale-105"
                style={{ width: "100%", height: "250px", objectFit: "cover" }}
              />
            )}
          </div>

          {/* Four smaller images in uneven grid below the main image */}
          <div class="flex flex-col justify-between gap-4 h-[360px] w-full relative">
              {[0, 2].map((rowIndex) => (
                <div key={rowIndex} class="flex justify-around gap-4">
                  {[0, 1].map((colIndex) => {
                    const image =
                      currentImages.value.left[rowIndex + colIndex];
                    const size = "150px";
                    return (
                      <div 
                        key={colIndex} 
                        class={`absolute`} 
                        style={{
                          ...mappingPosition(rowIndex, colIndex),
                          width: size,
                          height: "auto",
                          boxShadow: "0 0 0 1px #E5E5E5",
                        }}
                      >
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

      {/* Button with dynamic tab name */}
      <button class="m-auto w-[90%] max-w-full gap-2.5 self-stretch rounded bg-[#F02480] px-4 py-3 text-base font-semibold text-white shadow-sm md:w-[340px] md:h-auto h-[56px]">
        Explore {activeTabName.value} Themes
      </button>
    </section>
  );
});
