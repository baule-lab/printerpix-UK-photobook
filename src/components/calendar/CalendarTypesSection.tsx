import { component$ } from "@builder.io/qwik";

interface BookType {
  title: string;
  image: string;
}

export const CalendarTypesSection = component$(() => {
  const bookTypes: BookType[] = [
    {
      title: "Holiday Calendar",
      image: "/calendar/images/calendar-type/holiday-calendar.jpg",
    },
    {
      title: "Office Calendar",
      image: "/calendar/images/calendar-type/office-calendar.jpg",
    },
    {
      title: "Recipe Calendar",
      image: "/calendar/images/calendar-type/recipe-calendar.jpg",
    },
    {
      title: "Wedding Calendar",
      image: "/calendar/images/calendar-type/wedding-calendar.jpg",
    },
    {
      title: "Baby's First Year Calendar",
      image: "/calendar/images/calendar-type/baby-calendar.jpg",
    },
  ];

  return (
    <>
      <section class="flex w-full items-center justify-center md:px-0 px-4">
        <div class="container flex flex-wrap items-center md:justify-between justify-center md:gap-10 gap-2 py-3 bg-[#9B1E67] text-white md:rounded-2xl rounded-lg md:px-8 px-0">
          <div class="flex w-full flex-col items-center self-stretch md:w-[200px] md:items-start">
            <h2 class="w-full flex flex-col gap-2 text-center md:text-lg text-xl font-bold md:text-start">
              <span class="text-3xl font-bold">Fall Sale 🍁</span>
              <span class="text-[#FBBDD3] text-base font-normal md:block hidden">Ends Oct 14</span>
            </h2>
          </div>
          <p class="my-auto self-stretch text-center md:text-4xl text-xl font-bold">
            Up to 50% off + an extra 10% Off
          </p>
          <p class="flex flex-col md:gap-2 gap-0 my-auto w-full self-stretch text-center text-base text-[#FBBDD3] md:w-[250px] md:text-right">
            <span class="text-[#FBBDD3] text-base font-normal md:hidden block">Ends Oct 14 </span>
            <span>No Code Needed.</span>
            <span> Discount applied on checkout.</span>
          </p>
        </div>
      </section>
      <section class="container mx-auto md:flex hidden w-full flex-col items-center gap-12 px-4  font-semibold text-black *:text-lg md:px-0">
        <h2 class="text-center md:text-5xl text-3xl font-bold text-[#1A1A1A]">
          Explore Designs for Every Type of Book
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
        <button class="mx-auto md:w-[340px] md:h-auto h-[56px] w-full max-w-full gap-2.5 self-stretch rounded bg-[#F02480] px-4 py-3 text-white shadow-sm max-md:mt-10 text-base font-semibold">
          Explore Themes
        </button>
      </section>
    </>
  );
});
