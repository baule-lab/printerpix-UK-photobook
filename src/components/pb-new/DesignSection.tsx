/* eslint-disable qwik/no-use-visible-task */
/* eslint-disable qwik/jsx-img */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { component$, useSignal, $, useVisibleTask$ } from "@builder.io/qwik";
import { TabMenu } from "../common/TabMenu";

export const DesignSection = component$(() => {
  const isMobile = useSignal(false);
  const isLoading = useSignal(false);  // Loading state

  const designCategories = useSignal([
    { name: "Travel", active: true },
    { name: "Wedding", active: false },
    { name: "Family", active: false },
    { name: "Simple", active: false },
    { name: "Year In Review", active: false },
    { name: "All", active: false },
  ]);

  const imagesByTab = designCategories.value.reduce((acc: Record<string, { left: { src: string, alt: string, size?: string }[], right: { src: string, alt: string, size?: string }[], main: string }>, category) => {
    const folderName = category.name.toLowerCase().replace(/ /g, '-');
    acc[category.name] = {
      left: [
        { src: `/images/theme_category/${folderName}/${folderName}-1.png`, alt: `${category.name} Image 1`, size: 'large' },
        { src: `/images/theme_category/${folderName}/${folderName}-2.png`, alt: `${category.name} Image 2`, size: 'small' },
        { src: `/images/theme_category/${folderName}/${folderName}-3.png`, alt: `${category.name} Image 3`, size: 'large' },
        { src: `/images/theme_category/${folderName}/${folderName}-4.png`, alt: `${category.name} Image 4`, size: 'small' }
      ],
      right: [
        { src: `/images/theme_category/${folderName}/${folderName}-5.png`, alt: `${category.name} Image 5`, size: 'large' },
        { src: `/images/theme_category/${folderName}/${folderName}-6.png`, alt: `${category.name} Image 6`, size: 'small' },
        { src: `/images/theme_category/${folderName}/${folderName}-7.png`, alt: `${category.name} Image 7`, size: 'large' },
        { src: `/images/theme_category/${folderName}/${folderName}-8.png`, alt: `${category.name} Image 8`, size: 'small' }
      ],
      main: `/images/theme_category/${folderName}/${folderName}-main.png`
    };
    return acc;
  }, {}); 

  const currentImages = useSignal(imagesByTab.Travel);

  const handleTabClick = $((tabName: string) => {
    // Show the skeleton loading effect
    isLoading.value = true;

    // Simulate loading delay of 0.3s to 0.5s
    setTimeout(() => {
      const newImages = imagesByTab[tabName as keyof typeof imagesByTab];
      if (!newImages) {
        console.error(`Tab name "${tabName}" không tồn tại trong imagesByTab`);
        return;
      }

      // Update tab active status and images
      designCategories.value = designCategories.value.map((tab) =>
        tab.name === tabName
          ? { ...tab, active: true }
          : { ...tab, active: false }
      ) || [];

      currentImages.value = newImages;

      // Stop the loading effect
      isLoading.value = false;
    }, 700 + Math.random() * 200);  // Delay between 0.3s and 0.5s
  });

  useVisibleTask$(() => {
    const checkScreenSize = () => {
      // Kiểm tra xem màn hình có nhỏ hơn 768px hay không
      isMobile.value = window.innerWidth < 768;
    };

    // Lần đầu khi component được render
    checkScreenSize();

    // Lắng nghe sự kiện thay đổi kích thước của màn hình
    window.addEventListener('resize', checkScreenSize);

    // Hủy lắng nghe sự kiện khi component bị unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  });

  // Skeleton component
  const SkeletonImage = ({ size }: { size: string }) => (
    <div
      class="animate-pulse bg-gray-200 rounded-lg"
      style={{ width: size, height: size }}
    />
  );

  return (
    <section class="flex flex-col items-center justify-center gap-6 px-4 first-letter:gap-6 md:px-0 w-[90%] mx-auto">
      <div class="flex max-w-full flex-col gap-4">
        <h2 class="text-center text-3xl font-bold text-zinc-800 max-md:max-w-full">
          Designs for your stories. Endless Possibilities
        </h2>
        <TabMenu tabs={designCategories.value} onTabClick={handleTabClick} />
      </div>

      {/* Background and images */}
      <div
        class="relative flex flex-col items-center justify-center py-10 md:px-0 w-full"
        style={{
          backgroundImage: `url(${isMobile.value ? '/images/theme_category/mobile_background.png' : '/images/theme_category/background.svg'})`,
          backgroundSize: "cover",
          backgroundPosition: `${isMobile.value ? "13% -30px" : "center -60px"}`,
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Desktop layout */}
        <div class="hidden md:flex container relative items-center justify-center mt-[55px]">
          {/* Left and right layout */}
          <div class="grid grid-cols-3 gap-6">
            {/* Left side with two rows and two columns */}
            <div class="flex flex-col gap-6 justify-between">
              {[0, 2].map(rowIndex => (
                <div key={rowIndex} class="flex justify-between gap-4">
                  {[0, 1].map(colIndex => {
                    const image = currentImages.value.left[rowIndex + colIndex];
                    const size = image.size === 'large' ? '240px' : '180px';
                    return (
                      <div key={colIndex} class="relative">
                        {isLoading.value ? (
                          <SkeletonImage size={size} />
                        ) : (
                          <img
                            class="h-auto max-w-full rounded-lg transition-transform transform hover:scale-105 shadow-lg duration-300"
                            src={image.src}
                            alt={image.alt}
                            style={{
                              objectFit: 'cover',
                              width: size,
                              height: size
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
            <div class="flex justify-center items-center">
              {isLoading.value ? (
                <SkeletonImage size="450px" />
              ) : (
                <img
                  src={currentImages.value.main}
                  alt="Main Image"
                  class="object-cover shadow-lg"
                  style={{ width: '450px', height: '400px' }}
                />
              )}
            </div>

            {/* Right side with two rows and two columns */}
            <div class="flex flex-col justify-between">
              {[0, 2].map(rowIndex => (
                <div key={rowIndex} class="flex justify-between gap-4">
                  {[0, 1].map(colIndex => {
                    const image = currentImages.value.right[rowIndex + colIndex];
                    const size = image.size === 'large' ? '240px' : '180px';
                    return (
                      <div key={colIndex} class="relative">
                        {isLoading.value ? (
                          <SkeletonImage size={size} />
                        ) : (
                          <img
                            class="h-auto max-w-full rounded-lg transition-transform transform hover:scale-105 shadow-lg duration-300"
                            src={image.src}
                            alt={image.alt}
                            style={{
                              objectFit: 'cover',
                              width: size,
                              height: size
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
        <div class="flex flex-col gap-4 md:hidden items-center mt-[55px]">
          {/* Main Image */}
          <div class="flex justify-center items-center">
            {isLoading.value ? (
              <SkeletonImage size="300px" />
            ) : (
              <img
                src={currentImages.value.main}
                alt="Main Image"
                class="object-cover shadow-lg"
                style={{ width: '300px', height: '300px' }}
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
                    class="object-cover rounded-lg transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl duration-300"
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <button class="m-auto w-full max-w-full gap-2.5 self-stretch rounded bg-pink-500 px-4 py-3 text-sm text-white shadow-sm md:w-[196px]">
        Explore Wedding Themes
      </button>
    </section>
  );
});
