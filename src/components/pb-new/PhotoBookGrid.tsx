import { component$ } from "@builder.io/qwik";

export const PhotoBookGrid = component$(() => {
  // Dữ liệu các mục photo book
  const categories = [
    { name: "Travel", imageSrc: "/images/simple-photo.jpg" },
    { name: "Simple", imageSrc: "/images/simple-photo.jpg" },
    { name: "Family", imageSrc: "/images/simple-photo.jpg" },
    { name: "All", imageSrc: "/images/simple-photo.jpg" },
  ];

  return (
    <section class="block md:hidden px-4 py-10"> {/* Chỉ hiển thị trên mobile */}
      <div class="grid grid-cols-2 gap-6">
        {categories.map((category) => (
          <div key={category.name} class="flex flex-col items-center">
            <img
              src={category.imageSrc || "/placeholder.jpg"}
              alt={category.name}
              class="w-[170px] h-[170px]"
              width="170"
              height="170"
            />
            <p class="mt-2 text-center font-bold text-black">
              {category.name} <br /> Photo Book
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});
