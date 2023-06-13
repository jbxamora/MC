import type { Metadata } from "next";
import {
  ArrowIcon,
  InstagramIcon,
  TikTokIcon,
} from "../../components/icons";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "Tattoo Apprentice at Lyfestyle Ink",
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hi, I'm an apprentice at <b>Lyfestyle Ink</b>, a tattoo shop located at{" "}
        <a href="https://www.google.com/maps/place/Lyfestyle+Ink/@37.5493592,-122.3127853,17z/data=!4m15!1m8!3m7!1s0x808f9ef7d8493717:0x9642cf49a6a3151a!2s1923+S+El+Camino+Real,+San+Mateo,+CA+94403!3b1!8m2!3d37.5493592!4d-122.3105966!16s%2Fg%2F11b8v5s7tt!3m5!1s0x808f9ef7d86d9da5:0x9b614684f2a078b2!8m2!3d37.5493212!4d-122.3106029!16s%2Fg%2F1hf4fddng?entry=ttu">
          1923 S El Camino Real San Mateo, CA 94403
        </a>
        .
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          My specialty lies in <b>greyscale tattoo art</b>. It's an amazing
          experience to turn a simple idea into a piece of lasting art on
          someone's skin.
        </p>
        <hr />
        <p>
          When I'm not immersed in ink, I channel my creativity into my brand,
          creating various kinds of art and shipping products that I'm sure
          you'll love. You can check them out <b>here</b> (insert link to your
          products).
        </p>
        <p>
          The world of tattoos is vast and diverse. From a simple symbol to a
          detailed portrait, there's a story behind each piece. And I feel
          incredibly lucky to be a part of those stories, helping people express
          themselves through body art.
        </p>
        <p className="mb-8">
          Come by Lyfestyle Ink if you're in the area. Let's create something
          unique and meaningful together!
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/cyi.exist/"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <InstagramIcon />
              <div className="ml-3">Instagram</div>
            </div>
            <ArrowIcon />
          </a>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.tiktok.com/cyi.exist/"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <TikTokIcon />
              <div className="ml-3">TikTok</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
