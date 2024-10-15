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
      video: "/calendar/video/perfect-paper/standard-silk-paper.mp4",
    },
    {
      title: "Luster Photo Paper",
      description:
        "A true photographic paper with a pearlescent texture. Expect a warm, shimmery look & soft colors.",
      video: "/calendar/video/perfect-paper/luster-photo-paper.mp4",
    },
    {
      title: "True Matte Paper",
      description:
        "A thick, uncoated paper ideal for smudge-free writing. Your pen will glide across the crisp white surface.",
      video: "/calendar/video/perfect-paper/true-matte-paper.mp4",
    },
    {
      title: "Extra Matte Paper",
      description:
        "Our thickest paper option with a rich matte appearance & uncoated finish. It’s easy to write on, too.",
      video: "/calendar/video/perfect-paper/extra-matte-paper.mp4",
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
    <section class="container mx-auto flex w-full flex-col px-4 max-md:px-5 md:px-0">
      <h2 class="text-center text-3xl font-bold text-[#1A1A1A] max-md:max-w-full md:text-5xl">
        Perfect Paper Types
      </h2>

      {/* Hiển thị TabMenu chỉ trên iPad và điện thoại */}
      <div class="mt-8 block md:hidden">
        {" "}
        {/* Ẩn trên màn hình lớn */}
        <TabMenu tabs={tabs} onTabClick={handleTabClick} />
        <div class="mt-6 text-center text-black">
          {printOptions
            .filter((option) => option.title === activeTab.value)
            .map((option, index) => (
              <div key={index} class="flex flex-col items-center">
                <div class="mx-auto flex w-full">
                  <video
                    class="h-full w-full object-cover"
                    src={option.video}
                    autoplay
                    loop
                    muted
                    playsInline
                  />
                </div>
                <div class="mt-6 flex w-full flex-col">
                  <h3 class="hidden text-2xl font-bold md:block">
                    {option.title}
                  </h3>
                  <p class="mt-3 text-sm">{option.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Hiển thị layout mặc định trên laptop và desktop */}
      <div class="mt-8 hidden w-full flex-wrap items-start gap-6 text-center text-black md:flex">
        {printOptions.map((option, index) => (
          <div
            key={index}
            class="flex min-w-[240px] flex-1 shrink basis-0 flex-col justify-center"
          >
            <div class="flex min-h-[547px] w-full bg-zinc-300">
              <video
                class="min-h-[547px] w-full object-cover"
                src={option.video}
                autoplay
                loop
                muted
                playsInline
              />
            </div>
            <div class="mt-6 flex w-full flex-col">
              <h3 class="text-2xl font-bold">{option.title}</h3>
              <p class="mt-3 text-sm">{option.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button class="mt-8 h-[56px] w-full max-w-full gap-2.5 self-center overflow-hidden rounded bg-[#F02480] px-4 py-3 text-base font-semibold leading-6 text-slate-50 shadow-sm md:h-auto md:w-[340px]">
        Start Creating
      </button>
    </section>
  );
});
