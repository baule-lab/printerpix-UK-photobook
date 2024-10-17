import { component$, useSignal, $ } from "@builder.io/qwik";

export const UpgradeSection = component$(() => {
  const currentSlide = useSignal(0); // Signal để theo dõi slide hiện tại

  const slides = [
    {
      title: "Professional 6 Color Printing",
      content:
        "Our cutting-edge printing method produces smoother gradients, crisper details & richer colors.",
      img: "/calendar/images/upgrade-photo/6-color-printing.jpg",
    },
    {
      title: "100+ Calendar Planning Stickers",
      content:
        "Add a sticker sheet to your order to make tracking upcoming events extra fun & colorful.",
      img: "/calendar/images/upgrade-photo/calendar-planning-stickers.jpg",
    },
  ];

  const goToSlide = $((index: number) => {
    currentSlide.value = index;
  });

  return (
    <section class="container mx-auto flex flex-col items-center gap-4">
      <h1 class="text-3xl font-bold leading-tight md:text-5xl">
        Upgrade Your Photo Calendar
      </h1>
      {/* Section cho Slide */}
      <div class="relative mt-8 flex w-full overflow-hidden">
        <div
          class="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentSlide.value * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              class="h-[500px] w-full flex-shrink-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div class="flex h-full w-full flex-col items-start justify-center p-6 text-black md:w-[40%]">
                {" "}
                {/* Giảm màu đen ở đây */}
                <h1 class="text-5xl font-bold">{slide.title}</h1>
                <p class="mt-3 text-lg">{slide.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Nút điều hướng chỉ hiện cho slide khác */}
        <div class="absolute bottom-4 right-4 flex gap-4">
          {slides.map(
            (_, index) =>
              index !== currentSlide.value && ( // Hiển thị nút chỉ nếu không phải slide hiện tại
                <div
                  key={index}
                  onClick$={() => goToSlide(index)}
                  class="flex items-center gap-4 text-2xl text-black font-semibold cursor-pointer"
                >
                  <span>
                    {index === 0
                      ? "Color Printing"
                      : "Planning Stickers"}
                  </span>
                  <span
                    class="transform rounded-full border border-neutral-200 bg-white p-2 shadow-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              ),
          )}
        </div>
      </div>

      <button class="mx-auto mt-6 h-[56px] w-full max-w-full gap-2.5 self-stretch rounded bg-[#F02480] px-4 py-3 text-base font-semibold text-white shadow-sm md:w-[340px]">
        Create Your Calendar
      </button>
    </section>
  );
});
