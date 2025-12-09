
import React from 'react';
import EditableText from './EditableText';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Calendar, Building, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ResumeData } from '@/lib/portfolioData';

interface ResumeProps {
  resumeData: ResumeData;
}

const Resume = ({ resumeData }: ResumeProps) => {
  return (
    <section id="resume" className="section-container bg-portfolio-lightGray">
      <EditableText
        initialValue="My Resume"
        as="h2"
        className="section-heading text-portfolio-navy"
      />
      
      <EditableText
        initialValue="My professional background and qualifications"
        className="section-subheading"
      />
      
      <div className="flex justify-end mb-6">
  <a href="/resume.pdf" download>
    <Button className="gap-2 bg-portfolio-teal hover:bg-portfolio-teal/90">
      <Download className="w-4 h-4" />
      Download Resume
    </Button>
  </a>
</div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Learning Experience */}
        <div className="space-y-6 animate-fade-in">
          <h3 className="text-xl font-bold text-portfolio-navy flex items-center gap-2">
            <Building className="w-5 h-5" /> Learning Experience
          </h3>
          
          {resumeData.experience.map((job, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <EditableText
                    initialValue={job.title}
                    as="h4"
                    className="text-lg font-semibold text-portfolio-navy"
                  />
                  <Badge className="bg-portfolio-teal text-white">
                    {job.period}
                  </Badge>
                </div>
                <EditableText
                  initialValue={job.company}
                  className="text-portfolio-darkGray mb-2 font-medium"
                />
                <EditableText
                  initialValue={job.description}
                  className="text-portfolio-gray"
                />
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Education */}
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <h3 className="text-xl font-bold text-portfolio-navy flex items-center gap-2">
            <GraduationCap className="w-5 h-5" /> Education
          </h3>
          
          {resumeData.education.map((edu, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${(index + 3) * 100}ms` }}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <EditableText
                    initialValue={edu.degree}
                    as="h4"
                    className="text-lg font-semibold text-portfolio-navy"
                  />
                  <Badge className="bg-portfolio-navy/80 text-white">
                    {edu.period}
                  </Badge>
                </div>
                <EditableText
                  initialValue={edu.institution}
                  className="text-portfolio-darkGray mb-2 font-medium"
                />
                <EditableText
                  initialValue={edu.description}
                  className="text-portfolio-gray"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Skills */}
      <div className="mt-12 animate-fade-in" style={{ animationDelay: "400ms" }}>
        <h3 className="text-xl font-bold text-portfolio-navy mb-6">Key Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {resumeData.skills.map((skill, index) => (
            <Card key={index} className="bg-white shadow border-l-4 border-portfolio-teal animate-fade-in" style={{ animationDelay: `${(index + 6) * 50}ms` }}>
              <CardContent className="p-4 flex items-center">
                <EditableText
                  initialValue={skill}
                  className="font-medium"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
