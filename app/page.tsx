import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Welcome from "@/components/Welcome";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full min-w-0 flex-col overflow-x-clip bg-[var(--wedding-ink)] text-[var(--wedding-cream)]">
      <main className="flex-1">
        <Hero />
        <Info />
        <Welcome />
      </main>
      <Footer />
    </div>
  );
}
