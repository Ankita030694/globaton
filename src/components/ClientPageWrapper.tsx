'use client';

import { useEffect, ReactNode } from 'react';

interface ClientPageWrapperProps {
  children: ReactNode;
}

const ClientPageWrapper: React.FC<ClientPageWrapperProps> = ({ children }) => {
  useEffect(() => {
    // Check if URL has #testimonials hash
    if (window.location.hash === '#testimonials') {
      // Small delay to ensure components are rendered
      setTimeout(() => {
        const testimonials = document.getElementById('testimonials')
        if (testimonials) {
          testimonials.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  return <>{children}</>;
};

export default ClientPageWrapper; 