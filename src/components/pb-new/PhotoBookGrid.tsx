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
            <div class="w-full h-[150px] bg-gray-300 flex items-center justify-center">
              {/* Giả lập ảnh (nếu có ảnh thật bạn có thể thay vào) */}
              <img
                src={category.imageSrc || "/placeholder.jpg"}
                alt={category.name}
                class="w-[100px] h-[100px]"
                width="100"
                height="100"
              />
            </div>
            <p class="mt-2 text-center font-bold text-black">
              {category.name} <br /> Photo Book
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});
