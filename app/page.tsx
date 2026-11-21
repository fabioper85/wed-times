import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Welcome from "@/components/Welcome";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full min-w-0 flex-col overflow-x-hidden bg-[var(--wedding-ink)] text-[var(--wedding-cream)]">
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex-grow">
          <Hero />
          <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex w-full min-w-0 max-w-[960px] flex-1 flex-col">
              <Info />
              <Welcome />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
