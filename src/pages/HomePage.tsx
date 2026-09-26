import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { StatsRow } from '../components/StatsRow';
import { ServicesSection } from '../components/ServicesSection';
import { WorkSection } from '../components/WorkSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ProcessSection } from '../components/ProcessSection';
import { TeamSection } from '../components/TeamSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CtaBanner } from '../components/CtaBanner';
import { ContactModal } from '../components/ContactModal';
import { ProjectModal } from '../components/ProjectModal';
import type { ProjectItem } from '../types';

export const HomePage: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('web-dev');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleStartProject = (serviceId = 'web-dev') => {
    setSelectedService(serviceId);
    setIsContactOpen(true);
  };

  const handleViewWork = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full overflow-hidden">
      {/* 1. Hero Section */}
      <Hero
        onStartProject={() => handleStartProject('web-dev')}
        onViewWork={handleViewWork}
      />

      {/* 2. Key Stats Row */}
      <StatsRow />

      {/* 3. Services Section ("End-to-end Solutions For A Digital World") */}
      <ServicesSection
        onSelectService={(serviceId) => handleStartProject(serviceId)}
      />

      {/* 4. Portfolio Section ("Projects That Make An Impact.") */}
      <WorkSection
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* 5. Value Proposition ("We Don't Just Build. We Solve.") */}
      <WhyChooseUs />

      {/* 6. Development Lifecycle ("From Idea To Impact.") */}
      <ProcessSection />

      {/* 7. Team Showcase ("The Experts Behind ElevOne.") */}
      <TeamSection />

      {/* 8. Client Testimonials ("What Our Clients Say") */}
      <TestimonialsSection />

      {/* 9. Full-width Call to Action ("Let's Build The Future Together.") */}
      <CtaBanner
        onStartProject={() => handleStartProject('software-dev')}
        onWatchVideo={handleViewWork}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultService={selectedService}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartSimilar={() => {
          setSelectedProject(null);
          setIsContactOpen(true);
        }}
      />
    </main>
  );
};
