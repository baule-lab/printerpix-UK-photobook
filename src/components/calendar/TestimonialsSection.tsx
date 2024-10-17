/* eslint-disable qwik/jsx-img */
// src/components/TestimonialsSection.tsx
import { component$, useSignal, $, useVisibleTask$ } from "@builder.io/qwik";

export const TestimonialsSection = component$(() => {
  const currentIndex = useSignal(0); // Signal lưu trữ index của item hiện tại
  const itemsPerView = useSignal(1); // Signal lưu số lượng item hiển thị

  const testimonials = [
    {
      text: "My husband love all the <strong>items</strong> that I had send to him.",
      author: "Julie Bennett",
      time: "1 day ago",
      img: "/calendar/images/customer-love/avatar-1.jpg",
    },
    {
      text: "The <strong>quality</strong> was amazing!",
      author: "John Doe",
      time: "2 days ago",
      img: "/calendar/images/customer-love/avatar-2.jpg",
    },
    {
      text: "Exceptional <strong>service</strong> and product.",
      author: "Anna Smith",
      time: "3 days ago",
      img: "/calendar/images/customer-love/avatar-3.jpg",
    },
    {
      text: "Great calendars and <strong>fast shipping</strong>!",
      author: "Mark Wilson",
      time: "4 days ago",
      img: "/calendar/images/customer-love/avatar-1.jpg",
    },
    {
      text: "Wonderful gift for my <strong>family</strong>!",
      author: "Alice Johnson",
      time: "5 days ago",
      img: "/calendar/images/customer-love/avatar-2.jpg",
    },
  ];

  // Cập nhật số lượng item hiển thị dựa trên kích thước màn hình
  useVisibleTask$(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) itemsPerView.value = 3; // Desktop
      else if (window.innerWidth >= 768) itemsPerView.value = 2; // Tablet
      else itemsPerView.value = 1; // Mobile
    };

    updateItemsPerView(); // Gọi khi component được mount
    window.addEventListener("resize", updateItemsPerView); // Cập nhật khi resize

    return () => window.removeEventListener("resize", updateItemsPerView); // Dọn sự kiện
  });

  const nextSlide = $(() => {
    const maxIndex = testimonials.length - itemsPerView.value;
    if (currentIndex.value === maxIndex) {
      currentIndex.value = 0; // Quay lại đầu nếu đang ở cuối
    } else {
      currentIndex.value++; // Tăng index nếu không phải ở cuối
    }
  });

  const prevSlide = $(() => {
    if (currentIndex.value === 0) {
      currentIndex.value = testimonials.length - itemsPerView.value; // Quay lại cuối nếu đang ở đầu
    } else {
      currentIndex.value--; // Giảm index nếu không phải ở đầu
    }
  });

  return (
    <div class="bg-[#474E3C] px-5 py-12 text-white">
      <div class="container relative mx-auto text-center">
        <h2 class="mb-8 text-3xl font-bold">Customers Love our Calendars</h2>
        <div class="md:flex grid grid-cols-2  justify-center items-center gap-3">
          <span class="text-nowrap font-medium">Great 9/10</span>
          <img
            src="/calendar/svg/4.5-stars.svg"
            alt="star"
            width={100}
            height={14}
          />
          <span class="text-nowrap font-medium">14,226 Reviews on</span>
          <img
            src="/calendar/svg/trustpilot.svg"
            alt="trustpilot"
            width={100}
            height={14}
          />
        </div>

        <div class="relative overflow-hidden pt-20">
          <div
            class="flex gap-[20px] transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex.value * (100 / itemsPerView.value)}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                class="relative flex-shrink-0 rounded-lg bg-white p-6 px-4 pt-12 text-gray-900 shadow-lg"
                style={{ width: `calc(${100 / itemsPerView.value}% - 14px)` }}
              >
                {/* Avatar */}
                <div class="absolute -top-12 left-1/2 -translate-x-1/2 transform">
                  <img
                    src={testimonial.img}
                    alt={testimonial.author}
                    class="h-24 w-24 rounded-full border-4 border-white shadow-md"
                  />
                </div>

                <div class="mt-8">
                  <p class="mb-2 flex items-center justify-center gap-2 font-semibold text-[#1A1A1A]">
                    <span class="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 p-1">
                      <img src="/calendar/images/verified.png" alt="Verified" />
                    </span>
                    Verified
                  </p>

                  <p
                    class="mb-2 overflow-hidden text-ellipsis text-lg"
                    style="min-height: calc(1.5rem * 4); line-height: 1.5rem;"
                    dangerouslySetInnerHTML={testimonial.text}
                  ></p>

                  <p class="text-sm text-[#1A1A1A]">
                    {testimonial.author}, <span class="text-[#808080]">{testimonial.time}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick$={prevSlide}
          class="absolute md:left-[-30px] left-[-15px] top-2/3 -translate-y-1/2 transform rounded-full border border-neutral-200 bg-white p-2 shadow-lg"
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick$={nextSlide}
          class="absolute md:right-[-25px] right-[-5px] top-2/3 -translate-y-1/2 transform rounded-full border border-neutral-200 bg-white p-2 shadow-lg"
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
        </button>
      </div>
    </div>
  );
});
