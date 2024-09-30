import { component$ } from "@builder.io/qwik";

export const PrintOptionsSection = component$(() => {
  const printOptions = [
    {
      title: "Semi-Gloss",
      description:
        "Make any photo book shine with vivid colors, bright details, smooth texture, and a subtle gloss finish.",
      img: "/images/perfect-paper-img.png",
    },
    {
      title: "Matte",
      description:
        "A more modern look with no glare and a fingerprint- and scratch-proof finish. Smudge-resistant and great for writing on.",
      img: "/images/perfect-paper-img.png",
    },
    {
      title: "Lustre",
      description:
        "A low-glare finish with superior clarity. Ultra-thick, archival-quality pages resist water, dirt, bending, and aging for 200+ years.",
      img: "/images/perfect-paper-img.png",
    },
  ];

  return (
    <section class="flex flex-col w-full max-md:px-5 max-md:mt-10  container mx-auto md:px-0 px-4">
      <h2 class="text-3xl font-bold text-center text-zinc-800 max-md:max-w-full">
        The right print for you
      </h2>
      <div class="flex flex-wrap gap-6 items-start mt-8 w-full text-center text-black max-md:max-w-full">
        {printOptions.map((option, index) => (
          <div
            key={index}
            class="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px]"
          >
            <div 
              class="flex w-full bg-zinc-300 min-h-[547px]" 
              style={{
                backgroundImage: `url(${option.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div class="flex flex-col mt-6 w-full">
              <h3 class="text-2xl font-bold">{option.title}</h3>
              <p class="mt-3 text-sm">{option.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button class="overflow-hidden gap-2.5 self-center px-4 py-3 mt-8 max-w-full text-sm font-semibold leading-6 bg-pink-500 rounded shadow-sm text-slate-50 w-[204px]">
        Start Creating
      </button>
    </section>
  );
});