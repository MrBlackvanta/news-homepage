import Hero from "@/components/hero";
import NewArticles from "@/components/new-articles";
import TopArticles from "@/components/top-articles";

export default function Home() {
  return (
    <main className="v-container flex-1 pb-20">
      <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_21.875rem] lg:gap-7.5">
        <Hero />
        <NewArticles />
      </div>
      <TopArticles />
    </main>
  );
}
