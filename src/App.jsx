import { useEffect, useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import SocialLinks from './components/SocialLinks'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import ContactSection from './components/ContactSection'
import SkillSection from './components/SkillSection'
import ProjectSection from './components/ProjectSection'




const App = () => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  useEffect(() => {
    if (!window.Shery) return;

    window.Shery.mouseFollower({
      skew: true,
      duration: 0.6,
      ease: "cubic-bezier(0.23, 1, 0.32, 1)",
    });
  }, []);


  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <SocialLinks />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ExperienceSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <Footer scrollToSection={scrollToSection} />

     
    </div>
  );
};



export default App
