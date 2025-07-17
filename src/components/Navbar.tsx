"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"

const Navbar = () => {
  const router = useRouter()
  // Add state for dropdown menus
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [isBurgerOpen, setBurgerOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<{ [key: string]: boolean }>({})
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Function to handle opening dropdown
  const handleDropdownAreaEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setActiveDropdown(dropdown)
  }

  // Function to handle closing dropdown with delay
  const handleDropdownAreaLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
      setActiveSubmenu(null)
    }, 150) // Reduced delay for more responsive feel
  }

  // Function for nested dropdown hover
  const handleSubMenuEnter = (submenu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setActiveSubmenu(submenu)
  }

  // Function to handle the nested dropdown area leave
  const handleSubMenuLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null)
    }, 150)
  }

  // Clear timeout when component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Function to handle the nested dropdown area
  const handleNestedDropdownAreaEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveSubmenu(dropdown)
    // Keep the parent dropdown open
    const parentDropdown = dropdown.split("-")[0]
    setActiveDropdown(parentDropdown)
  }

  // Function to handle scrolling to contact section
  const scrollToContact = () => {
    const footer = document.getElementById('footer')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
    setBurgerOpen(false)
  }

  // Function to handle scrolling to testimonials section
  const scrollToTestimonials = () => {
    // Check if we're already on the home page
    if (window.location.pathname === '/') {
      // We're on home page, just scroll to testimonials
      const testimonials = document.getElementById('testimonials')
      if (testimonials) {
        testimonials.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // We're on a different page, navigate to home page with hash
      router.push('/#testimonials')
    }
    setBurgerOpen(false)
  }

  // Function to handle scrolling to annual compliance section
  const scrollToAnnualCompliance = () => {
    // Check if we're already on the pvltd page
    if (window.location.pathname === '/services/pvltd') {
      // We're on pvltd page, just scroll to annual compliance
      const annualCompliance = document.getElementById('annual-compliance')
      if (annualCompliance) {
        annualCompliance.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // We're on a different page, navigate to pvltd page with hash
      router.push('/services/pvltd#annual-compliance')
    }
    setBurgerOpen(false)
  }

  // Function to handle scrolling to LLP annual compliance section
  const scrollToLLPAnnualCompliance = () => {
    // Check if we're already on the llp page
    if (window.location.pathname === '/services/llp') {
      // We're on llp page, just scroll to annual compliance
      const annualCompliance = document.getElementById('annual-compliance')
      if (annualCompliance) {
        annualCompliance.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // We're on a different page, navigate to llp page with hash
      router.push('/services/llp#annual-compliance')
    }
    setBurgerOpen(false)
  }

  // Function to handle scrolling to PVT LTD annual compliance section
  const scrollToPVTLTDAnnualCompliance = () => {
    // Check if we're already on the pvltd page
    if (window.location.pathname === '/services/pvltd') {
      // We're on pvltd page, just scroll to annual compliance
      const annualCompliance = document.getElementById('annual-compliance')
      if (annualCompliance) {
        annualCompliance.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // We're on a different page, navigate to pvltd page with hash
      router.push('/services/pvltd#annual-compliance')
    }
    setBurgerOpen(false)
  }

  // Function to handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Function to handle mobile menu item click
  const handleMobileMenuItemClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="w-full flex items-center justify-between px-4 lg:px-20 bg-white z-10 relative py-2 shadow-lg">
      <div className="flex items-center">
        <Link href="/">
          <Image 
            src="/globatonlogo.png" 
            alt="Globaton Logo" 
            width={500} 
            height={500} 
            className="w-[180px] h-[90px] object-cover mt-3" 
            priority 
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-8 max-w-3xl justify-center">
        <div
          className="relative group"
          onMouseEnter={() => handleDropdownAreaEnter("business")}
          onMouseLeave={() => handleDropdownAreaLeave()}
        >
          <button className="flex items-center hover:text-[#1B6B50] transition-colors py-2 text-black text-sm font-medium">
            Business Setup <span className="ml-1"><Image src="/droparrow.png" alt="Down Arrow" width={16} height={16} /></span>
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute top-full left-0 w-72 bg-gray-50 shadow-lg rounded-lg transform ${
              activeDropdown === "business" ? "opacity-100 visible" : "opacity-0 invisible"
            } transition-all duration-300 ease-in-out -mt-0.5 z-50`}
            onMouseEnter={() => handleDropdownAreaEnter("business")}
            onMouseLeave={handleDropdownAreaLeave}
          >
            {/* Seamless connection effect */}
            <div className="h-2 bg-gray-50 -mt-1"></div>

            {/* Menu Items */}
            <div className="py-2">
              {/* Company Registration with nested dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleSubMenuEnter("business-company-registration")}
                onMouseLeave={() => handleSubMenuLeave()}
              >
                <Link
                  href="/services/company-registration"
                  className="block px-6 py-2.5 hover:bg-gray-100 hover:text-[#1B6B50] text-black flex items-center justify-between text-xs"
                >
                  Company Registration
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>

                {/* Nested dropdown for Company Registration */}
                <div
                  className={`absolute top-0 left-full w-80 bg-white shadow-lg rounded-lg transform ${
                    activeSubmenu === "business-company-registration"
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  } transition-all duration-300 ease-in-out ml-0.5 z-50`}
                  onMouseEnter={() => handleSubMenuEnter("business-company-registration")}
                  onMouseLeave={handleSubMenuLeave}
                >
                  {/* Seamless connection effect */}
                  <div className="h-full w-2 bg-white absolute -left-1 top-0"></div>

                  <div className="py-4">
                    <div className="px-6 space-y-3">
                      <Link 
                        href="/services/pvltd" 
                        className="block hover:text-[#1B6B50] text-black text-xs"
                      >
                        PVT Ltd Company
                      </Link>
                      <Link 
                        href="/services/llp" 
                        className="block hover:text-[#1B6B50] text-black text-xs"
                      >
                        LLP
                      </Link>
                      <Link 
                        href="/services/opc" 
                        className="block hover:text-[#1B6B50] text-black text-xs"
                      >
                        OPC
                      </Link>
                      <Link 
                        href="/services/soleprop" 
                        className="block hover:text-[#1B6B50] text-black text-xs"
                      >
                        Sole Proprietorship
                      </Link>
                      <Link href="/form?service=nidhi-company" className="block hover:text-[#1B6B50] text-black text-xs">
                        Nidhi Company
                      </Link>
                      <Link href="/form?service=producer-company" className="block hover:text-[#1B6B50] text-black text-xs">
                        Producer Company
                      </Link>
                      <Link 
                        href="/services/partnership" 
                        className="block hover:text-[#1B6B50] text-black text-xs"
                      >
                        Partnership Firm
                      </Link>
                      <Link href="/form?service=startup-india" className="block hover:text-[#1B6B50] text-black text-xs">
                        Start-Up India Registration
                      </Link>
                    </div>

                    {/* Book Appointment Section */}
                    <div className="mt-4 px-6 py-3 bg-gray-50">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-5 h-5 rounded-full bg-[#1B6B50] flex items-center justify-center">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                          </svg>
                        </div>
                        <span className="text-gray-600">Prefer to talk to a professional first?</span>
                        <Link href="/form?service=book-appointment" className="text-[#00D2AA] hover:underline">
                          Book an appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/form?service=change-company-name"
                className="block px-6 py-2.5 hover:bg-gray-100 text-black text-xs"
              >
                Change Company Name
              </Link>

              <Link
                href="/form?service=insolvency-liquidation"
                className="block px-6 py-2.5 hover:bg-gray-100 text-black text-xs"
              >
                Insolvency & Liquidation
              </Link>

              <Link
                href="/form?service=valuation-of-business"
                className="block px-6 py-2.5 hover:bg-gray-100 text-black text-xs"
              >
                Valuation of Business
              </Link>

              {/* Licenses & Registration with nested dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleSubMenuEnter("business-licenses-registration")}
                onMouseLeave={() => handleSubMenuLeave()}
              >
                <Link
                  href="/form?service=licenses-registration"
                  className="block px-6 py-2.5 hover:bg-gray-100 hover:text-[#1B6B50] text-black flex items-center justify-between text-xs"
                >
                  Licenses & Registration
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>

                {/* Nested dropdown for Licenses & Registration */}
                <div
                  className={`absolute top-0 left-full w-80 bg-white shadow-lg rounded-lg transform ${
                    activeSubmenu === "business-licenses-registration"
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  } transition-all duration-300 ease-in-out ml-0.5 z-50`}
                  onMouseEnter={() => handleSubMenuEnter("business-licenses-registration")}
                  onMouseLeave={handleSubMenuLeave}
                >
                  {/* Seamless connection effect */}
                  <div className="h-full w-2 bg-white absolute -left-1 top-0"></div>

                  <div className="py-4">
                    <div className="px-6 space-y-3">
                      <Link href="/form?service=dsc" className="block hover:text-[#1B6B50] text-black text-xs">DSC</Link>
                      <Link href="/form?service=udyam-registration" className="block hover:text-[#1B6B50] text-black text-xs">Udyam Registration</Link>
                      <Link href="/form?service=msme-registration" className="block hover:text-[#1B6B50] text-black text-xs">MSME Registration</Link>
                      <Link href="/form?service=iso-certification" className="block hover:text-[#1B6B50] text-black text-xs">ISO Certification</Link>
                      <Link href="/form?service=fssai-license" className="block hover:text-[#1B6B50] text-black text-xs">FSSAI (Food License)</Link>
                      <Link href="/form?service=iec-code" className="block hover:text-[#1B6B50] text-black text-xs">IEC (Import/Export Code)</Link>
                      <Link href="/form?service=apeda-rcme" className="block hover:text-[#1B6B50] text-black text-xs">Apeda RCME</Link>
                      <Link href="/form?service=spice-board" className="block hover:text-[#1B6B50] text-black text-xs">Spice Board Registration</Link>
                      <Link href="/form?service=fieo-registration" className="block hover:text-[#1B6B50] text-black text-xs">FIEO Registration</Link>
                      <Link href="/form?service=legal-metrology" className="block hover:text-[#1B6B50] text-black text-xs">Legal Metrology</Link>
                      <Link href="/form?service=hallmark-registration" className="block hover:text-[#1B6B50] text-black text-xs">Hallmark Registration</Link>
                      <Link href="/form?service=bis-registration" className="block hover:text-[#1B6B50] text-black text-xs">BIS Registration</Link>
                      <Link href="/form?service=liquor-license" className="block hover:text-[#1B6B50] text-black text-xs">Liquor License</Link>
                      <Link href="/form?service=clra-registration" className="block hover:text-[#1B6B50] text-black text-xs">CLRA Registration & Licensing</Link>
                      <Link href="/form?service=ad-code-registration" className="block hover:text-[#1B6B50] text-black text-xs">AD Code Registration</Link>
                    </div>

                    {/* Book Appointment Section */}
                    <div className="mt-4 px-6 py-3 bg-gray-50">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-5 h-5 rounded-full bg-[#1B6B50] flex items-center justify-center">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                          </svg>
                        </div>
                        <span className="text-gray-600">Prefer to talk to a professional first?</span>
                        <Link href="/form?service=book-appointment" className="text-[#00D2AA] hover:underline">
                          Book an appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative group"
          onMouseEnter={() => handleDropdownAreaEnter("tax")}
          onMouseLeave={() => handleDropdownAreaLeave()}
        >
          <button className="flex items-center hover:text-[#1B6B50] transition-colors py-1 text-black text-xs">
            Tax & Compliance <span className="ml-1"><Image src="/droparrow.png" alt="Down Arrow" width={20} height={20} /></span>
          </button>

          {/* Tax & Compliance Dropdown */}
          <div
            className={`absolute top-full left-0 w-72 bg-gray-50 shadow-lg rounded-lg transform ${
              activeDropdown === "tax" ? "opacity-100 visible" : "opacity-0 invisible"
            } transition-all duration-300 ease-in-out -mt-0.5 z-50`}
            onMouseEnter={() => handleSubMenuEnter('tax')}
            onMouseLeave={() => handleSubMenuLeave()}
          >
            {/* Seamless connection effect */}
            <div className="h-2 bg-gray-50 -mt-1"></div>
            
            <div className="py-2">
              {/* GST Registration with nested dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleSubMenuEnter('gst-registration')}
                onMouseLeave={() => handleSubMenuLeave()}
              >
                
                <Link 
                  href="/services/gst" 
                  className="block px-6 py-2.5 hover:bg-gray-100 hover:text-[#1B6B50] text-black flex items-center justify-between text-xs"
                >
                  GST
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>
                
                {/* Nested dropdown for GST Registration */}
                <div 
                  className={`absolute top-0 left-full w-80 bg-white shadow-lg rounded-lg transform ${
                    activeSubmenu === 'gst-registration' ? 'opacity-100 visible' : 'opacity-0 invisible'
                  } transition-all duration-300 ease-in-out ml-0.5 z-50`}
                >
                  {/* Seamless connection effect */}
                  <div className="h-full w-2 bg-white absolute -left-1 top-0"></div>
                  
                  <div className="py-4">
                    <div className="px-6 space-y-3">
                      <Link href="/services/gst" className="block hover:text-[#1B6B50] text-black text-xs">GST Registration</Link>
                      <Link href="/services/gstfiling" className="block hover:text-[#1B6B50] text-black text-xs">GST Filing</Link>
                      <Link href="/services/gstnotice" className="block hover:text-[#1B6B50] text-black text-xs">GST Notice</Link>
                    </div>
                    
                    {/* Book Appointment Section */}
                    <div className="mt-4 px-6 py-3 bg-gray-50">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-5 h-5 rounded-full bg-[#1B6B50] flex items-center justify-center">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                          </svg>
                        </div>
                        <span className="text-gray-600">Prefer to talk to a professional first?</span>
                        <Link href="/form?service=book-appointment" className="text-[#00D2AA] hover:underline">
                          Book an appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Accounting & Tax with nested dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleSubMenuEnter("accounting-tax")}
              onMouseLeave={() => handleSubMenuLeave()}
            >
              <button 
                className="block w-full text-left px-6 py-2.5 hover:bg-gray-100 hover:text-[#1B6B50] text-black flex items-center justify-between text-xs"
              >
                Accounting & Tax
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>

              {/* Nested dropdown for Accounting & Tax */}
              <div
                className={`absolute top-0 left-full w-80 bg-white shadow-lg rounded-lg transform ${
                  activeSubmenu === "accounting-tax"
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                } transition-all duration-300 ease-in-out ml-0.5 z-50`}
                onMouseEnter={() => handleSubMenuEnter("accounting-tax")}
                onMouseLeave={handleSubMenuLeave}
              >
                {/* Seamless connection effect */}
                <div className="h-full w-2 bg-white absolute -left-1 top-0"></div>

                <div className="py-4">
                  <div className="px-6 space-y-3">
                    <Link 
                      href="/services/accounting-&-bookkeeping" 
                      className="block hover:text-[#1B6B50] text-black text-xs"
                    >
                      Accounting & Bookkeeping
                    </Link>
                    <Link 
                      href="/form?service=itr-filing" 
                      className="block hover:text-[#1B6B50] text-black text-xs"
                    >
                      ITR Filing
                    </Link>
                    <Link 
                      href="/form?service=itr-notice" 
                      className="block hover:text-[#1B6B50] text-black text-xs"
                    >
                      ITR Notice Reply
                    </Link>
                  </div>

                  {/* Book Appointment Section */}
                  <div className="mt-4 px-6 py-3 bg-gray-50">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full bg-[#1B6B50] flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600">Prefer to talk to a professional first?</span>
                      <Link href="/form?service=book-appointment" className="text-[#00D2AA] hover:underline">
                        Book an appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Annual Compliance with nested dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleSubMenuEnter("annual-compliance")}
              onMouseLeave={() => handleSubMenuLeave()}
            >
              <button 
                className="block w-full text-left px-6 py-2.5 hover:bg-gray-100 hover:text-[#1B6B50] text-black flex items-center justify-between text-xs"
              >
                Annual Compliance
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>

              {/* Nested dropdown for Annual Compliance */}
              <div
                className={`absolute top-0 left-full w-80 bg-white shadow-lg rounded-lg transform ${
                  activeSubmenu === "annual-compliance"
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                } transition-all duration-300 ease-in-out ml-0.5 z-50`}
                onMouseEnter={() => handleSubMenuEnter("annual-compliance")}
                onMouseLeave={handleSubMenuLeave}
              >
                {/* Seamless connection effect */}
                <div className="h-full w-2 bg-white absolute -left-1 top-0"></div>

                <div className="py-4">
                  <div className="px-6 space-y-3">
                    <button 
                      onClick={() => {
                        scrollToLLPAnnualCompliance()
                        handleMobileMenuItemClick()
                      }}
                      className="block w-full text-left hover:text-[#1B6B50] text-black text-xs"
                    >
                      LLP Annual Compliance
                    </button>
                    <button 
                      onClick={() => {
                        scrollToPVTLTDAnnualCompliance()
                        handleMobileMenuItemClick()
                      }}
                      className="block w-full text-left hover:text-[#1B6B50] text-black text-xs"
                    >
                      PVT LTD Annual Compliance
                    </button>
                  </div>

                  {/* Book Appointment Section */}
                  <div className="mt-4 px-6 py-3 bg-gray-50">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full bg-[#1B6B50] flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600">Prefer to talk to a professional first?</span>
                      <Link href="/form?service=book-appointment" className="text-[#00D2AA] hover:underline">
                        Book an appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative group"
          onMouseEnter={() => handleDropdownAreaEnter("trademark")}
          onMouseLeave={() => handleDropdownAreaLeave()}
        >
          <button className="flex items-center hover:text-[#1B6B50] transition-colors py-1 text-black text-xs">
            Trademark & IP <span className="ml-1"><Image src="/droparrow.png" alt="Down Arrow" width={20} height={20} /></span>
          </button>

          {/* Trademark & IP Dropdown */}
          <div
            className={`absolute top-full left-0 w-72 bg-gray-50 shadow-lg rounded-lg transform ${
              activeDropdown === "trademark" ? "opacity-100 visible" : "opacity-0 invisible"
            } transition-all duration-300 ease-in-out -mt-0.5 z-50`}
            onMouseEnter={() => handleSubMenuEnter('trademark')}
            onMouseLeave={() => handleSubMenuLeave()}
          >
            {/* Seamless connection effect */}
            <div className="h-2 bg-gray-50 -mt-1"></div>
            
            <div className="py-2">
              {/* Trademark Registration with nested dropdown */}
              <div className="relative">
                <Link 
                  href="/services/trademark" 
                  className="block px-6 py-2.5 hover:bg-gray-100 hover:text-[#1B6B50] text-black flex items-center justify-between text-xs"
                >
                  Trademark Registration
                </Link>
                
                {/* Nested dropdown for Trademark Registration */}
                <div 
                  className={`absolute top-0 left-full w-80 bg-white shadow-lg rounded-lg transform ${
                    activeSubmenu === 'trademark-registration' ? 'opacity-100 visible' : 'opacity-0 invisible'
                  } transition-all duration-300 ease-in-out ml-0.5 z-50`}
                  onMouseEnter={() => handleSubMenuEnter('trademark-registration')}
                  onMouseLeave={() => handleSubMenuLeave()}
                >
                  {/* Seamless connection effect */}
                  <div className="h-full w-2 bg-white absolute -left-1 top-0"></div>
                  
                  <div className="py-4">
                    
                    {/* Book Appointment Section */}
                    <div className="mt-4 px-6 py-3 bg-gray-50">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-5 h-5 rounded-full bg-[#1B6B50] flex items-center justify-center">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                          </svg>
                        </div>
                        <span className="text-gray-600">Prefer to talk to a professional first?</span>
                        <Link href="/form?service=book-appointment" className="text-[#00D2AA] hover:underline">
                          Book an appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Link href="/form?service=copyright-registration" className="block px-6 py-2.5 hover:bg-gray-100 text-black text-xs">
              Copyright Registration
            </Link>
            <Link href="/form?service=patent-filing" className="block px-6 py-2.5 hover:bg-gray-100 text-black text-xs">
              Patent Filing
            </Link>
            <Link href="/form?service=design-registration" className="block px-6 py-2.5 hover:bg-gray-100 text-black text-xs">
              Design Registration
            </Link>
          </div>
        </div>

        <div
          className="relative group"
          onMouseEnter={() => handleDropdownAreaEnter("documentation")}
          onMouseLeave={() => handleDropdownAreaLeave()}
        >
          <button className="flex items-center hover:text-[#1B6B50] transition-colors py-1 text-black text-xs">
            Documentation <span className="ml-1"><Image src="/droparrow.png" alt="Down Arrow" width={20} height={20} /></span>
          </button>

          {/* Documentation Dropdown */}
          <div
            className={`absolute top-full left-0 w-72 bg-gray-50 shadow-lg rounded-lg transform ${
              activeDropdown === "documentation" ? "opacity-100 visible" : "opacity-0 invisible"
            } transition-all duration-300 ease-in-out -mt-0.5 z-50`}
            onMouseEnter={() => handleSubMenuEnter('documentation')}
            onMouseLeave={() => handleSubMenuLeave()}
          >
            {/* Seamless connection effect */}
            <div className="h-2 bg-gray-50 -mt-1"></div>
            
            <div className="py-2">
              {/* Legal Agreements with nested dropdown */}
              <div className="relative">
                <Link 
                  href="/form?service=legal-agreements" 
                  className="block px-6 py-1 hover:bg-gray-100 hover:text-[#1B6B50] text-black flex items-center justify-between text-xs"
                >
                  Legal Agreements
                </Link>
                
                {/* Nested dropdown for Legal Agreements */}
                <div 
                  className={`absolute top-0 left-full w-80 bg-white shadow-lg rounded-lg transform ${
                    activeSubmenu === 'legal-agreements' ? 'opacity-100 visible' : 'opacity-0 invisible'
                  } transition-all duration-300 ease-in-out ml-0.5 z-50`}
                >
                  {/* Seamless connection effect */}
                  <div className="h-full w-2 bg-white absolute -left-1 top-0"></div>
                  
                  <div className="py-1">
                    <div className="px-6 space-y-1">
                      <Link href="/form?service=employment-agreement" className="block hover:text-[#1B6B50] text-black text-xs">Employment Agreement</Link>
                      <Link href="/form?service=consulting-agreement" className="block hover:text-[#1B6B50] text-black text-xs">Consulting Agreement</Link>
                      <Link href="/form?service=partnership-agreement" className="block hover:text-[#1B6B50] text-black text-xs">Partnership Agreement</Link>
                      <Link href="/form?service=vendor-agreement" className="block hover:text-[#1B6B50] text-black text-xs">Vendor Agreement</Link>
                    </div>
                    
                    {/* Book Appointment Section */}
                    <div className="mt-4 px-6 py-3 bg-gray-50">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-5 h-5 rounded-full bg-[#1B6B50] flex items-center justify-center">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                          </svg>
                        </div>
                        <span className="text-gray-600">Prefer to talk to a professional first?</span>
                        <Link href="/form?service=book-appointment" className="text-[#00D2AA] hover:underline">
                          Book an appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Link href="/form?service=moa-aoa" className="block px-6 py-2.5 hover:bg-gray-100 text-black text-xs">
              MOA & AOA
            </Link>
            <Link href="/form?service=business-contracts" className="block px-6 py-2.5 hover:bg-gray-100 text-black text-xs">
              Business Contracts
            </Link>
            <Link href="/form?service=nda-agreements" className="block px-6 py-2.5 hover:bg-gray-100 text-black text-xs">
              NDA Agreements
            </Link>
          </div>
        </div>

        <div
          className="relative group"
          onMouseEnter={() => handleDropdownAreaEnter("others")}
          onMouseLeave={() => handleDropdownAreaLeave()}
        >
          <button className="flex items-center hover:text-[#1B6B50] transition-colors py-1 text-black text-xs">
            Others <span className="ml-1"><Image src="/droparrow.png" alt="Down Arrow" width={20} height={20} /></span>
          </button>

          {/* Others Dropdown */}
          <div
            className={`absolute top-full left-0 w-72 bg-gray-50 shadow-lg rounded-lg transform ${
              activeDropdown === "others" ? "opacity-100 visible" : "opacity-0 invisible"
            } transition-all duration-300 ease-in-out -mt-0.5 z-50`}
            onMouseEnter={() => handleSubMenuEnter('others')}
            onMouseLeave={() => handleSubMenuLeave()}
          >
            {/* Seamless connection effect */}
            <div className="h-2 bg-gray-50 -mt-1"></div>
            
            <div className="py-2">
              {/* Legal Advisory with nested dropdown */}
              <div className="relative">
                <Link 
                  href="/form?service=legal-advisory" 
                  className="block px-6 py-2.5 hover:bg-gray-100 hover:text-[#1B6B50] text-black flex items-center justify-between text-xs"
                >
                  Legal Advisory
                </Link>
                
                {/* Nested dropdown for Legal Advisory */}
                <div 
                  className={`absolute top-0 left-full w-80 bg-white shadow-lg rounded-lg transform ${
                    activeSubmenu === 'legal-advisory' ? 'opacity-100 visible' : 'opacity-0 invisible'
                  } transition-all duration-300 ease-in-out ml-0.5 z-50`}
                >
                  {/* Seamless connection effect */}
                  <div className="h-full w-2 bg-white absolute -left-1 top-0"></div>
                  
                  <div className="py-4">
                    <div className="px-6 space-y-3">
                      <Link href="/form?service=business-legal-advisory" className="block hover:text-[#1B6B50] text-black text-xs">Business Legal Advisory</Link>
                      <Link href="/form?service=startup-advisory" className="block hover:text-[#1B6B50] text-black text-xs">Startup Advisory</Link>
                      <Link href="/form?service=compliance-advisory" className="block hover:text-[#1B6B50] text-black text-xs">Compliance Advisory</Link>
                      <Link href="/form?service=regulatory-advisory" className="block hover:text-[#1B6B50] text-black text-xs">Regulatory Advisory</Link>
                    </div>
                    
                    {/* Book Appointment Section */}
                    <div className="mt-4 px-6 py-3 bg-gray-50">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-5 h-5 rounded-full bg-[#1B6B50] flex items-center justify-center">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                          </svg>
                        </div>
                        <span className="text-gray-600">Prefer to talk to a professional first?</span>
                        <Link href="/form?service=book-appointment" className="text-[#00D2AA] hover:underline">
                          Book an appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Link href="/form?service=business-support" className="block px-6 py-2.5 hover:bg-gray-100 text-black text-xs">
              Business Support
            </Link>
            <Link href="/form?service=investor-relations" className="block px-6 py-2.5 hover:bg-gray-100 text-black text-xs">
              Investor Relations
            </Link>
            <Link href="/form?service=faqs" className="block px-6 py-2.5 hover:bg-gray-100 text-black text-xs">
              FAQs
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex items-center space-x-4">
        <Link 
          href="/form?service=consult-expert"
          className="bg-[#C4942D] text-white px-4 py-2 rounded hover:bg-[#b38528] transition-colors text-xs"
        >
          Consult an Expert
        </Link>

        {/* Burger Menu */}
        <div className="relative">
          <button 
            onClick={() => setBurgerOpen(!isBurgerOpen)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-300 text-[#CBA135] ${isBurgerOpen ? 'rotate-90' : ''}`}
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          {/* Burger Menu Dropdown */}
          <div 
            className={`absolute top-full right-0 w-48 bg-white shadow-lg rounded-lg transform ${
              isBurgerOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
            } transition-all duration-300 ease-in-out mt-2 z-50`}
          >
            <div className="py-2">
              <Link 
                href="/about"
                className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-[#1B6B50] transition-colors"
                onClick={() => setBurgerOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/blog"
                className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-[#1B6B50] transition-colors"
                onClick={() => setBurgerOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/form?service=contact-us"
                className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-[#1B6B50] transition-colors"
                onClick={() => setBurgerOpen(false)}
              >
                Contact Us
              </Link>
              <button 
                onClick={scrollToTestimonials}
                className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100 hover:text-[#1B6B50] transition-colors"
              >
                Testimonials
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button 
          onClick={toggleMobileMenu}
          className="p-2 text-[#CBA135]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      {/*
        To allow multiple dropdowns to be open at once in the mobile menu,
        we need to use an object to track which dropdowns are open.
        We'll assume you have something like:
        const [openMobileDropdowns, setOpenMobileDropdowns] = useState<{ [key: string]: boolean }>({});
        and update the toggle logic accordingly.
      */}
      <div 
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 border-b">
          <button 
            onClick={toggleMobileMenu}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100%-64px)]">
          {/* Mobile Menu Items */}
          <div className="py-2">
            {/* Business Setup */}
            <div className="px-4 py-2">
              <button 
                className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-700"
                onClick={() =>
                  setOpenMobileDropdowns((prev: any) => ({
                    ...prev,
                    'mobile-business': !prev['mobile-business'],
                  }))
                }
              >
                Business Setup
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    openMobileDropdowns?.['mobile-business'] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMobileDropdowns?.['mobile-business'] && (
                <div className="mt-2 pl-4 space-y-2">
                  {/* Company Registration Submenu */}
                  <div className="space-y-2">
                    <button
                      className="flex items-center justify-between w-full text-left text-sm text-gray-600 hover:text-[#1B6B50]"
                      onClick={() =>
                        setOpenMobileDropdowns((prev: any) => ({
                          ...prev,
                          'mobile-company-registration': !prev['mobile-company-registration'],
                        }))
                      }
                    >
                      Company Registration
                      <svg
                        className={`w-4 h-4 transform transition-transform ${
                          openMobileDropdowns?.['mobile-company-registration'] ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openMobileDropdowns?.['mobile-company-registration'] && (
                      <div className="pl-4 space-y-2">
                        <Link 
                          href="/services/pvltd" 
                          className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                          onClick={handleMobileMenuItemClick}
                        >
                          PVT Ltd Company
                        </Link>
                        <Link 
                          href="/services/llp" 
                          className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                          onClick={handleMobileMenuItemClick}
                        >
                          LLP
                        </Link>
                        <Link 
                          href="/services/opc" 
                          className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                          onClick={handleMobileMenuItemClick}
                        >
                          OPC
                        </Link>
                        <Link 
                          href="/services/soleprop" 
                          className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                          onClick={handleMobileMenuItemClick}
                        >
                          Sole Proprietorship
                        </Link>
                        <Link 
                          href="/form?service=nidhi-company" 
                          className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                          onClick={handleMobileMenuItemClick}
                        >
                          Nidhi Company
                        </Link>
                        <Link 
                          href="/form?service=producer-company" 
                          className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                          onClick={handleMobileMenuItemClick}
                        >
                          Producer Company
                        </Link>
                        <Link 
                          href="/services/partnership" 
                          className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                          onClick={handleMobileMenuItemClick}
                        >
                          Partnership Firm
                        </Link>
                        <Link 
                          href="/form?service=startup-india" 
                          className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                          onClick={handleMobileMenuItemClick}
                        >
                          Start-Up India Registration
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link 
                    href="/form?service=change-company-name" 
                    className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                    onClick={handleMobileMenuItemClick}
                  >
                    Change Company Name
                  </Link>
                  <Link 
                    href="/form?service=insolvency-liquidation" 
                    className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                    onClick={handleMobileMenuItemClick}
                  >
                    Insolvency & Liquidation
                  </Link>
                  <Link 
                    href="/form?service=valuation-of-business" 
                    className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                    onClick={handleMobileMenuItemClick}
                  >
                    Valuation of Business
                  </Link>
                  {/* Licenses & Registration Submenu */}
                  <div className="space-y-2">
                    <button
                      className="flex items-center justify-between w-full text-left text-sm text-gray-600 hover:text-[#1B6B50]"
                      onClick={() =>
                        setOpenMobileDropdowns((prev: any) => ({
                          ...prev,
                          'mobile-licenses-registration': !prev['mobile-licenses-registration'],
                        }))
                      }
                    >
                      Licenses & Registration
                      <svg
                        className={`w-4 h-4 transform transition-transform ${
                          openMobileDropdowns?.['mobile-licenses-registration'] ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openMobileDropdowns?.['mobile-licenses-registration'] && (
                      <div className="pl-4 space-y-2">
                        <Link href="/form?service=dsc" className="block text-sm text-gray-600 hover:text-[#1B6B50]" onClick={handleMobileMenuItemClick}>DSC</Link>
                        <Link href="/form?service=udyam-registration" className="block text-sm text-gray-600 hover:text-[#1B6B50]" onClick={handleMobileMenuItemClick}>Udyam Registration</Link>
                        <Link href="/form?service=msme-registration" className="block text-sm text-gray-600 hover:text-[#1B6B50]" onClick={handleMobileMenuItemClick}>MSME Registration</Link>
                        <Link href="/form?service=iso-certification" className="block text-sm text-gray-600 hover:text-[#1B6B50]" onClick={handleMobileMenuItemClick}>ISO Certification</Link>
                        <Link href="/form?service=fssai-license" className="block text-sm text-gray-600 hover:text-[#1B6B50]" onClick={handleMobileMenuItemClick}>FSSAI (Food License)</Link>
                        <Link href="/form?service=iec-code" className="block text-sm text-gray-600 hover:text-[#1B6B50]" onClick={handleMobileMenuItemClick}>IEC (Import/Export Code)</Link>
                        <Link href="/form?service=apeda-rcme" className="block text-sm text-gray-600 hover:text-[#1B6B50]" onClick={handleMobileMenuItemClick}>Apeda RCME</Link>
                        <Link href="/form?service=spice-board" className="block text-sm text-gray-600 hover:text-[#1B6B50]" onClick={handleMobileMenuItemClick}>Spice Board Registration</Link>
                        <Link href="/form?service=fieo-registration" className="block text-sm text-gray-600 hover:text-[#1B6B50]" onClick={handleMobileMenuItemClick}>FIEO Registration</Link>
                        <Link href="/form?service=legal-metrology" className="block text-sm text-gray-600 hover:text-[#1B6B50]" onClick={handleMobileMenuItemClick}>Legal Metrology</Link>
                        <Link href="/form?service=hallmark-registration" className="block text-sm text-gray-600 hover:text-[#1B6B50]" onClick={handleMobileMenuItemClick}>Hallmark Registration</Link>
                        <Link href="/form?service=bis-registration" className="block text-sm text-gray-600 hover:text-[#1B6B50]" onClick={handleMobileMenuItemClick}>BIS Registration</Link>
                        <Link href="/form?service=liquor-license" className="block text-sm text-gray-600 hover:text-[#1B6B50]" onClick={handleMobileMenuItemClick}>Liquor License</Link>
                        <Link href="/form?service=clra-registration" className="block text-sm text-gray-600 hover:text-[#1B6B50]" onClick={handleMobileMenuItemClick}>CLRA Registration & Licensing</Link>
                        <Link href="/form?service=ad-code-registration" className="block text-sm text-gray-600 hover:text-[#1B6B50]" onClick={handleMobileMenuItemClick}>AD Code Registration</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Tax & Compliance */}
            <div className="px-4 py-2">
              <button 
                className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-700"
                onClick={() =>
                  setOpenMobileDropdowns((prev: any) => ({
                    ...prev,
                    'mobile-tax': !prev['mobile-tax'],
                  }))
                }
              >
                Tax & Compliance
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    openMobileDropdowns?.['mobile-tax'] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMobileDropdowns?.['mobile-tax'] && (
                <div className="mt-2 pl-4 space-y-2">
                  {/* GST Submenu */}
                  <div className="space-y-2">
                    <button
                      className="flex items-center justify-between w-full text-left text-sm text-gray-600 hover:text-[#1B6B50]"
                      onClick={() =>
                        setOpenMobileDropdowns((prev: any) => ({
                          ...prev,
                          'mobile-gst': !prev['mobile-gst'],
                        }))
                      }
                    >
                      GST
                      <svg
                        className={`w-4 h-4 transform transition-transform ${
                          openMobileDropdowns?.['mobile-gst'] ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openMobileDropdowns?.['mobile-gst'] && (
                      <div className="pl-4 space-y-2">
                        <Link 
                          href="/services/gst" 
                          className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                          onClick={handleMobileMenuItemClick}
                        >
                          GST Registration
                        </Link>
                        <Link 
                          href="/services/gstfiling" 
                          className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                          onClick={handleMobileMenuItemClick}
                        >
                          GST Filing
                        </Link>
                        <Link 
                          href="/services/gstnotice" 
                          className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                          onClick={handleMobileMenuItemClick}
                        >
                          GST Notice
                        </Link>
                      </div>
                    )}
                  </div>
                  {/* Accounting & Tax Submenu */}
                  <div className="space-y-2">
                    <button
                      className="flex items-center justify-between w-full text-left text-sm text-gray-600 hover:text-[#1B6B50]"
                      onClick={() =>
                        setOpenMobileDropdowns((prev: any) => ({
                          ...prev,
                          'mobile-accounting-tax': !prev['mobile-accounting-tax'],
                        }))
                      }
                    >
                      Accounting & Tax
                      <svg
                        className={`w-4 h-4 transform transition-transform ${
                          openMobileDropdowns?.['mobile-accounting-tax'] ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openMobileDropdowns?.['mobile-accounting-tax'] && (
                      <div className="pl-4 space-y-2">
                        <Link 
                          href="/services/accounting-&-bookkeeping" 
                          className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                          onClick={handleMobileMenuItemClick}
                        >
                          Accounting & Bookkeeping
                        </Link>
                        <Link 
                          href="/form?service=itr-filing" 
                          className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                          onClick={handleMobileMenuItemClick}
                        >
                          ITR Filing
                        </Link>
                        <Link 
                          href="/form?service=itr-notice" 
                          className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                          onClick={handleMobileMenuItemClick}
                        >
                          ITR Notice Reply
                        </Link>
                      </div>
                    )}
                  </div>
                  {/* Annual Compliance Submenu */}
                  <div className="space-y-2">
                    <button 
                      className="flex items-center justify-between w-full text-left text-sm text-gray-600 hover:text-[#1B6B50]"
                      onClick={() =>
                        setOpenMobileDropdowns((prev: any) => ({
                          ...prev,
                          'mobile-annual-compliance': !prev['mobile-annual-compliance'],
                        }))
                      }
                    >
                      Annual Compliance
                      <svg
                        className={`w-4 h-4 transform transition-transform ${
                          openMobileDropdowns?.['mobile-annual-compliance'] ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openMobileDropdowns?.['mobile-annual-compliance'] && (
                      <div className="pl-4 space-y-2">
                        <button 
                          onClick={() => {
                            scrollToLLPAnnualCompliance()
                            handleMobileMenuItemClick()
                          }}
                          className="block w-full text-left text-sm text-gray-600 hover:text-[#1B6B50]"
                        >
                          LLP Annual Compliance
                        </button>
                        <button 
                          onClick={() => {
                            scrollToPVTLTDAnnualCompliance()
                            handleMobileMenuItemClick()
                          }}
                          className="block w-full text-left text-sm text-gray-600 hover:text-[#1B6B50]"
                        >
                          PVT LTD Annual Compliance
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Trademark & IP */}
            <div className="px-4 py-2">
              <button 
                className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-700"
                onClick={() =>
                  setOpenMobileDropdowns((prev: any) => ({
                    ...prev,
                    'mobile-trademark': !prev['mobile-trademark'],
                  }))
                }
              >
                Trademark & IP
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    openMobileDropdowns?.['mobile-trademark'] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMobileDropdowns?.['mobile-trademark'] && (
                <div className="mt-2 pl-4 space-y-2">
                  {/* Trademark Registration Submenu */}
                  <div className="space-y-2">
                    <button
                      className="flex items-center justify-between w-full text-left text-sm text-gray-600 hover:text-[#1B6B50]"
                      onClick={() =>
                        setOpenMobileDropdowns((prev: any) => ({
                          ...prev,
                          'mobile-trademark-registration': !prev['mobile-trademark-registration'],
                        }))
                      }
                    >
                      Trademark Registration
                      <svg
                        className={`w-4 h-4 transform transition-transform ${
                          openMobileDropdowns?.['mobile-trademark-registration'] ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  <Link 
                    href="/form?service=copyright-registration" 
                    className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                    onClick={handleMobileMenuItemClick}
                  >
                    Copyright Registration
                  </Link>
                  <Link 
                    href="/form?service=patent-filing" 
                    className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                    onClick={handleMobileMenuItemClick}
                  >
                    Patent Filing
                  </Link>
                  <Link 
                    href="/form?service=design-registration" 
                    className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                    onClick={handleMobileMenuItemClick}
                  >
                    Design Registration
                  </Link>
                </div>
              )}
            </div>

            {/* Documentation */}
            <div className="px-4 py-2">
              <button 
                className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-700"
                onClick={() =>
                  setOpenMobileDropdowns((prev: any) => ({
                    ...prev,
                    'mobile-documentation': !prev['mobile-documentation'],
                  }))
                }
              >
                Documentation
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    openMobileDropdowns?.['mobile-documentation'] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMobileDropdowns?.['mobile-documentation'] && (
                <div className="mt-2 pl-4 space-y-2">
                  {/* Legal Agreements Submenu */}
                  <div className="space-y-2">
                    <button
                      className="flex items-center justify-between w-full text-left text-sm text-gray-600 hover:text-[#1B6B50]"
                      onClick={() =>
                        setOpenMobileDropdowns((prev: any) => ({
                          ...prev,
                          'mobile-legal-agreements': !prev['mobile-legal-agreements'],
                        }))
                      }
                    >
                      Legal Agreements
                      <svg
                        className={`w-4 h-4 transform transition-transform ${
                          openMobileDropdowns?.['mobile-legal-agreements'] ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openMobileDropdowns?.['mobile-legal-agreements'] && (
                      <div className="pl-4 space-y-2">
                        <Link 
                          href="/form" 
                          className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                          onClick={handleMobileMenuItemClick}
                        >
                          Employment Agreement
                        </Link>
                        <Link 
                          href="/form" 
                          className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                          onClick={handleMobileMenuItemClick}
                        >
                          Consulting Agreement
                        </Link>
                        <Link 
                          href="/form?service=partnership-agreement" 
                          className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                          onClick={handleMobileMenuItemClick}
                        >
                          Partnership Agreement
                        </Link>
                        <Link 
                          href="/form?service=vendor-agreement" 
                          className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                          onClick={handleMobileMenuItemClick}
                        >
                          Vendor Agreement
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link 
                    href="/form?service=moa-aoa" 
                    className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                    onClick={handleMobileMenuItemClick}
                  >
                    MOA & AOA
                  </Link>
                  <Link 
                    href="/form?service=business-contracts" 
                    className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                    onClick={handleMobileMenuItemClick}
                  >
                    Business Contracts
                  </Link>
                  <Link 
                    href="/form?service=nda-agreements" 
                    className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                    onClick={handleMobileMenuItemClick}
                  >
                    NDA Agreements
                  </Link>
                </div>
              )}
            </div>

            {/* Others */}
            <div className="px-4 py-2">
              <button 
                className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-700"
                onClick={() =>
                  setOpenMobileDropdowns((prev: any) => ({
                    ...prev,
                    'mobile-others': !prev['mobile-others'],
                  }))
                }
              >
                Others
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    openMobileDropdowns?.['mobile-others'] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMobileDropdowns?.['mobile-others'] && (
                <div className="mt-2 pl-4 space-y-2">
                  {/* Legal Advisory Submenu */}
                  <div className="space-y-2">
                    <button
                      className="flex items-center justify-between w-full text-left text-sm text-gray-600 hover:text-[#1B6B50]"
                      onClick={() =>
                        setOpenMobileDropdowns((prev: any) => ({
                          ...prev,
                          'mobile-legal-advisory': !prev['mobile-legal-advisory'],
                        }))
                      }
                    >
                      Legal Advisory
                      <svg
                        className={`w-4 h-4 transform transition-transform ${
                          openMobileDropdowns?.['mobile-legal-advisory'] ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openMobileDropdowns?.['mobile-legal-advisory'] && (
                      <div className="pl-4 space-y-2">
                        <Link 
                          href="/form?service=business-legal-advisory" 
                          className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                          onClick={handleMobileMenuItemClick}
                        >
                          Business Legal Advisory
                        </Link>
                        <Link 
                          href="/form?service=startup-advisory" 
                          className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                          onClick={handleMobileMenuItemClick}
                        >
                          Startup Advisory
                        </Link>
                        <Link 
                          href="/form?service=compliance-advisory" 
                          className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                          onClick={handleMobileMenuItemClick}
                        >
                          Compliance Advisory
                        </Link>
                        <Link 
                          href="/form?service=regulatory-advisory" 
                          className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                          onClick={handleMobileMenuItemClick}
                        >
                          Regulatory Advisory
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link 
                    href="/form?service=business-support" 
                    className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                    onClick={handleMobileMenuItemClick}
                  >
                    Business Support
                  </Link>
                  <Link 
                    href="/form?service=investor-relations" 
                    className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                    onClick={handleMobileMenuItemClick}
                  >
                    Investor Relations
                  </Link>
                  <Link 
                    href="/form?service=faqs" 
                    className="block text-sm text-gray-600 hover:text-[#1B6B50]"
                    onClick={handleMobileMenuItemClick}
                  >
                    FAQs
                  </Link>
                </div>
              )}
            </div>

            {/* Additional Links */}
            <div className="px-4 py-2 border-t mt-2 bg-white">
              <Link 
                href="/about"
                className="block text-sm text-black hover:text-[#1B6B50] py-2"
                onClick={handleMobileMenuItemClick}
              >
                About Us
              </Link>
              <Link 
                href="/blog"
                className="block text-sm text-black hover:text-[#1B6B50] py-2"
                onClick={handleMobileMenuItemClick}
              >
                Blog
              </Link>
              <Link 
                href="/form?service=contact-us"
                className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-[#1B6B50] transition-colors"
                onClick={() => setBurgerOpen(false)}
              >
                Contact Us
              </Link>
              <button 
                onClick={() => {
                  scrollToTestimonials()
                  handleMobileMenuItemClick()
                }}
                className="block w-full text-left text-sm text-black hover:text-[#1B6B50] py-2"
              >
                Testimonials
              </button>
            </div>

            {/* Consult Expert Button */}
            <div className="px-4 py-4">
              <Link 
                href="/form?service=consult-expert"
                className="block w-full bg-[#C4942D] text-white text-center px-4 py-2 rounded hover:bg-[#b38528] transition-colors text-sm"
                onClick={handleMobileMenuItemClick}
              >
                Consult an Expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar