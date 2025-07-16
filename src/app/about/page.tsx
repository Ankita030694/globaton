import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <div>
      <Navbar />

    <div className="min-h-screen flex flex-col bg-white px-4 lg:px-25">
      <main className="container mx-auto px-4 py-8 lg:py-12 flex-grow">
        {/* Hero Section */}
        <div className="text-center mb-8 lg:mb-16">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 text-[#000000]">About Us</h1>
          <h2 className="text-2xl lg:text-3xl mb-6 lg:mb-8">
            <span className="text-[#E5A853]">Empowering</span> <span className="text-[#000000]">Growth, Driving Impact</span>
          </h2>
          <p className="max-w-4xl mx-auto text-gray-700 text-base lg:text-lg">
            At Globaton, we are more than just a consultancy firm—we are strategic partners in
            transformation. With a global presence and deep industry expertise, we specialize in providing
            tailored solutions that unlock potential, enhance performance, and create lasting impact for
            businesses and individuals across diverse industries.
          </p>
        </div>

        {/* Why Choose Section */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-[#000000]">Why Choose Globaton?</h2>
            <ul className="space-y-4 lg:space-y-6">
              {[
                'A team of seasoned professionals with a worldwide perspective.',
                'Custom solutions designed for your unique business needs.',
                'A commitment to ethical practices and top-tier consulting.',
                'Comprehensive services from ideation to execution.',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-[#000000]">
                  <span className="bg-[#1B5E20] rounded-full p-1">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link 
              href="/form?service=get-in-touch" 
              className="inline-block mt-6 lg:mt-8 px-6 lg:px-8 py-2 lg:py-3 bg-[#1B5E20] text-white rounded-lg hover:bg-[#154a19] transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Right side image with overlay elements */}
          <div className="relative mt-8 md:mt-0">
            <div className="rounded-2xl p-4 sm:p-6">
              <Image
                src="/abouthero.png"
                alt="About Globaton"
                width={600}
                height={400}
                className="rounded-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
    <div className="bg-[#165D3F] text-white p-4 lg:p-6">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center">Our Mission</h2>
      <p className="max-w-4xl mx-auto text-base lg:text-lg text-center">
        We aim to challenge conventional thinking and drive innovation through expert consulting, technology, and design. Our goal is to help clients navigate complex challenges, optimize operations, and achieve sustainable growth.
      </p>
    </div>

    {/* What We Do Section */}
    <div className="bg-white py-8 lg:py-16 px-4">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center text-[#000000]">What We Do</h2>
      <p className="text-center text-gray-700 max-w-4xl mx-auto mb-8 lg:mb-16">
        Globaton is built on a foundation of expertise, collaboration, and integrity. Our diverse teams bring cutting-edge insights and a multidisciplinary approach, working closely with clients to solve critical business problems and drive measurable results.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6 max-w-7xl mx-auto mb-8 lg:mb-16">
        {[
          {
            title: "Business Strategy & Management Consulting",
            description: "We optimize operations, streamline processes, and develop growth strategies to help businesses thrive. Our expert insights drive efficiency and long-term success."
          },
          {
            title: "Technology & Digital Transformation",
            description: "We integrate AI, automation, and digital tools to enhance efficiency and scalability. Our solutions future-proof businesses for a competitive edge."
          },
          {
            title: "Corporate & Financial Advisory",
            description: "We provide expert financial planning, investment strategies, and business structuring. Our approach ensures financial stability and sustainable growth."
          },
          {
            title: "Legal & Compliance Services",
            description: "We help businesses navigate complex regulations and maintain legal compliance. Our services safeguard operations with corporate governance and legal excellence."
          },
          {
            title: "Branding & Marketing Solutions",
            description: "We create compelling brand strategies and digital marketing campaigns. Our solutions elevate brand identity, customer engagement, and market reach."
          }
        ].map((service, index) => (
          <div key={index} className="bg-gray-50 p-4 lg:p-6 rounded-lg shadow-sm">
            <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4 text-[#000000]">{service.title}</h3>
            <p className="text-sm lg:text-base text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* New detailed content section */}
    <div className="mx-auto bg-[#F4F4F4] p-4 lg:p-25">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-center text-[#000000]">Strategize, Optimize, Thrive with Globaton</h2>
        
        <div className="space-y-4 lg:space-y-6 text-gray-700">
          <p className="text-base lg:text-lg">
            At Globaton, we are more than a consultancy—we are architects of transformation, helping businesses navigate complexities, unlock potential, and achieve long-term success. With a global footprint and a diverse team of experts, we empower organizations to drive innovation, enhance efficiency, and create sustainable impact. Our multidisciplinary approach integrates strategy, technology, financial intelligence, legal expertise, and creative branding to deliver holistic, results-driven solutions tailored to our clients' unique challenges.
          </p>
          
          <p className="text-base lg:text-lg">
            We specialize in business strategy and management consulting, helping organizations refine their vision, optimize operations, and position themselves for long-term growth. Our technology and digital transformation services ensure businesses stay ahead in a fast-evolving digital landscape, leveraging AI, automation, and cutting-edge tech to enhance performance and scalability. Through corporate and financial advisory, we provide expert guidance on investment strategies, mergers, risk management, and financial structuring to drive stability and expansion. Our legal and compliance services ensure organizations remain aligned with regulatory standards, mitigating risks and safeguarding long-term operations. Additionally, our branding and marketing solutions help businesses establish a strong presence, connect with their target audience, and differentiate themselves in competitive markets.
          </p>
          
          <p className="text-base lg:text-lg">
            What sets us apart is our commitment to challenging traditional thinking and bringing fresh perspectives to every problem. We believe that true success is built on strategic foresight, bold innovation, and relentless execution. At Globaton, we work side by side with our clients, understanding their needs, identifying opportunities, and crafting strategies that go beyond immediate goals—helping them shape the future of their industries.
          </p>
          
          <p className="text-base lg:text-lg">
            Our core values—integrity, collaboration, and excellence—drive everything we do. We don't just provide advice; we become partners in progress, investing our expertise and insights into the growth of every client we work with. Whether you're a startup looking to establish your foundation, a mid-sized company aiming for expansion, or a global enterprise seeking transformative change, Globaton is your trusted partner in success.
          </p>
          
          <p className="text-base lg:text-lg font-semibold text-center mt-6 lg:mt-8">
            Together, we don't just solve problems—we innovate, elevate, and dominate.
          </p>
        </div>
      </div>

      {/* Meet the Minds Section */}
      <div className="mx-auto p-4 lg:p-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#000000]">Meet the Minds Behind Globaton</h2>
          <p className="text-gray-600 mb-8 lg:mb-12 text-base lg:text-lg">
            An exceptional team of industry experts, forward-thinkers, and problem solvers
            dedicated to driving success. With diverse backgrounds we bring a
            multidimensional approach to every challenge.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Late Adv. Narendra Kumar Mittal",
                description: "Tax Expert, LLB with 60+ years of experience",
                image: "/team/.jpg"
              },
              {
                title: "FCS Sarvesh Sharan Srivastava",
                description: "Fellow Member - ICSI, CMA, LLB, Insolvency Professional with 35+ years of experience",
                image: "/team/3.jpg"
              },
              {
                title: "Adv. Rahul Kumar Mittal",
                description: "Income Tax Practitioner, LLB with 35+ years of experience",
                image: "/team/.jpg"
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-100 rounded-3xl p-4 lg:p-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-2xl mb-4 lg:mb-6"
                />
                <h3 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3 text-[#000000]">{item.title}</h3>
                <p className="text-sm lg:text-base text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="mx-auto p-4 lg:p-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#000000] text-center mb-5">Our Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Adv. Anuj Anand Malik",
                description: "B.A. LL.B (H) | Association Member - IACC | Debt Settlement Specialist | Alternative Dispute Resolution | Negotiator | Cyber Frauds | IP Laws",
                image: "/team/2.jpg"
              },
              {
                title: "Adv. Shrey Arora",
                description: "B.A. LL.B (H) | BCI & BCD Member | Dispute Resolution | Banking & Finance | Debt Settlement | Contract Negotiation | IPR & Cyber Fraud Advisor",
                image: "/team/1.jpg"
              },
              {
                title: "CA Harshita Gupta",
                description: "Association Member - ICAI | Chartered Accountant | Financial Advisor | Ex - Delloite",
                image: "/team/4.jpg"
              },
              {
                title: "CA Utkarsh Gupta",
                description: "Association Member - ICAI | Chartered Accountant | Auditor | 10+ years of experience",
                image: "/team/5.jpg"
              },
              {
                title: "CA Pushpit Dixit",
                description: "Association Member - ICAI | Chartered Accountant | Auditor | Financial Advisor | 10+ years of experience",
                image: "/team/.jpg"
              },
              {
                title: "Adv. Bhuvnesh Mittal",
                description: "B.Com | LL.B (H) | Tax Planner | 10+ years of experience11",
                image: "/team/.jpg"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-100 rounded-3xl p-4 lg:p-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-2xl mb-4 lg:mb-6"
                />
                <h3 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3 text-[#000000]">{item.title}</h3>
                <p className="text-sm lg:text-base text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    <Footer />
    </div>
  )
}
