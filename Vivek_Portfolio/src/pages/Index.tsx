
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Showcase from '@/components/Showcase';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import AdminLogin from '@/components/AdminLogin';
import portfolioData from '@/lib/portfolioData';

const Index = () => {
  const { hero, about, projects, resume, contact } = portfolioData;

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero 
          name={hero.name}
          tagline={hero.tagline}
          profileUrl={hero.profileUrl}
          backgroundUrl={hero.backgroundUrl}
        />
        
        <About 
          title={about.title}
          description={about.description}
          imageUrl={about.imageUrl}
          skills={about.skills}
        />
        
        <Showcase projects={projects} />
        
        <Resume resumeData={resume} />
        
        <Contact 
          email={contact.email}
          phone={contact.phone}
          location={contact.location}
          socialLinks={contact.socialLinks}
        />
      </main>
      
      <footer className="bg-portfolio-navy text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Portfolio Template. All rights reserved.</p>
        </div>
      </footer>
      
      <AdminLogin />
    </div>
  );
};

export default Index;
