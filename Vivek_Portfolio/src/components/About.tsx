
import React from 'react';
import EditableText from './EditableText';
import EditableImage from './EditableImage';
import { Badge } from '@/components/ui/badge';

interface AboutProps {
  title: string;
  description: string;
  imageUrl: string;
  skills: string[];
}

const About = ({ title, description, imageUrl, skills }: AboutProps) => {
  return (
    <section id="about" className="section-container bg-white">
      <EditableText
        initialValue={title}
        as="h2"
        className="section-heading text-portfolio-navy"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <EditableImage
            initialSrc="Side.png"
            alt="About me"
            aspectRatio="portrait"
            className="rounded-lg shadow-lg max-w-md mx-auto"
          />
        </div>

        <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <EditableText
            initialValue={description}
            className="text-lg text-portfolio-gray leading-relaxed"
          />

          <div>
            <h3 className="text-xl font-semibold mb-4 text-portfolio-navy">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  className="bg-portfolio-lightGray text-portfolio-darkGray hover:bg-portfolio-teal hover:text-white font-medium py-1.5"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
