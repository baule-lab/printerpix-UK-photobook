/* eslint-disable qwik/no-use-visible-task */
/* eslint-disable qwik/jsx-img */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { component$, useSignal, $ } from "@builder.io/qwik";
import { TabMenu } from "../common/TabMenu";

export const PrintOptionsSection = component$(() => {
  const printOptions = [
    {
      title: "Standard Silk Paper",
      description:
        "A classic paper with a semi-gloss finish. Ideal for showcasing your photos with sharp, vibrant colours.",
      video: "/videos/perfect-paper/semi-gloss.mp4",
    },
    {
      title: "Luster Photo Paper",
      description:
        "A true photographic paper with a pearlescent texture. Expect a warm, shimmery look & soft colors.",
      video: "/videos/perfect-paper/luster.mp4",
    },
    {
      title: "True Matte Paper",
      description:
        "A thick, uncoated paper ideal for smudge-free writing. Your pen will glide across the crisp white surface.",
      video: "/videos/perfect-paper/silk-layflat.mp4",
    },
    {
      title: "Extra Matte Paper",
      description:
        "Our thickest paper option with a rich matte appearance & uncoated finish. It’s easy to write on, too.",
      video: "/videos/perfect-paper/silk-layflat.mp4",
    },
  ];

  // Tạo danh sách tab cho mobile và tablet với tab đầu tiên active
  const tabs = printOptions.map((option, index) => ({
    name: option.title,
    active: index === 0, // Đặt tab đầu tiên là active
  }));

  const activeTab = useSignal(tabs[0].name); // Tab đầu tiên được chọn mặc định

  const handleTabClick = $((name: string) => {
    activeTab.value = name;
  });

  return (
    <section class="flex flex-col w-full max-md:px-5 container mx-auto md:px-0 px-4">
      <h2 class="md:text-5xl text-3xl font-bold text-center text-[#1A1A1A] max-md:max-w-full">
        Perfect Paper Types
      </h2>

      {/* Hiển thị TabMenu chỉ trên iPad và điện thoại */}
      <div class="block md:hidden mt-8"> {/* Ẩn trên màn hình lớn */}
        <TabMenu tabs={tabs} onTabClick={handleTabClick} />
        <div class="mt-6 text-center text-black">
          {printOptions
            .filter((option) => option.title === activeTab.value)
            .map((option, index) => (
              <div key={index} class="flex flex-col items-center">
                <div class="flex w-full mx-auto">
                  <video
                    class="w-full h-full object-cover"
                    src={option.video}
                    autoplay
                    loop
                    muted
                    playsInline
                  />
                </div>
                <div class="flex flex-col mt-6 w-full">
                  <h3 class="text-2xl font-bold md:block hidden">{option.title}</h3>
                  <p class="mt-3 text-sm">{option.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Hiển thị layout mặc định trên laptop và desktop */}
      <div class="hidden md:flex flex-wrap gap-6 items-start mt-8 w-full text-center text-black">
        {printOptions.map((option, index) => (
          <div
            key={index}
            class="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px]"
          >
            <div class="flex w-full bg-zinc-300 min-h-[547px]">
              <video
                class="w-full min-h-[547px] object-cover"
                src={option.video}
                autoplay
                loop
                muted
                playsInline
              />
            </div>
            <div class="flex flex-col mt-6 w-full">
              <h3 class="text-2xl font-bold">{option.title}</h3>
              <p class="mt-3 text-sm">{option.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button class="overflow-hidden gap-2.5 self-center px-4 py-3 mt-8 max-w-full text-base font-semibold leading-6 bg-[#F02480] rounded shadow-sm text-slate-50 md:w-[340px] md:h-auto h-[56px] w-full">
        Start Creating
      </button>
    </section>
  );
});
