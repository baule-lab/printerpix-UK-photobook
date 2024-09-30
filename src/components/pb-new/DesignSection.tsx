// DesignSection.tsx
import { component$, useSignal, $, useVisibleTask$ } from "@builder.io/qwik";
import { TabMenu } from "../common/TabMenu";

export const DesignSection = component$(() => {
  // Danh sách tab và trạng thái active
  const designCategories = useSignal([
    { name: "Travel", active: true },
    { name: "Wedding", active: false },
    { name: "Family", active: false },
    { name: "Simple", active: false },
    { name: "Year In Review", active: false },
    { name: "All", active: false },
  ]);

  // Background image theo từng tab cho mobile và desktop
  const backgrounds = {
    Travel: {
      desktop: "/images/travel-desktop.jpg",
      mobile: "/images/travel-mobile.jpg",
    },
    Wedding: {
      desktop: "/images/wedding-desktop.png",
      mobile: "/images/wedding-mobile.png",
    },
    Family: {
      desktop: "/images/family-desktop.png",
      mobile: "/images/family-mobile.png",
    },
    Simple: {
      desktop: "/images/simple-desktop.png",
      mobile: "/images/simple-mobile.png",
    },
    "Year In Review": {
      desktop: "/images/yearinreview-desktop.png",
      mobile: "/images/yearinreview-mobile.png",
    },
    All: {
      desktop: "/images/all-desktop.png",
      mobile: "/images/all-mobile.png",
    },
  };

  // Background mặc định (tab đầu tiên)
  const currentBackground = useSignal(backgrounds.Travel);
  const isMobile = useSignal(false);

  // Khi nhấn vào tab, thay đổi trạng thái và cập nhật background
  const handleTabClick = $((tabName: string) => {
    designCategories.value = designCategories.value.map((tab) =>
      tab.name === tabName
        ? { ...tab, active: true }
        : { ...tab, active: false },
    );

    // Cập nhật background cho tab hiện tại
    currentBackground.value = backgrounds[tabName as keyof typeof backgrounds];
  });

  // Sử dụng useVisibleTask$ để kiểm tra kích thước màn hình ở phía client
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

  return (
    <section class="container mx-auto flex flex-col items-center justify-center gap-6 px-4 first-letter:gap-6 md:px-0">
      <div class="flex max-w-full flex-col gap-4">
        <h2 class="text-center text-3xl font-bold text-zinc-800 max-md:max-w-full">
          Designs for your stories. Endless Possibilities
        </h2>
        <TabMenu tabs={designCategories.value} onTabClick={handleTabClick} />
      </div>

      {/* Thay đổi background theo tab và thiết bị */}
      <div
        class="flex h-[400px] w-full items-center justify-center gap-7"
        style={{
          backgroundImage: `url(${
            isMobile.value
              ? currentBackground.value.mobile
              : currentBackground.value.desktop
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <button class="m-auto w-[196px] max-w-full gap-2.5 self-stretch rounded bg-pink-500 px-4 py-3 text-sm text-white shadow-sm">
        Explore Travel Themes
      </button>
    </section>
  );
});
