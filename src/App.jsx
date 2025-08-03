import React from 'react'
import HeroSection from './Components/HeroSection'
import AboutSection from './Components/AboutSection'
import ServiceSection from './Components/ServiceSection'
import SocialLinks from './Components/SocialLinks'
import ContactCard from './Components/ContactCard'
import FaqSection from './Components/FaqSection'
import OurProcess from './Components/OurProcess'
import TestimonialCarousel from './Components/Testimonial'
import WhyChooseUse from './Components/WhyChooseUs'
import OfficeLocation from './Components/OfficeLocation'

const App = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <WhyChooseUse />
      <OurProcess />
      <TestimonialCarousel />
      <SocialLinks />
      <OfficeLocation />
      <ContactCard />
      <FaqSection />
    </div>
  )
}

export default App