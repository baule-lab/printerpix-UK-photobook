import { component$ } from "@builder.io/qwik";

export const PhotoBookGrid = component$(() => {
  // Dữ liệu các mục photo book
  const categories = [
    { name: "Travel", imageSrc: "/images/types-of-photo-books/travel-book.jpg" },
    { name: "Simple", imageSrc: "/images/types-of-photo-books/simple-book.jpg" },
    { name: "Family", imageSrc: "/images/types-of-photo-books/family-book.jpg" },
    { name: "All", imageSrc: "/images/types-of-photo-books/all-book.jpg" },
  ];

  return (
    <section class="block md:hidden px-4 py-5">
      <div class="grid grid-cols-2 gap-6">
        {categories.map((category) => (
          <div key={category.name} class="flex flex-col items-center">
            <img
              src={category.imageSrc || "/placeholder.jpg"}
              alt={category.name}
              class="w-[150px] h-[150px]"
              width="150"
              height="150"
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
