import heroDesktop from "@/assets/image-web-3-desktop.webp";
import heroMobile from "@/assets/image-web-3-mobile.webp";

export default function Hero() {
  return (
    <article>
      <picture>
        <source
          media="(min-width: 40rem)"
          srcSet={heroDesktop.src}
          width={heroDesktop.width}
          height={heroDesktop.height}
        />
        <img
          src={heroMobile.src}
          width={heroMobile.width}
          height={heroMobile.height}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="aspect-343/300 w-full object-cover sm:aspect-730/300"
        />
      </picture>

      <div className="mt-6 sm:mt-7 sm:grid sm:grid-cols-2 sm:gap-7.5">
        <h1 className="max-w-[7.5em] text-hero font-extrabold wide:text-hero-wide">
          The Bright Future of Web 3.0?
        </h1>

        <div className="mt-4 sm:mt-0">
          <p className="text-dark-grayish-blue">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <a className="v-btn mt-6 sm:mt-7.25" href="#">
            Read more
            <span className="sr-only"> about the future of Web 3.0</span>
          </a>
        </div>
      </div>
    </article>
  );
}
