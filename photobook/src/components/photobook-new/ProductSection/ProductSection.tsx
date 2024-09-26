/**
 * This code was generated by Builder.io.
 */
import { component$ } from "@builder.io/qwik";

export const ProductSection = component$(() => {
  return (
    <section class="flex self-start mt-32 max-md:mt-10">
      <div class="gap-2.5 self-start px-2.5 mt-9 text-xl font-semibold tracking-normal text-center text-blue-800 whitespace-nowrap bg-blue-100 h-[135px] min-h-[135px] rounded-[167px] w-[135px]">
        💟 <br /> Most <br /> Loved
      </div>
      <div class="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
        <h2 class="self-center text-3xl font-bold text-center text-zinc-800 max-md:max-w-full">
          Explore all the amazing books
        </h2>
        <div class="flex flex-wrap gap-10 mt-14 max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/42ba93eb7d998e95645a2ff40d830a82d5a521510ee73c790f1b75100decce87?placeholderIfAbsent=true&apiKey=7f743169fed1434cba7b7dfa49538c27"
            alt="Book preview"
            class="object-contain self-start rounded aspect-square min-w-[240px] w-[619px] max-md:max-w-full"
          />
          <div class="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
            <div class="flex flex-wrap gap-3 p-1.5 w-full text-sm font-medium leading-none whitespace-nowrap rounded-lg bg-neutral-100 min-h-[48px] text-slate-700 max-md:max-w-full">
              <button class="flex-1 shrink gap-2.5 self-stretch px-3 py-1.5 h-full rounded">
                Hardcover
              </button>
              <button class="flex-1 shrink gap-2.5 self-stretch px-3 py-1.5 h-full text-white bg-pink-500 rounded">
                Layfat
              </button>
              <button class="flex-1 shrink gap-2.5 self-stretch px-3 py-1.5 h-full rounded">
                Softcover
              </button>
            </div>
            <div class="flex flex-col px-8 pt-8 pb-20 mt-8 w-full rounded-lg bg-neutral-100 min-h-[459px] max-md:px-5 max-md:max-w-full">
              <div class="flex flex-col w-full max-md:max-w-full">
                <div class="flex flex-col max-w-full w-[157px]">
                  <h3 class="text-3xl font-bold tracking-tight leading-loose text-zinc-800">
                    Lay﻿flat
                  </h3>
                  <p class="mt-3 leading-none text-green-600 font-[number:var(--sds-typography-body-font-weight-regular)] text-[length:var(--sds-typography-body-size-medium)]">
                    Starting at{" "}
                    <span class="font-bold text-green-600">$48.99</span>
                  </p>
                </div>
                <p class="mt-6 text-base tracking-normal text-black max-md:max-w-full">
                  Our clever binding technique lets you share your biggest
                  moments and best photos across seamless two-page spreads.
                </p>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cbc65e8cf08004c5f2ff4f97d6d02f74c9a437f3efb425435c44cb7c8d1b45a?placeholderIfAbsent=true&apiKey=7f743169fed1434cba7b7dfa49538c27"
                  alt="Layflat book example"
                  class="object-contain mt-6 w-full aspect-[500] max-md:max-w-full"
                />
              </div>
              <div class="flex flex-col justify-center self-start mt-8 text-base text-black">
                <p>
                  <span class="font-bold">Cover:</span> Standard, Acrylic,
                  Fabric
                </p>
                <p class="mt-6">
                  <span class="font-bold">Paper Finishes:</span> Semi-Gloss,
                  Matte, Lustre
                </p>
                <p class="mt-6">
                  <span class="font-bold">Pages:</span> Up to 400 pages
                </p>
                <p class="mt-6">
                  <span class="font-bold">Sizes:</span> 8x8", 12x8", 12x12",
                  16x12"
                </p>
              </div>
            </div>
            <button class="overflow-hidden gap-2.5 self-stretch px-4 py-3 mt-8 w-full text-sm font-semibold leading-6 bg-pink-500 rounded shadow-sm text-slate-50 max-md:max-w-full">
              Shop Lay﻿flat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});
