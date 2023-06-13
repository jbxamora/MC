import Image from "next/image";
import Contact from "../components/contact";
import { about, bio, avatar } from "../lib/info";
import React from "react";
import { ArrowIcon, InstagramIcon } from "components/icons";

export const revalidate = 60;

export default function HomePage() {
  return (
    <section>
      <div className="text-center">
        <h1 className="font-bold text-3xl font-serif text-ellipsis">CYI.EXIST</h1>
        <p className="m-5 text-neutral-800 dark:text-neutral-200 text-center justify-center items-center">
          {about()}
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mx-auto ">
        <Image
          alt="CYEXIST"
          className="border grayscale"
          src={avatar}
          width={500}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400"></div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li></li>
      </ul>
      <>
        For the quickest response during or outside of shop hours DM on
        Instagram <br />
        <br />
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
        </div>
        <br />
        <br />
        <div className="justify-center text-center">
          To set up a consultation, you can send me a message with the following
          info.
          <br />
          <br />
        </div>
      </>
      <Contact />
    </section>
  );
}
