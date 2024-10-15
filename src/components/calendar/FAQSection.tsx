import { component$, useSignal, $ } from "@builder.io/qwik";

export const FAQSection = component$(() => {
  // Set the default open question to the first one (index 0)
  const activeIndex = useSignal<number | null>(0);

  const handleToggle = $((index: number) => {
    activeIndex.value = activeIndex.value === index ? null : index;
  });

  const faqs = [
    {
      question: "Can I write on my custom calendar?",
      answer: [
        {
          type: "html",
          content: `<p>Our photo calendars with middle binding are printed on uncoated paper, making it super easy to write down notes with any pen.</p>`,
        },
      ],
    },
    {
      question: "Do custom calendars make good gifts? ",
      answer: [
        {
          type: "html",
          content: `<p>Personalized photo calendars are a thoughtful gift for friends or a special someone. You can make them fun or romantic depending on the photos you choose.</p>`,
        },
      ],
    },
    {
      question: "Can I use my own photos for my personalized calendar?",
      answer: [
        {
          type: "html",
          content: `<p>Yes, you can easily upload your favorite photo—or a collection for a collage—and pick a design that suits your style.</p>`,
        },
      ],
    },
    {
      question: "Can I order multiple copies of my photo calendar?",
      answer: [
        {
          type: "html",
          content: `<p>You can order just one custom calendar for yourself, or larger quantities for friends, family, or even your business.</p>`,
        },
      ],
    },
    {
      question: "Do you have pre-designed calendar themes?",
      answer: [
        {
          type: "html",
          content: `<p>Printerpix offers many pre-designed calendar themes to choose from. You can also start with a blank calendar to customize from scratch!</p>`,
        },
      ],
    },
  ];

  return (
    <section class="flex w-full flex-col items-center container mx-auto">
      <h2 class="self-stretch text-center md:text-5xl text-3xl font-bold text-[#1A1A1A] max-md:max-w-full">
        FAQ About Photo Books
      </h2>
      <div class="mt-6 flex flex-col gap-6 w-[650px] max-w-full">
        {faqs.map((faq, index) => (
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
      <button class="mx-auto mt-6 md:w-[340px] md:h-auto h-[56px] w-full max-w-full gap-2.5 self-stretch rounded bg-[#F02480] px-4 py-3 text-base text-white shadow-sm font-semibold">
        Create Your Photo Book
      </button>
    </section>
  );
});