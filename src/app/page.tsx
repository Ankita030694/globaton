import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import BlogWrapper from "@/components/BlogWrapper";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import ClientPageWrapper from "@/components/ClientPageWrapper";
import ConsultationPopup from "@/components/ConsultationPopup";
import StructureMatchmaker from "@/components/StructureMatchmaker";
import NameCheckerCard from "@/components/NameCheckerCard";
import FoundersPackCard from "@/components/FoundersPackCard";

export default function Home() {
  return (
    <ClientPageWrapper>
      <main className="min-h-screen overflow-x-hidden">
        <ConsultationPopup />
        <Navbar />
        <Hero />
        <section className="bg-[#F9FBF9] py-16 px-4 sm:px-8 md:px-16 border-b border-emerald-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#165D3F] text-center mb-16 max-w-none leading-none tracking-tight whitespace-nowrap">
              Turn your <span className="text-[#CBA135]">ideation</span> into a <span className="relative inline-block">
                legally solid
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#CBA135]/20 rounded-full"></span>
              </span> startup
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <NameCheckerCard />
              <StructureMatchmaker />
              <FoundersPackCard />
            </div>
          </div>
        </section>
        <Plans />
        <BlogWrapper />
        <Form />
        <Footer />
      </main>
    </ClientPageWrapper>
  );
}
