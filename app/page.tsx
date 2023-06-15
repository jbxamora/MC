import Image from "next/image";
import { name, about, bio, avatar } from "lib/info";
import { InstagramIcon, ArrowIcon } from "components/icons";

export const revalidate = 60;

export default async function HomePage() {
  return (
    <section className="flex flex-col items-center">
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200 text-center">
        {about()}
      </p>
      <div className="flex justify-center items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
      </div>
      <p className="my-5 max-w-[600px] text-center text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <ul className="flex items-center justify-center flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/username"
          >
            <InstagramIcon />
            <p className="h-7">Instagram</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="booking app or contact link"
          >
            <ArrowIcon />
            <p className="h-7">Book Now</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
