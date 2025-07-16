import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import BlogWrapper from "@/components/BlogWrapper";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import ClientPageWrapper from "@/components/ClientPageWrapper";

export default function Home() {
  return (
    <ClientPageWrapper>
      <main className="min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <Plans />
        <BlogWrapper />
        <Form />
        <Footer />
      </main>
    </ClientPageWrapper>
  );
}
