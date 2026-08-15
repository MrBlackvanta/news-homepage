import { newArticles } from "@/lib/content";

export default function NewArticles() {
  return (
    <aside
      aria-labelledby="new-heading"
      className="bg-very-dark-blue px-5 py-6 lg:px-6 lg:py-8"
    >
      <h2
        id="new-heading"
        className="text-section font-bold text-soft-orange lg:text-section-lg"
      >
        New
      </h2>

      <ul className="mt-8.5 divide-y divide-dark-grayish-blue">
        {newArticles.map(({ title, excerpt }) => (
          <li key={title} className="pt-8 pb-7.25 first:pt-0 last:pb-0">
            <h3 className="text-title font-extrabold text-off-white">
              <a className="v-link-orange" href="#">
                {title}
              </a>
            </h3>
            <p className="mt-2 text-grayish-blue">{excerpt}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
