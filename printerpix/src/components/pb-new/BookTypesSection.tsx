import { component$ } from "@builder.io/qwik";

interface BookType {
  title: string;
  image: string;
}

export const BookTypesSection = component$(() => {
  const bookTypes: BookType[] = [
    {
      title: "Coffee Table Book",
      image: "/images/coffee-book.png",
    },
    {
      title: "Baby Book",
      image: "/images/baby-book.png",
    },
    {
      title: "Memory Book",
      image: "/images/memory-book.png",
    },
    {
      title: "Wedding Book",
      image: "/images/wedding-book.png",
    },
    {
      title: "Portfolio Book",
      image: "/images/portfolio-book.png",
    },
    {
      title: "CookBook",
      image: "/images/cookbook.png",
    },
    {
      title: "Yearbook",
      image: "/images/yearbook.png",
    },
    {
      title: "Travel Photo Book",
      image: "/images/travel-photo-book.png",
    },
    {
      title: "Luxury Wedding Book",
      image: "/images/luxury-wedding-book.png",
    },
    {
      title: "Editorial Photo Book",
      image: "/images/editorial-photo-book.png",
    },
  ];

  return (
    <>
      <section class="flex w-full items-center justify-center">
        <div class="container flex flex-wrap items-center justify-between gap-10 py-3 bg-[#852365] text-white px-8 rounded-2xl">
          <div class="flex w-full flex-col items-center self-stretch md:w-[200px] md:items-start">
            <h2 class="w-full gap-2 text-center text-lg font-bold md:text-start">
              Fall 🍁 <br />
              <span class="text-5xl font-bold">Sale</span>
            </h2>
          </div>
          <p class="my-auto self-stretch text-center text-2xl font-bold">
            Up to 50% off + an extra 10%
          </p>
          <p class="my-auto w-full self-stretch text-center text-sm text-neutral-200 md:w-[200px] md:text-right">
            Ends Oct 14 <br /> No Code Needed. <br /> Discount applied on
            checkout.
          </p>
        </div>
      </section>
      <section class="container mx-auto flex w-full flex-col items-center gap-12 px-4  font-semibold text-black *:text-lg md:px-0">
        <h2 class="text-center !text-3xl font-bold text-zinc-800">
          The perfect book for you to tell your story.
        </h2>
        <div class="my-auto grid w-full min-w-[240px] basis-0 grid-cols-2 gap-x-[16px] gap-y-[46px] self-stretch max-md:max-w-full md:grid-cols-3 lg:grid-cols-5">
          {bookTypes.map((type, index) => (
            <div key={index} class="flex flex-col items-center gap-6">
              <div
                class="flex aspect-square min-h-[237px] w-full rounded-md"
                style={{
                  backgroundImage: `url(${type.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <p class="text-center">{type.title}</p>
            </div>
          ))}
        </div>
        <button class="mx-auto w-[150px] max-w-full gap-2.5 self-stretch rounded bg-pink-500 px-4 py-3 text-sm text-white shadow-sm max-md:mt-10">
          Start creating
        </button>
      </section>
    </>
  );
});
