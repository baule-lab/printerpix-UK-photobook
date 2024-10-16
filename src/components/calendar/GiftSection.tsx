import { component$ } from "@builder.io/qwik";

export const GiftSection = component$(() => {
  const gifts = [
    {
      title: "Free Templates",
      description: "Start fast with free templates you can edit in seconds.",
      img: "/calendar/svg/free-templates.svg", 
    },
    {
      title: "Start Any Month",
      description: "Create a photo calendar anytime of the year.",
      img: "/calendar/svg/start-any-month.svg", 
    },
    {
      title: "Add Special Events",
      description: "Never forget a birthday or appointment again!",
      img: "/calendar/svg/add-special-events.svg", 
    },
    {
      title: "Auto-Create",
      description: "AI instantly organizes your photos to tell your story.",
      img: "/calendar/svg/auto-create.svg", 
    },
    {
      title: "Create Anywhere",
      description: "Upload photos from mobile, desktop or tablet.",
      img: "/calendar/svg/create-anywhere.svg", 
    },
    {
      title: "Quality Paper",
      description: "Expect vivid, precise colors on the paper of your choice.",
      img: "/calendar/svg/quality-paper.svg", 
    },
    {
      title: "American Made",
      description: "Printed & hand-inspected in Orlando, Florida.",
      img: "/calendar/svg/american-made.svg", 
    },
    {
      title: "Easy Gifting",
      description: "Order extra copies of your calendar to gift & share.",
      img: "/calendar/svg/easy-gifting.svg", 
    },
  ];

  return (
    <section class="container mx-auto flex  flex-col gap-8 px-4 text-black md:px-0">
      <h2 class="text-center md:text-5xl text-3xl font-bold text-[#1A1A1A] max-md:max-w-full">
        Crafted with Love, Gifted by You
      </h2>
      <div class="grid lg:grid-cols-4 grid-cols-2 gap-x-4 gap-y-[46px]">
        {gifts.map((item, index) => (
          <div
            key={index}
            class="my-auto flex flex-col items-center lg:min-w-[240px] min-w-[150px] flex-1 shrink basis-0 justify-center self-stretch gap-4"
          >
            <div
              class="lg:min-h-[150px] lg:w-[150px] min-h-[100px] min-w-[100px] w-full"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div class="flex w-full flex-col items-center gap-3 text-center">
              <h3 class="text-2xl font-bold">{item.title}</h3>
              <p class="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button class="mt-12 md:w-[340px] md:h-auto h-[56px] w-full max-w-full gap-2.5 self-center rounded bg-[#F02480] px-4 py-3 text-white shadow-sm max-md:mt-10 font-semibold text-base">
        Create Your Calendar
      </button>
    </section>
  );
});
