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
        <section className="bg-[#F9FBF9] py-16 px-4 sm:px-8 md:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <NameCheckerCard />
            <StructureMatchmaker />
            <FoundersPackCard />
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
