import { component$, useSignal, $ } from "@builder.io/qwik";

export const FAQSection = component$(() => {
  const activeIndex = useSignal<number | null>(null);

  const handleToggle = $((index: number) => {
    activeIndex.value = activeIndex.value === index ? null : index;
  });

  const faqs = [
    {
      question: "How many pages can my photo book have?",
      answer: [
        {
          type: "html",
          content: `<p>The maximum number of pages in your photo book depends on the format you choose. Here are the page limits for each format:</p>`,
        },
        {
          type: "html",
          content: `<ul>
                      <li><b>Hardcover:</b> Up to 200 pages</li>
                      <li><b>Softcover:</b> Up to 100 pages</li>
                      <li><b>Layflat:</b> Up to 40 pages</li>
                      <li><b>Premium Layflat:</b> Up to 40 pages</li>
                      <li><b>Luxury Layflat:</b> Up to 50 pages</li>
                    </ul>`,
        },
      ],
    },
    {
      question: "How do I select the best size for my photo book?",
      answer: [
        {
          type: "html",
          content: `<p>This comes down to the type of book you want to design. Our photo book sizes range from 6”x8” to 16”x12”. The 11”x8.5” option is our most popular size and is ideal for photo albums & scrapbooks.</p>`,
        },
      ],
    },
    {
      question: "What type of photo book should I create?",
      answer: [
        {
          type: "html",
          content: `<p>The type of photo book you should create depends on your purpose and the memories you want to showcase. Here are a few ideas:</p>`,
        },
        {
          type: "html",
          content: `<ul>
                      <li><b>Family Album:</b> Capture family gatherings, holidays, and milestones.</li>
                      <li><b>Travel Book:</b> Document your adventures with stunning photos from your trips.</li>
                      <li><b>Wedding Album:</b> Preserve the memories of your special day with a beautiful layout.</li>
                      <li><b>Baby Book:</b> Create a keepsake of your child's first years, featuring milestones and precious moments.</li>
                      <li><b>Scrapbook:</b> Combine photos with mementos, notes, and embellishments for a creative touch.</li>
                    </ul>`,
        },
      ],
    },
    {
      question: "Can I add multiple images to my photo book cover?",
      answer: [
        {
          type: "html",
          content: `<p>Absolutely! You can add more than one image depending on the layout you choose.</p>`,
        },
      ],
    },
    {
      question: "Are personalized photo books better than digital photo albums?",
      answer: [
        {
          type: "html",
          content: `<p>Yes! Photo books give you a tangible keepsake that a digital album can’t match.</p>`,
        },
      ],
    },
    {
      question: "Can I make a custom book on my phone?",
      answer: [
        {
          type: "html",
          content: `<p>Yes, you can create a photo book in minutes using your mobile device. Add, swap, remove photos & personalize with more embellishments.</p>`,
        },
      ],
    },
    {
      question: "How can I customize my photo book?",
      answer: [
        {
          type: "html",
          content: `<p>We offer plenty of ways to make your custom book truly unique— editable layouts, cover styles, paper options, and text personalization.</p>`,
        },
      ],
    },
  ];

  return (
    <section class="flex w-full flex-col items-center px-24 max-md:mt-10 max-md:max-w-full max-md:px-5">
      <h2 class="self-stretch text-center md:text-5xl text-3xl font-bold text-[#1A1A1A] max-md:max-w-full">
        FAQ About Photo Books
      </h2>
      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-full">
        <div class="flex flex-col space-y-5">
          {faqs.slice(0, 4).map((faq, index) => (
            <div
              key={index}
              class="flex w-full flex-col bg-zinc-100 p-6 max-md:max-w-full max-md:px-5"
            >
              <div
                class="flex w-full cursor-pointer items-start justify-between gap-4 text-lg font-semibold tracking-normal text-zinc-900 max-md:max-w-full"
                onClick$={() => handleToggle(index)}
              >
                <h3 class="flex-1 break-words">{faq.question}</h3>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e462601e7cf3da72ed1a9485f391fbe6974a3ebc8fff130f41b85758b4bcd04"
                  alt={activeIndex.value === index ? "Collapse" : "Expand"}
                  width="24"
                  height="24"
                  class={`my-auto aspect-square w-6 shrink-0 object-contain transition-transform duration-300 ${
                    activeIndex.value === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              <div
                class={`transition-max-height overflow-hidden duration-300 ease-in-out ${
                  activeIndex.value === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <div class="mt-6 text-sm text-black max-md:max-w-full faq-content">
                  {faq.answer.map((item, idx) => (
                    <div
                      key={idx}
                      class="faq-content"
                      dangerouslySetInnerHTML={item.content}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div class="flex flex-col space-y-5">
          {faqs.slice(4).map((faq, index) => (
            <div
              key={index}
              class="flex w-full flex-col bg-zinc-100 p-6 max-md:max-w-full max-md:px-5"
            >
              <div
                class="flex w-full cursor-pointer items-start justify-between gap-4 text-lg font-semibold tracking-normal text-zinc-900 max-md:max-w-full"
                onClick$={() => handleToggle(index + 4)}
              >
                <h3 class="flex-1 break-words">{faq.question}</h3>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e462601e7cf3da72ed1a9485f391fbe6974a3ebc8fff130f41b85758b4bcd04"
                  alt={activeIndex.value === index + 4 ? "Collapse" : "Expand"}
                  width="24"
                  height="24"
                  class={`my-auto aspect-square w-6 shrink-0 object-contain transition-transform duration-300 ${
                    activeIndex.value === index + 4 ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              <div
                class={`transition-max-height overflow-hidden duration-300 ease-in-out ${
                  activeIndex.value === index + 4 ? "max-h-40" : "max-h-0"
                }`}
              >
                <div class="mt-6 text-sm text-black max-md:max-w-full faq-content">
                  {faq.answer.map((item, idx) => (
                    <div
                      key={idx}
                      class="faq-content"
                      dangerouslySetInnerHTML={item.content}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button class="mx-auto mt-6 md:w-[340px] md:h-auto h-[56px] w-full max-w-full gap-2.5 self-stretch rounded bg-[#F02480] px-4 py-3 text-base text-white shadow-sm font-semibold">
        Create Your Photo Book
      </button>
    </section>
  );
});
