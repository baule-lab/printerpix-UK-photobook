import { component$ } from "@builder.io/qwik";

export const MobileCreativeSection = component$(() => {
  return (
    <section class="block px-4 md:hidden">
      <h2 class="text-center !text-3xl font-bold text-black">
        Get Creative, Wherever You Go
      </h2>

      {/* Video Placeholder */}
      <div class="mt-8 flex justify-center">
        <div class="justify-cente flex h-[400px] w-full max-w-md items-center">
          <video
            class="w-full h-full object-cover"
            src="/videos/get-creative/video.mp4"
            autoplay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      {/* Nội dung mô tả */}
      <p class="mt-6 text-center text-sm text-gray-600">
        Create like a pro from your phone — no app needed! Our AI instantly
        scans, sorts & lays out your photos to build the perfect photo book.
      </p>

      {/* Nút */}
      <div class="mt-6 flex justify-center">
        <button class="bg-[#F02480] px-6 py-3 text-white shadow-md w-full">
          Start Creating
        </button>
      </div>
    </section>
  );
});
