import { component$ } from "@builder.io/qwik";

export const Header = component$(() => {
  return (
    <header class="flex flex-col w-full max-md:max-w-full">
      <div class="gap-2.5 self-stretch p-2.5 w-full text-xs text-center text-white bg-[#1A1A1A] max-md:max-w-full">
        ✅ Applied: FALLSALE | Up to 50% off + an extra 10% | Ends: 9/24
      </div>
      <nav class="flex flex-col items-center w-full max-md:mt-10 max-md:max-w-full mt-20">
        <div class="flex flex-col px-24text-center text-black max-md:px-5 container">
          <div class="flex flex-wrap gap-10 justify-between items-center w-full text-base font-bold whitespace-nowrap max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a545d44a28e872394ab7df7a3edce5ad58416f88bc01119d7056c991f298767?placeholderIfAbsent=true&apiKey=7f743169fed1434cba7b7dfa49538c27"
              alt="Company logo"
              class="object-contain shrink-0 self-stretch my-auto aspect-[4.76] w-[162px]"
              width="162"
              height="81"
            />
            <div class="flex gap-5 justify-center items-center self-stretch my-auto">
              <div class="flex gap-2.5 items-center self-stretch my-auto w-[74px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d3037e697c4dd943886389190b01e174ac4f83a7a34b8732a06afcd0783574f?placeholderIfAbsent=true&apiKey=7f743169fed1434cba7b7dfa49538c27"
                  alt="User icon"
                  class="object-contain shrink-0 self-stretch my-auto aspect-[1.11] w-[31px]"
                  width="31"
                  height="31"
                />
                <div class="flex-1 shrink self-stretch my-auto basis-0">
                  John
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bffeb6af2722fc25ee7f8da0878681392f1ba5f3ba264039b68046e88ab0827e?placeholderIfAbsent=true&apiKey=7f743169fed1434cba7b7dfa49538c27"
                alt="Menu icon"
                class="object-contain shrink-0 self-stretch my-auto aspect-[1.26] w-[43px]"
                width="43"
                height="43"
              />
            </div>
          </div>
          <div class="flex flex-col mt-7 w-full text-sm max-md:max-w-full">
            <div class="flex flex-wrap gap-10 justify-between items-center w-full min-h-[22px] max-md:max-w-full">
              <a href="#" class="self-stretch my-auto">
                Gift Shop
              </a>
              <a href="#" class="self-stretch my-auto">
                Blankets & Bedding
              </a>
              <a href="#" class="self-stretch my-auto">
                Wall Art
              </a>
              <a href="#" class="self-stretch my-auto">
                Photo Books
              </a>
              <a href="#" class="self-stretch my-auto">
                Photo Prints
              </a>
              <a href="#" class="self-stretch my-auto">
                Kitchen & Drinkware
              </a>
              <a href="#" class="self-stretch my-auto">
                Travel & Accessories
              </a>
              <a href="#" class="self-stretch my-auto">
                Pets
              </a>
              <a href="#" class="self-stretch my-auto">
                Cards
              </a>
              <a href="#" class="self-stretch my-auto">
                Blog
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
});
