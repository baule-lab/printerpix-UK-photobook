import { component$ } from "@builder.io/qwik";

export const BookTypesSection = component$(() => {
  const bookTypes = [
    "Coffee Book",
    "Baby Board Book",
    "Memory Book",
    "Wedding Book",
    "Portfolio Book",
    "Cookbook",
    "Yearbook",
    "Corporate Book",
    "Luxury Wedding Book",
    "Fabric Style Book",
  ];

  return (
    <section class="mt-20 flex w-full flex-col items-center gap-12 *:text-lg font-semibold text-black  container mx-auto md:px-0 px-4">
      <h2 class="self-stretch text-center text-3xl font-bold text-zinc-800 max-md:max-w-full">
        The perfect book for you to tell your story.
      </h2>
      <div class="my-auto grid w-full min-w-[240px] basis-0 grid-cols-2 gap-x-[16px] gap-y-[46px] self-stretch max-md:max-w-full md:grid-cols-3 lg:grid-cols-5">
        {" "}
        {bookTypes.map((type, index) => (
          <div key={index} class="flex flex-col items-center gap-6">
            <div class="flex aspect-square min-h-[237px] w-full rounded-md bg-zinc-300"></div>
            <p class="text-center">
              {type.split(" ").map((word, i) => (
                <span key={i}>
                  {word}
                  {i === 0 && <br />}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
      <button class="mx-auto w-[150px] max-w-full gap-2.5 self-stretch rounded bg-pink-500 px-4 py-3 text-sm text-white shadow-sm max-md:mt-10">
        Start creating
      </button>
    </section>
  );
});
