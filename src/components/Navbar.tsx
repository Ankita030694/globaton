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

  // Function to handle form link clicks - closes all dropdowns
  const handleFormLinkClick = () => {
    setActiveDropdown(null)
    setActiveSubmenu(null)
    setBurgerOpen(false)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="w-full flex items-center justify-between px-4 lg:px-10 bg-white z-10 relative py-2 shadow-lg">
      {/* Left Container - Logo */}
      <div className="flex items-center flex-shrink-0">
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

      {/* Middle Container - Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-8 flex-grow justify-center">
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
                  href="/form?service=company-registration"
                  className="block px-6 py-2.5 hover:bg-gray-100 hover:text-[#1B6B50] text-black flex items-center justify-between text-xs"
                  onClick={handleFormLinkClick}
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
                      <Link href="/form?service=nidhi-company" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>
                        Nidhi Company
                      </Link>
                      <Link href="/form?service=producer-company" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>
                        Producer Company
                      </Link>
                      <Link 
                        href="/services/partnership" 
                        className="block hover:text-[#1B6B50] text-black text-xs"
                      >
                        Partnership Firm
                      </Link>
                      <Link href="/form?service=startup-india" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>
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
                        <Link href="/form?service=book-appointment" className="text-[#00D2AA] hover:underline" onClick={handleFormLinkClick}>
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
                onClick={handleFormLinkClick}
              >
                Change Company Name
              </Link>

              <Link
                href="/form?service=insolvency-liquidation"
                className="block px-6 py-2.5 hover:bg-gray-100 text-black text-xs"
                onClick={handleFormLinkClick}
              >
                Insolvency & Liquidation
              </Link>

              <Link
                href="/form?service=valuation-of-business"
                className="block px-6 py-2.5 hover:bg-gray-100 text-black text-xs"
                onClick={handleFormLinkClick}
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
                  onClick={handleFormLinkClick}
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
                      <Link href="/form?service=dsc" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>DSC</Link>
                      <Link href="/form?service=udyam-registration" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>Udyam Registration</Link>
                      <Link href="/form?service=msme-registration" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>MSME Registration</Link>
                      <Link href="/form?service=iso-certification" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>ISO Certification</Link>
                      <Link href="/form?service=fssai-license" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>FSSAI (Food License)</Link>
                      <Link href="/form?service=iec-code" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>IEC (Import/Export Code)</Link>
                      <Link href="/form?service=apeda-rcme" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>Apeda RCME</Link>
                      <Link href="/form?service=spice-board" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>Spice Board Registration</Link>
                      <Link href="/form?service=fieo-registration" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>FIEO Registration</Link>
                      <Link href="/form?service=legal-metrology" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>Legal Metrology</Link>
                      <Link href="/form?service=hallmark-registration" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>Hallmark Registration</Link>
                      <Link href="/form?service=bis-registration" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>BIS Registration</Link>
                      <Link href="/form?service=liquor-license" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>Liquor License</Link>
                      <Link href="/form?service=clra-registration" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>CLRA Registration & Licensing</Link>
                      <Link href="/form?service=ad-code-registration" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>AD Code Registration</Link>
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
                        <Link href="/form?service=book-appointment" className="text-[#00D2AA] hover:underline" onClick={handleFormLinkClick}>
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
            <button className="flex items-center hover:text-[#1B6B50] transition-colors py-1 text-black text-sm">
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
                        <Link href="/form?service=book-appointment" className="text-[#00D2AA] hover:underline" onClick={handleFormLinkClick}>
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
                      onClick={handleFormLinkClick}
                    >
                      ITR Filing
                    </Link>
                    <Link 
                      href="/form?service=itr-notice" 
                      className="block hover:text-[#1B6B50] text-black text-xs"
                      onClick={handleFormLinkClick}
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
                      <Link href="/form?service=book-appointment" className="text-[#00D2AA] hover:underline" onClick={handleFormLinkClick}>
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
                      className="block w-full text-left py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
                    >
                      LLP Annual Compliance
                    </button>
                    <button 
                      onClick={() => {
                        scrollToPVTLTDAnnualCompliance()
                        handleMobileMenuItemClick()
                      }}
                      className="block w-full text-left py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
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
                      <Link href="/form?service=book-appointment" className="text-[#00D2AA] hover:underline" onClick={handleFormLinkClick}>
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
          <button className="flex items-center hover:text-[#1B6B50] transition-colors py-1 text-black text-sm">
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
                        <Link href="/form?service=book-appointment" className="text-[#00D2AA] hover:underline" onClick={handleFormLinkClick}>
                          Book an appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Link href="/form?service=copyright-registration" className="block px-6 py-2.5 hover:bg-gray-100 text-black text-xs" onClick={handleFormLinkClick}>
              Copyright Registration
            </Link>
            <Link href="/form?service=patent-filing" className="block px-6 py-2.5 hover:bg-gray-100 text-black text-xs" onClick={handleFormLinkClick}>
              Patent Filing
            </Link>
            <Link href="/form?service=design-registration" className="block px-6 py-2.5 hover:bg-gray-100 text-black text-xs" onClick={handleFormLinkClick}>
              Design Registration
            </Link>
          </div>
        </div>

        <div
          className="relative group"
          onMouseEnter={() => handleDropdownAreaEnter("documentation")}
          onMouseLeave={() => handleDropdownAreaLeave()}
        >
            <button className="flex items-center hover:text-[#1B6B50] transition-colors py-1 text-black text-sm">
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
                  onClick={handleFormLinkClick}
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
                      <Link href="/form?service=employment-agreement" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>Employment Agreement</Link>
                      <Link href="/form?service=consulting-agreement" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>Consulting Agreement</Link>
                      <Link href="/form?service=partnership-agreement" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>Partnership Agreement</Link>
                      <Link href="/form?service=vendor-agreement" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>Vendor Agreement</Link>
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
                        <Link href="/form?service=book-appointment" className="text-[#00D2AA] hover:underline" onClick={handleFormLinkClick}>
                          Book an appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Link href="/form?service=moa-aoa" className="block px-6 py-2.5 hover:bg-gray-100 text-black text-xs" onClick={handleFormLinkClick}>
              MOA & AOA
            </Link>
            <Link href="/form?service=business-contracts" className="block px-6 py-2.5 hover:bg-gray-100 text-black text-xs" onClick={handleFormLinkClick}>
              Business Contracts
            </Link>
            <Link href="/form?service=nda-agreements" className="block px-6 py-2.5 hover:bg-gray-100 text-black text-xs" onClick={handleFormLinkClick}>
              NDA Agreements
            </Link>
          </div>
        </div>

        <div
          className="relative group"
          onMouseEnter={() => handleDropdownAreaEnter("others")}
          onMouseLeave={() => handleDropdownAreaLeave()}
        >
          <button className="flex items-center hover:text-[#1B6B50] transition-colors py-1 text-black text-sm">
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
                  onClick={handleFormLinkClick}
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
                      <Link href="/form?service=business-legal-advisory" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>Business Legal Advisory</Link>
                      <Link href="/form?service=startup-advisory" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>Startup Advisory</Link>
                      <Link href="/form?service=compliance-advisory" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>Compliance Advisory</Link>
                      <Link href="/form?service=regulatory-advisory" className="block hover:text-[#1B6B50] text-black text-xs" onClick={handleFormLinkClick}>Regulatory Advisory</Link>
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
                        <Link href="/form?service=book-appointment" className="text-[#00D2AA] hover:underline" onClick={handleFormLinkClick}>
                          Book an appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Link href="/form?service=business-support" className="block px-6 py-2.5 hover:bg-gray-100 text-black text-xs" onClick={handleFormLinkClick}>
              Business Support
            </Link>
            <Link href="/form?service=investor-relations" className="block px-6 py-2.5 hover:bg-gray-100 text-black text-xs" onClick={handleFormLinkClick}>
              Investor Relations
            </Link>
            <Link href="/form?service=faqs" className="block px-6 py-2.5 hover:bg-gray-100 text-black text-xs" onClick={handleFormLinkClick}>
              FAQs
            </Link>
          </div>
        </div>
      </div>

      {/* Right Container - Consult Expert & Burger Menu */}
      <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
        <Link 
          href="/form?service=consult-expert"
          className="bg-[#C4942D] text-white px-4 py-2 rounded hover:bg-[#b38528] transition-colors text-xs"
          onClick={handleFormLinkClick}
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
                onClick={() => {
                  setBurgerOpen(false)
                  handleFormLinkClick()
                }}
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
        className={`fixed top-0 right-0 h-full w-full bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header with Close Button and Logo */}
        <div className="p-6 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image 
                src="/globatonlogo.png" 
                alt="Globaton Logo" 
                width={120} 
                height={60} 
                className="w-[120px] h-[60px] object-cover" 
                priority 
              />
            </div>
            <button 
              onClick={toggleMobileMenu}
              className="p-3 hover:bg-gray-100 rounded-full transition-all duration-200 hover:rotate-90"
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
                className="text-gray-600"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100%-140px)] bg-gradient-to-b from-transparent to-gray-50/50">
          {/* Mobile Menu Items */}
          <div className="py-4">
            {/* Business Setup */}
            <div className="mb-2">
              <button 
                className="flex items-center justify-between w-full text-left px-6 py-4 text-lg font-semibold text-gray-800 hover:bg-white/60 transition-all duration-200 border-l-4 border-transparent hover:border-[#1B6B50]"
                onClick={() =>
                  setOpenMobileDropdowns((prev: any) => ({
                    ...prev,
                    'mobile-business': !prev['mobile-business'],
                  }))
                }
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#1B6B50] to-[#2d8a5f] rounded-lg flex items-center justify-center mr-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    </svg>
                  </div>
                  Business Setup
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 text-gray-500 ${
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
                <div className="bg-white/40 backdrop-blur-sm border-l-4 border-[#1B6B50] ml-4 mr-2 rounded-r-lg shadow-sm">
                  <div className="py-3 px-4 space-y-1">
                    {/* Company Registration Submenu */}
                    <div className="space-y-1">
                      <button
                        className="flex items-center justify-between w-full text-left py-3 px-3 text-gray-700 hover:bg-white/60 rounded-lg transition-all duration-200 font-medium"
                        onClick={() =>
                          setOpenMobileDropdowns((prev: any) => ({
                            ...prev,
                            'mobile-company-registration': !prev['mobile-company-registration'],
                          }))
                        }
                      >
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-md flex items-center justify-center mr-2">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                              <polyline points="14,2 14,8 20,8"></polyline>
                            </svg>
                          </div>
                          Company Registration
                        </div>
                        <svg
                          className={`w-4 h-4 transform transition-transform duration-200 ${
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
                        <div className="bg-white/60 rounded-lg p-3 ml-4 space-y-2">
                          <Link 
                            href="/services/pvltd" 
                            className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
                            onClick={() => {
                              handleMobileMenuItemClick()
                              handleFormLinkClick()
                            }}
                          >
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>
                            PVT Ltd Company
                          </Link>
                          <Link 
                            href="/services/llp" 
                            className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
                            onClick={() => {
                              handleMobileMenuItemClick()
                              handleFormLinkClick()
                            }}
                          >
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>
                            LLP
                          </Link>
                          <Link 
                            href="/services/opc" 
                            className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
                            onClick={() => {
                              handleMobileMenuItemClick()
                              handleFormLinkClick()
                            }}
                          >
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>
                            OPC
                          </Link>
                          <Link 
                            href="/services/soleprop" 
                            className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
                            onClick={() => {
                              handleMobileMenuItemClick()
                              handleFormLinkClick()
                            }}
                          >
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>
                            Sole Proprietorship
                          </Link>
                          <Link 
                            href="/form?service=nidhi-company" 
                            className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
                            onClick={() => {
                              handleMobileMenuItemClick()
                              handleFormLinkClick()
                            }}
                          >
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>
                            Nidhi Company
                          </Link>
                          <Link 
                            href="/form?service=producer-company" 
                            className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
                            onClick={() => {
                              handleMobileMenuItemClick()
                              handleFormLinkClick()
                            }}
                          >
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>
                            Producer Company
                          </Link>
                          <Link 
                            href="/services/partnership" 
                            className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
                            onClick={() => {
                              handleMobileMenuItemClick()
                              handleFormLinkClick()
                            }}
                          >
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>
                            Partnership Firm
                          </Link>
                          <Link 
                            href="/form?service=startup-india" 
                            className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
                            onClick={() => {
                              handleMobileMenuItemClick()
                              handleFormLinkClick()
                            }}
                          >
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>
                            Start-Up India Registration
                          </Link>
                        </div>
                      )}
                    </div>
                    <Link 
                      href="/form?service=change-company-name" 
                      className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/60 rounded-md transition-all duration-200"
                      onClick={() => {
                        handleMobileMenuItemClick()
                        handleFormLinkClick()
                      }}
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      Change Company Name
                    </Link>
                    <Link 
                      href="/form?service=insolvency-liquidation" 
                      className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/60 rounded-md transition-all duration-200"
                      onClick={() => {
                        handleMobileMenuItemClick()
                        handleFormLinkClick()
                      }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      Insolvency & Liquidation
                    </Link>
                    <Link 
                      href="/form?service=valuation-of-business" 
                      className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/60 rounded-md transition-all duration-200"
                      onClick={() => {
                        handleMobileMenuItemClick()
                        handleFormLinkClick()
                      }}
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      Valuation of Business
                    </Link>
                    {/* Licenses & Registration Submenu */}
                    <div className="space-y-1">
                      <button
                        className="flex items-center justify-between w-full text-left py-3 px-3 text-gray-700 hover:bg-white/60 rounded-lg transition-all duration-200 font-medium"
                        onClick={() =>
                          setOpenMobileDropdowns((prev: any) => ({
                            ...prev,
                            'mobile-licenses-registration': !prev['mobile-licenses-registration'],
                          }))
                        }
                      >
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-md flex items-center justify-center mr-2">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                              <polyline points="14,2 14,8 20,8"></polyline>
                              <line x1="16" y1="13" x2="8" y2="13"></line>
                              <line x1="16" y1="17" x2="8" y2="17"></line>
                              <polyline points="10,9 9,9 8,9"></polyline>
                            </svg>
                          </div>
                          Licenses & Registration
                        </div>
                        <svg
                          className={`w-4 h-4 transform transition-transform duration-200 ${
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
                        <div className="bg-white/60 rounded-lg p-3 ml-4 space-y-2 max-h-60 overflow-y-auto">
                          <Link href="/form?service=dsc" className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200" onClick={() => {
                            handleMobileMenuItemClick()
                            handleFormLinkClick()
                          }}>
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>DSC
                          </Link>
                          <Link href="/form?service=udyam-registration" className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200" onClick={() => {
                            handleMobileMenuItemClick()
                            handleFormLinkClick()
                          }}>
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>Udyam Registration
                          </Link>
                          <Link href="/form?service=msme-registration" className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200" onClick={() => {
                            handleMobileMenuItemClick()
                            handleFormLinkClick()
                          }}>
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>MSME Registration
                          </Link>
                          <Link href="/form?service=iso-certification" className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200" onClick={() => {
                            handleMobileMenuItemClick()
                            handleFormLinkClick()
                          }}>
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>ISO Certification
                          </Link>
                          <Link href="/form?service=fssai-license" className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200" onClick={() => {
                            handleMobileMenuItemClick()
                            handleFormLinkClick()
                          }}>
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>FSSAI (Food License)
                          </Link>
                          <Link href="/form?service=iec-code" className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200" onClick={() => {
                            handleMobileMenuItemClick()
                            handleFormLinkClick()
                          }}>
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>IEC (Import/Export Code)
                          </Link>
                          <Link href="/form?service=apeda-rcme" className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200" onClick={() => {
                            handleMobileMenuItemClick()
                            handleFormLinkClick()
                          }}>
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>Apeda RCME
                          </Link>
                          <Link href="/form?service=spice-board" className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200" onClick={() => {
                            handleMobileMenuItemClick()
                            handleFormLinkClick()
                          }}>
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>Spice Board Registration
                          </Link>
                          <Link href="/form?service=fieo-registration" className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200" onClick={() => {
                            handleMobileMenuItemClick()
                            handleFormLinkClick()
                          }}>
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>FIEO Registration
                          </Link>
                          <Link href="/form?service=legal-metrology" className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200" onClick={() => {
                            handleMobileMenuItemClick()
                            handleFormLinkClick()
                          }}>
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>Legal Metrology
                          </Link>
                          <Link href="/form?service=hallmark-registration" className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200" onClick={() => {
                            handleMobileMenuItemClick()
                            handleFormLinkClick()
                          }}>
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>Hallmark Registration
                          </Link>
                          <Link href="/form?service=bis-registration" className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200" onClick={() => {
                            handleMobileMenuItemClick()
                            handleFormLinkClick()
                          }}>
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>BIS Registration
                          </Link>
                          <Link href="/form?service=liquor-license" className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200" onClick={() => {
                            handleMobileMenuItemClick()
                            handleFormLinkClick()
                          }}>
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>Liquor License
                          </Link>
                          <Link href="/form?service=clra-registration" className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200" onClick={() => {
                            handleMobileMenuItemClick()
                            handleFormLinkClick()
                          }}>
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>CLRA Registration & Licensing
                          </Link>
                          <Link href="/form?service=ad-code-registration" className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200" onClick={() => {
                            handleMobileMenuItemClick()
                            handleFormLinkClick()
                          }}>
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>AD Code Registration
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Tax & Compliance */}
            <div className="mb-2">
              <button 
                className="flex items-center justify-between w-full text-left px-6 py-4 text-lg font-semibold text-gray-800 hover:bg-white/60 transition-all duration-200 border-l-4 border-transparent hover:border-[#C4942D]"
                onClick={() =>
                  setOpenMobileDropdowns((prev: any) => ({
                    ...prev,
                    'mobile-tax': !prev['mobile-tax'],
                  }))
                }
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#C4942D] to-[#d4a03d] rounded-lg flex items-center justify-center mr-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14,2 14,8 20,8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10,9 9,9 8,9"></polyline>
                    </svg>
                  </div>
                  Tax & Compliance
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 text-gray-500 ${
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
                <div className="bg-white/40 backdrop-blur-sm border-l-4 border-[#C4942D] ml-4 mr-2 rounded-r-lg shadow-sm">
                  <div className="py-3 px-4 space-y-1">
                    {/* GST Submenu */}
                    <div className="space-y-1">
                      <button
                        className="flex items-center justify-between w-full text-left py-3 px-3 text-gray-700 hover:bg-white/60 rounded-lg transition-all duration-200 font-medium"
                        onClick={() =>
                          setOpenMobileDropdowns((prev: any) => ({
                            ...prev,
                            'mobile-gst': !prev['mobile-gst'],
                          }))
                        }
                      >
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-md flex items-center justify-center mr-2">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                              <circle cx="12" cy="12" r="3"></circle>
                              <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"></path>
                            </svg>
                          </div>
                          GST
                        </div>
                        <svg
                          className={`w-4 h-4 transform transition-transform duration-200 ${
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
                        <div className="bg-white/60 rounded-lg p-3 ml-4 space-y-2">
                          <Link 
                            href="/services/gst" 
                            className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
                            onClick={() => {
                              handleMobileMenuItemClick()
                              handleFormLinkClick()
                            }}
                          >
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>
                            GST Registration
                          </Link>
                          <Link 
                            href="/services/gstfiling" 
                            className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
                            onClick={() => {
                              handleMobileMenuItemClick()
                              handleFormLinkClick()
                            }}
                          >
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>
                            GST Filing
                          </Link>
                          <Link 
                            href="/services/gstnotice" 
                            className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
                            onClick={() => {
                              handleMobileMenuItemClick()
                              handleFormLinkClick()
                            }}
                          >
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>
                            GST Notice
                          </Link>
                        </div>
                      )}
                    </div>
                    {/* Accounting & Tax Submenu */}
                    <div className="space-y-1">
                      <button
                        className="flex items-center justify-between w-full text-left py-3 px-3 text-gray-700 hover:bg-white/60 rounded-lg transition-all duration-200 font-medium"
                        onClick={() =>
                          setOpenMobileDropdowns((prev: any) => ({
                            ...prev,
                            'mobile-accounting-tax': !prev['mobile-accounting-tax'],
                          }))
                        }
                      >
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-md flex items-center justify-center mr-2">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                          </div>
                          Accounting & Tax
                        </div>
                        <svg
                          className={`w-4 h-4 transform transition-transform duration-200 ${
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
                        <div className="bg-white/60 rounded-lg p-3 ml-4 space-y-2">
                          <Link 
                            href="/services/accounting-&-bookkeeping" 
                            className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
                            onClick={() => {
                              handleMobileMenuItemClick()
                              handleFormLinkClick()
                            }}
                          >
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>
                            Accounting & Bookkeeping
                          </Link>
                          <Link 
                            href="/form?service=itr-filing" 
                            className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
                            onClick={() => {
                              handleMobileMenuItemClick()
                              handleFormLinkClick()
                            }}
                          >
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>
                            ITR Filing
                          </Link>
                          <Link 
                            href="/form?service=itr-notice" 
                            className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
                            onClick={() => {
                              handleMobileMenuItemClick()
                              handleFormLinkClick()
                            }}
                          >
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>
                            ITR Notice Reply
                          </Link>
                        </div>
                      )}
                    </div>
                    {/* Annual Compliance Submenu */}
                    <div className="space-y-1">
                      <button 
                        className="flex items-center justify-between w-full text-left py-3 px-3 text-gray-700 hover:bg-white/60 rounded-lg transition-all duration-200 font-medium"
                        onClick={() =>
                          setOpenMobileDropdowns((prev: any) => ({
                            ...prev,
                            'mobile-annual-compliance': !prev['mobile-annual-compliance'],
                          }))
                        }
                      >
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-md flex items-center justify-center mr-2">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                              <line x1="16" y1="2" x2="16" y2="6"></line>
                              <line x1="8" y1="2" x2="8" y2="6"></line>
                              <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                          </div>
                          Annual Compliance
                        </div>
                        <svg
                          className={`w-4 h-4 transform transition-transform duration-200 ${
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
                        <div className="bg-white/60 rounded-lg p-3 ml-4 space-y-2">
                          <button 
                            onClick={() => {
                              scrollToLLPAnnualCompliance()
                              handleMobileMenuItemClick()
                            }}
                            className="flex items-center w-full text-left py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
                          >
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>
                            LLP Annual Compliance
                          </button>
                          <button 
                            onClick={() => {
                              scrollToPVTLTDAnnualCompliance()
                              handleMobileMenuItemClick()
                            }}
                            className="flex items-center w-full text-left py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
                          >
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>
                            PVT LTD Annual Compliance
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Trademark & IP */}
            <div className="mb-2">
              <button 
                className="flex items-center justify-between w-full text-left px-6 py-4 text-lg font-semibold text-gray-800 hover:bg-white/60 transition-all duration-200 border-l-4 border-transparent hover:border-indigo-500"
                onClick={() =>
                  setOpenMobileDropdowns((prev: any) => ({
                    ...prev,
                    'mobile-trademark': !prev['mobile-trademark'],
                  }))
                }
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  Trademark & IP
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 text-gray-500 ${
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
                <div className="bg-white/40 backdrop-blur-sm border-l-4 border-indigo-500 ml-4 mr-2 rounded-r-lg shadow-sm">
                  <div className="py-3 px-4 space-y-1">
                    {/* Trademark Registration Submenu */}
                    <div className="space-y-1">
                      <button
                        className="flex items-center justify-between w-full text-left py-3 px-3 text-gray-700 hover:bg-white/60 rounded-lg transition-all duration-200 font-medium"
                        onClick={() =>
                          setOpenMobileDropdowns((prev: any) => ({
                            ...prev,
                            'mobile-trademark-registration': !prev['mobile-trademark-registration'],
                          }))
                        }
                      >
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-pink-600 rounded-md flex items-center justify-center mr-2">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          </div>
                          Trademark Registration
                        </div>
                        <svg
                          className={`w-4 h-4 transform transition-transform duration-200 ${
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
                      className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/60 rounded-md transition-all duration-200"
                      onClick={() => {
                        handleMobileMenuItemClick()
                        handleFormLinkClick()
                      }}
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Copyright Registration
                    </Link>
                    <Link 
                      href="/form?service=patent-filing" 
                      className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/60 rounded-md transition-all duration-200"
                      onClick={() => {
                        handleMobileMenuItemClick()
                        handleFormLinkClick()
                      }}
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      Patent Filing
                    </Link>
                    <Link 
                      href="/form?service=design-registration" 
                      className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/60 rounded-md transition-all duration-200"
                      onClick={() => {
                        handleMobileMenuItemClick()
                        handleFormLinkClick()
                      }}
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      Design Registration
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Documentation */}
            <div className="mb-2">
              <button 
                className="flex items-center justify-between w-full text-left px-6 py-4 text-lg font-semibold text-gray-800 hover:bg-white/60 transition-all duration-200 border-l-4 border-transparent hover:border-teal-500"
                onClick={() =>
                  setOpenMobileDropdowns((prev: any) => ({
                    ...prev,
                    'mobile-documentation': !prev['mobile-documentation'],
                  }))
                }
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14,2 14,8 20,8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10,9 9,9 8,9"></polyline>
                    </svg>
                  </div>
                  Documentation
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 text-gray-500 ${
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
                <div className="bg-white/40 backdrop-blur-sm border-l-4 border-teal-500 ml-4 mr-2 rounded-r-lg shadow-sm">
                  <div className="py-3 px-4 space-y-1">
                    {/* Legal Agreements Submenu */}
                    <div className="space-y-1">
                      <button
                        className="flex items-center justify-between w-full text-left py-3 px-3 text-gray-700 hover:bg-white/60 rounded-lg transition-all duration-200 font-medium"
                        onClick={() =>
                          setOpenMobileDropdowns((prev: any) => ({
                            ...prev,
                            'mobile-legal-agreements': !prev['mobile-legal-agreements'],
                          }))
                        }
                      >
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-md flex items-center justify-center mr-2">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                              <polyline points="14,2 14,8 20,8"></polyline>
                              <line x1="16" y1="13" x2="8" y2="13"></line>
                              <line x1="16" y1="17" x2="8" y2="17"></line>
                              <polyline points="10,9 9,9 8,9"></polyline>
                            </svg>
                          </div>
                          Legal Agreements
                        </div>
                        <svg
                          className={`w-4 h-4 transform transition-transform duration-200 ${
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
                        <div className="bg-white/60 rounded-lg p-3 ml-4 space-y-2">
                          <Link 
                            href="/form" 
                            className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
                            onClick={() => {
                              handleMobileMenuItemClick()
                              handleFormLinkClick()
                            }}
                          >
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>
                            Employment Agreement
                          </Link>
                          <Link 
                            href="/form" 
                            className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
                            onClick={() => {
                              handleMobileMenuItemClick()
                              handleFormLinkClick()
                            }}
                          >
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>
                            Consulting Agreement
                          </Link>
                          <Link 
                            href="/form?service=partnership-agreement" 
                            className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
                            onClick={() => {
                              handleMobileMenuItemClick()
                              handleFormLinkClick()
                            }}
                          >
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>
                            Partnership Agreement
                          </Link>
                          <Link 
                            href="/form?service=vendor-agreement" 
                            className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
                            onClick={() => {
                              handleMobileMenuItemClick()
                              handleFormLinkClick()
                            }}
                          >
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>
                            Vendor Agreement
                          </Link>
                        </div>
                      )}
                    </div>
                    <Link 
                      href="/form?service=moa-aoa" 
                      className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/60 rounded-md transition-all duration-200"
                      onClick={() => {
                        handleMobileMenuItemClick()
                        handleFormLinkClick()
                      }}
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      MOA & AOA
                    </Link>
                    <Link 
                      href="/form?service=business-contracts" 
                      className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/60 rounded-md transition-all duration-200"
                      onClick={() => {
                        handleMobileMenuItemClick()
                        handleFormLinkClick()
                      }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Business Contracts
                    </Link>
                    <Link 
                      href="/form?service=nda-agreements" 
                      className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/60 rounded-md transition-all duration-200"
                      onClick={() => {
                        handleMobileMenuItemClick()
                        handleFormLinkClick()
                      }}
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      NDA Agreements
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Others */}
            <div className="mb-2">
              <button 
                className="flex items-center justify-between w-full text-left px-6 py-4 text-lg font-semibold text-gray-800 hover:bg-white/60 transition-all duration-200 border-l-4 border-transparent hover:border-amber-500"
                onClick={() =>
                  setOpenMobileDropdowns((prev: any) => ({
                    ...prev,
                    'mobile-others': !prev['mobile-others'],
                  }))
                }
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mr-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"></path>
                    </svg>
                  </div>
                  Others
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 text-gray-500 ${
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
                <div className="bg-white/40 backdrop-blur-sm border-l-4 border-amber-500 ml-4 mr-2 rounded-r-lg shadow-sm">
                  <div className="py-3 px-4 space-y-1">
                    {/* Legal Advisory Submenu */}
                    <div className="space-y-1">
                      <button
                        className="flex items-center justify-between w-full text-left py-3 px-3 text-gray-700 hover:bg-white/60 rounded-lg transition-all duration-200 font-medium"
                        onClick={() =>
                          setOpenMobileDropdowns((prev: any) => ({
                            ...prev,
                            'mobile-legal-advisory': !prev['mobile-legal-advisory'],
                          }))
                        }
                      >
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-md flex items-center justify-center mr-2">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                              <path d="M9 11H1v3h8v3l8-5-8-5v3z"></path>
                            </svg>
                          </div>
                          Legal Advisory
                        </div>
                        <svg
                          className={`w-4 h-4 transform transition-transform duration-200 ${
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
                        <div className="bg-white/60 rounded-lg p-3 ml-4 space-y-2">
                          <Link 
                            href="/form?service=business-legal-advisory" 
                            className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
                            onClick={() => {
                              handleMobileMenuItemClick()
                              handleFormLinkClick()
                            }}
                          >
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>
                            Business Legal Advisory
                          </Link>
                          <Link 
                            href="/form?service=startup-advisory" 
                            className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
                            onClick={() => {
                              handleMobileMenuItemClick()
                              handleFormLinkClick()
                            }}
                          >
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>
                            Startup Advisory
                          </Link>
                          <Link 
                            href="/form?service=compliance-advisory" 
                            className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
                            onClick={() => {
                              handleMobileMenuItemClick()
                              handleFormLinkClick()
                            }}
                          >
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>
                            Compliance Advisory
                          </Link>
                          <Link 
                            href="/form?service=regulatory-advisory" 
                            className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/80 rounded-md transition-all duration-200"
                            onClick={() => {
                              handleMobileMenuItemClick()
                              handleFormLinkClick()
                            }}
                          >
                            <div className="w-2 h-2 bg-[#1B6B50] rounded-full mr-3"></div>
                            Regulatory Advisory
                          </Link>
                        </div>
                      )}
                    </div>
                    <Link 
                      href="/form?service=business-support" 
                      className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/60 rounded-md transition-all duration-200"
                      onClick={() => {
                        handleMobileMenuItemClick()
                        handleFormLinkClick()
                      }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Business Support
                    </Link>
                    <Link 
                      href="/form?service=investor-relations" 
                      className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/60 rounded-md transition-all duration-200"
                      onClick={() => {
                        handleMobileMenuItemClick()
                        handleFormLinkClick()
                      }}
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Investor Relations
                    </Link>
                    <Link 
                      href="/form?service=faqs" 
                      className="flex items-center py-2 px-3 text-gray-600 hover:text-[#1B6B50] hover:bg-white/60 rounded-md transition-all duration-200"
                      onClick={() => {
                        handleMobileMenuItemClick()
                        handleFormLinkClick()
                      }}
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      FAQs
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Additional Links Section */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="px-4 space-y-1">
                <h3 className="px-2 text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Quick Links</h3>
                <Link 
                  href="/about"
                  className="flex items-center py-3 px-4 text-gray-700 hover:text-[#1B6B50] hover:bg-white/60 rounded-lg transition-all duration-200"
                  onClick={() => {
                    handleMobileMenuItemClick()
                    handleFormLinkClick()
                  }}
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-gray-400 to-gray-500 rounded-md flex items-center justify-center mr-3">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  About Us
                </Link>
                <Link 
                  href="/blog"
                  className="flex items-center py-3 px-4 text-gray-700 hover:text-[#1B6B50] hover:bg-white/60 rounded-lg transition-all duration-200"
                  onClick={() => {
                    handleMobileMenuItemClick()
                    handleFormLinkClick()
                  }}
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-500 rounded-md flex items-center justify-center mr-3">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                  Blog
                </Link>
                <Link 
                  href="/form?service=contact-us"
                  className="flex items-center py-3 px-4 text-gray-700 hover:text-[#1B6B50] hover:bg-white/60 rounded-lg transition-all duration-200"
                  onClick={() => {
                    handleMobileMenuItemClick()
                    handleFormLinkClick()
                  }}
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-md flex items-center justify-center mr-3">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  Contact Us
                </Link>
                <button 
                  onClick={() => {
                    scrollToTestimonials()
                    handleMobileMenuItemClick()
                  }}
                  className="flex items-center w-full text-left py-3 px-4 text-gray-700 hover:text-[#1B6B50] hover:bg-white/60 rounded-lg transition-all duration-200"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-md flex items-center justify-center mr-3">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  Testimonials
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent">
          <Link 
            href="/form?service=consult-expert"
            className="block w-full bg-gradient-to-r from-[#C4942D] to-[#d4a03d] text-white text-center px-6 py-4 rounded-xl hover:from-[#b38528] hover:to-[#c4942d] transition-all duration-200 text-lg font-semibold shadow-lg transform hover:scale-105"
            onClick={() => {
              handleMobileMenuItemClick()
              handleFormLinkClick()
            }}
          >
            <div className="flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              Consult an Expert
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar