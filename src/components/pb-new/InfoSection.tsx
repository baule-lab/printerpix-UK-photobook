import { component$ } from "@builder.io/qwik";

export const InfoSection = component$(() => {
  return (
    <section class="flex flex-col w-full text-black container mx-auto md:px-0 px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-md:max-w-full">
        {/* Left Column */}
        <div class="flex flex-col space-y-8">
          <div class="flex flex-col w-full text-zinc-900 max-md:max-w-full">
            <h2 class="text-lg font-semibold tracking-normal max-md:max-w-full">
              <span class="text-base font-bold tracking-normal leading-6 text-zinc-900">
                Relive Your Moments With Photo Books
              </span>
            </h2>
            <p class="mt-3 text-base tracking-normal max-md:max-w-full">
              A photo book allows you to preserve special memories, from spontaneous adventures to once-in-a-lifetime events, in a way that’s tangible and lasting. Each page captures your experiences, turning digital files into a keepsake you can hold, share, and relive whenever you want.
            </p>
          </div>

          <div class="flex flex-col w-full text-zinc-900 max-md:max-w-full">
            <h2 class="text-lg font-semibold tracking-normal max-md:max-w-full">
              <span class="text-base font-bold tracking-normal leading-6 text-black">
                Why Create a Photo Book?
              </span>
            </h2>
            <p class="mt-3 text-base tracking-normal max-md:max-w-full">
              Photo books offer a physical connection to your memories—something digital albums can’t replicate. Holding a custom book in your hands and flipping through pages filled with faces and places dear to you is an experience no screen can match.
              <br />
              Beyond their physical appeal, photo books help preserve your memories in a more lasting way. Digital files can be lost or corrupted, but a high-quality photo book stands the test of time. Whether you’re creating a wedding album, a travel scrapbook, or a family yearbook, the printed pages will always be there.
              <br />
              With personalized books, you won’t have to worry about losing photos or finding ways to store them since your images are already printed directly on the pages. Plus, the customization options offer more room for creativity and expression, making the book truly yours.
            </p>
          </div>

          <div class="flex flex-col w-full text-zinc-900 max-md:max-w-full">
            <h2 class="text-lg font-semibold tracking-normal max-md:max-w-full">
              <span class="text-base font-bold tracking-normal leading-6 text-black">
                Types of Personalized Books
              </span>
            </h2>
            <p class="mt-3 text-base tracking-normal max-md:max-w-full">
              At Printerpix, we offer several types of personalized photo books to match your style, each with different paper options to enhance your photos.
              <br />
              Our hardcover style features classic binding & glossy pages for a stunning presentation. These photo books are perfect for every occasion. Use them for weddings, milestones, seasonal events, birthdays & more.
              <br />
              Looking for something more budget-friendly? Our softcover photo books are lightweight, flexible & feature glossy pages — ideal for displaying your favorite photos.
              <br />
              Our layflat photo books use thick board & heavyweight paper to create an heirloom-worthy keepsake. The binding sets this book apart, opening fully to reveal seamless photo spreads. This photo book is ideal for epic milestones, adventures & moments.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div class="flex flex-col space-y-8">
          <div class="flex flex-col w-full text-zinc-900 max-md:max-w-full">
            <h2 class="text-lg font-semibold tracking-normal max-md:max-w-full">
              <span class="text-base font-bold tracking-normal leading-6 text-black">
                How to Create a Custom Book for Any Occasion
              </span>
            </h2>
            <p class="mt-3 text-base tracking-normal max-md:max-w-full">
              Designing a custom book for any occasion is easy with our online tool, where you can upload your photos, arrange them in custom layouts, and add text or captions to tell your story.
              <br />
              For weddings, you can include images from the prenup photoshoot, ceremony, and every moment in between. Our easy-to-use design tool also makes it quick and fun to create personalized books for birthdays, graduations, holidays, and more!
              <br />
              No matter the occasion, you have the flexibility to customize every detail—from backgrounds and layouts down to fonts and colors.
            </p>
          </div>

          <div class="flex flex-col w-full text-zinc-900 max-md:max-w-full">
            <h2 class="text-lg font-semibold tracking-normal max-md:max-w-full">
              <span class="text-base font-bold tracking-normal leading-6 text-black">
                Personalized Photo Books That Last
              </span>
            </h2>
            <p class="mt-3 text-base tracking-normal max-md:max-w-full">
              A photo book is all about preserving memories and creating something that will last. With our wide range of customization options, high-quality paper, and durable binding, each book is designed to capture a part of your history and be cherished by loved ones for years to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
