import Image from "next/image";
import { topArticles } from "@/lib/content";

export default function TopArticles() {
  return (
    <section aria-labelledby="top-heading" className="mt-16 lg:mt-17.75">
      <h2 id="top-heading" className="sr-only">
        Top stories
      </h2>

      <ul className="grid gap-8 lg:grid-cols-3 lg:gap-7.5">
        {topArticles.map(({ rank, title, excerpt, image }) => (
          <li key={rank} className="flex gap-6">
            <div className="relative w-25 shrink-0">
              <Image src={image} alt="" fill sizes="100px" className="object-cover" />
            </div>

            <div>
              <p className="text-section font-bold text-grayish-blue-dark">
                {rank}
              </p>
              <h3 className="mt-3 text-subtitle font-extrabold">
                <a className="v-link-red" href="#">
                  {title}
                </a>
              </h3>
              <p className="mt-2.25 text-dark-grayish-blue">{excerpt}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
