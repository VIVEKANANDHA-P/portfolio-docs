
import React from 'react';
import ProjectCard from './ProjectCard';
import EditableText from './EditableText';
import { Project } from '@/lib/portfolioData';

interface ShowcaseProps {
  projects: Project[];
}

const Showcase = ({ projects }: ShowcaseProps) => {
  return (
    <section id="projects" className="section-container bg-portfolio-lightGray">
      <EditableText
        initialValue="My Projects"
        as="h2"
        className="section-heading text-portfolio-navy"
      />
      
      <EditableText
        initialValue="A showcase of my recent work across Cloud Computing and DevOps"
        className="section-subheading"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            category={project.category}
            link={project.link}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
};

export default Showcase;
