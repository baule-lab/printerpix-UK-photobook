import { component$, useSignal, $ } from "@builder.io/qwik";

export const FAQSection = component$(() => {
  // State to manage which accordion is open
  const activeIndex = useSignal<number | null>(null);

  // Function to handle accordion toggle
  const handleToggle = $((index: number) => {
    activeIndex.value = activeIndex.value === index ? null : index; // Toggle between open and closed
  });

  // FAQs data
  const faqs = [
    {
      question: "How do I order photo prints online from my phone?",
      answer:
        "You can upload pictures from your camera roll, Google Drive or connect to your social media accounts like Instagram or Facebook.",
    },
    {
      question: "What is photo printing?",
      answer:
        "Photo printing is the process of producing a physical copy of your digital photos.",
    },
    {
      question: "What is the best site to print my photos?",
      answer:
        "There are many great sites for printing photos, including Shutterfly, Snapfish, and Amazon Prints.",
    },
    {
      question: "How long does it take to receive my online photo prints?",
      answer:
        "Delivery time varies by provider but typically ranges from 3-7 business days.",
    },
  ];

  return (
    <section class="flex w-full flex-col items-center px-24 max-md:mt-10 max-md:max-w-full max-md:px-5">
      <h2 class="self-stretch text-center text-3xl font-bold text-zinc-800 max-md:max-w-full">
        FAQ About Photo Prints
      </h2>
      <div class="mt-6 flex w-[642px] max-w-full flex-col">
        {faqs.map((faq, index) => (
          <div
            key={index}
            class="mt-5 flex w-full flex-col bg-zinc-100 p-6 max-md:max-w-full max-md:px-5"
          >
            <div
              class="flex w-full cursor-pointer items-start justify-between gap-4 text-lg font-semibold tracking-normal text-zinc-900 max-md:max-w-full"
              onClick$={() => handleToggle(index)}
            >
              <h3 class="flex-1 break-words">{faq.question}</h3>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e462601e7cf3da72ed1a9485f391fbe6974a3ebc8fff130f41b85758b4bcd04?placeholderIfAbsent=true&apiKey=7f743169fed1434cba7b7dfa49538c27" // Replace with the correct arrow icon URL
                alt={activeIndex.value === index ? "Collapse" : "Expand"}
                width="24" // Add appropriate width
                height="24" // Add appropriate height
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
              <p class="mt-6 text-sm text-black max-md:max-w-full">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button class="mx-auto mt-6 md:w-[136px] w-full max-w-full gap-2.5 self-stretch rounded bg-pink-500 px-4 py-3 text-sm text-white shadow-sm">
        Order Prints
      </button>
    </section>
  );
});
