import { component$ } from "@builder.io/qwik";

export const InfoSection = component$(() => {
  return (
    <section class="flex flex-col w-full text-black container mx-auto md:px-0 px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Left Column */}
        <div class="flex flex-col space-y-8">
          <div class="flex flex-col w-full text-zinc-900">
            <h2 class="text-lg font-semibold tracking-normal">
              <span class="text-base font-bold tracking-normal leading-6 text-zinc-900">
                Photo Calendar vs. Standard Calendar
              </span>
            </h2>
            <p class="mt-3 text-base tracking-normal">
              Unlike store-bought calendars, our custom photo calendars allow you to personalize each page with your own photos, captions, stickers, backgrounds, and other fun design elements. Plus, while standard calendars only mark popular events and national holidays, our photo calendars let you highlight the dates that matter most to you with custom photos or stickers. Another exciting feature is that you can choose your own start month. Whether you want to kick things off in January or start mid-year, it’s completely up to you!
            </p>
          </div>

          <div class="flex flex-col w-full text-zinc-900">
            <h2 class="text-lg font-semibold tracking-normal">
              <span class="text-base font-bold tracking-normal leading-6 text-black">
                Types of Custom Calendars
              </span>
            </h2>
            <p class="mt-3 text-base tracking-normal">
              At Printerpix, we offer three types of calendars: slim calendars, calendars with binding on top, and calendars with binding in the middle. Slim calendars are ideal for kitchens, as they provide ample space to jot down grocery lists, to-do lists, and other notes. These calendars can easily fit in any area of your home.
              <br />
              <br />
              Our calendars with binding on top allow a continuous flow between your photo and the date grid. On the other hand, our calendars with binding in the middle display the photo at the top and the date grid at the bottom. These can be hung in a way that showcases both the photo and the dates at the same time.
              <br />
              <br />
              Your choice of calendar type and size depends on your preferences. All our calendars are printed on high-quality uncoated paper, making it easy to write on with any pen. For a more premium feel, we also offer an upgrade to luster paper.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div class="flex flex-col space-y-8">
          <div class="flex flex-col w-full text-zinc-900">
            <h2 class="text-lg font-semibold tracking-normal">
              <span class="text-base font-bold tracking-normal leading-6 text-black">
                Creating Your Personalized Calendar
              </span>
            </h2>
            <p class="mt-3 text-base tracking-normal">
              1. Start by clicking the "Start Your Calendar" button, which will take you to our online design tool where you can choose the type and size of your calendar.
              <br />
              <br />
              2. Select a design to set the background. Don’t worry—you can always switch to a different design if you change your mind later.
              <br />
              <br />
              3. Upload your photos and use the arrows at the bottom of the screen to flip through the calendar pages.
              <br />
              <br />
              4. Customize even further! Add extra photo boxes, text, borders, or clipart to give each page your personal touch. You can also choose from different layout options for both the cover and inside pages.
              <br />
              <br />
              5. Once you're happy with your design, simply click “Add to Cart” and head to checkout.
              <br />
              <br />
              Our tool is designed for convenience, working smoothly on any device—whether you’re using a desktop, laptop, or phone—so you can create your calendar in as little as 5 minutes!
            </p>
          </div>

          <div class="flex flex-col w-full text-zinc-900">
            <h2 class="text-lg font-semibold tracking-normal">
              <span class="text-base font-bold tracking-normal leading-6 text-black">
                Photo Calendars for Every Occasion
              </span>
            </h2>
            <p class="mt-3 text-base tracking-normal">
              Our photo calendars make fantastic gifts for any occasion. You can create an elegant design for a wedding present or a milestone-themed calendar for a graduation gift. And because you can start your calendar on any month, they’re a perfect gift anytime, for any season.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
