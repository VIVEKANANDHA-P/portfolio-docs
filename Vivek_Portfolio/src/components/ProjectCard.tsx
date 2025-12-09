
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import EditableText from './EditableText';
import EditableImage from './EditableImage';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  link: string;
  delay?: number;
}

const ProjectCard = ({ 
  id, 
  title, 
  description, 
  imageUrl, 
  category, 
  link,
  delay = 0
}: ProjectCardProps) => {
  return (
    <Card className={cn(
      "overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in",
    )}
    style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden">
        <EditableImage
          initialSrc={imageUrl}
          alt={title}
          aspectRatio="video"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-portfolio-teal text-white hover:bg-portfolio-teal/90">
            {category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <EditableText
          initialValue={title}
          as="h3"
          className="text-xl font-bold mb-2 text-portfolio-navy"
        />
        
        <EditableText
          initialValue={description}
          className="text-portfolio-gray line-clamp-3"
        />
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <a 
          href={link}
          className="inline-flex items-center gap-2 text-portfolio-teal hover:underline font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project <ArrowUpRight className="w-4 h-4" />
        </a>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
