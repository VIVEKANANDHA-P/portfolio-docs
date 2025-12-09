
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Image, Upload } from "lucide-react";
import { useAdmin } from '@/context/AdminContext';

interface EditableImageProps {
  initialSrc: string;
  alt: string;
  className?: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
}

const EditableImage = ({ 
  initialSrc, 
  alt, 
  className,
  aspectRatio = "square"
}: EditableImageProps) => {
  const { isAdmin } = useAdmin();
  const [src, setSrc] = useState(initialSrc);
  const [isHovering, setIsHovering] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSrc(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    if (isAdmin) {
      fileInputRef.current?.click();
    }
  };

  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case "square": return "aspect-square";
      case "video": return "aspect-video";
      case "portrait": return "aspect-[3/4]";
      case "wide": return "aspect-[16/9]";
      default: return "aspect-square";
    }
  };

  return (
    <div 
      className={cn(
        "relative group overflow-hidden rounded-lg",
        getAspectRatioClass(),
        isAdmin && "cursor-pointer",
        className
      )}
      onMouseEnter={() => isAdmin && setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={triggerFileInput}
      title={isAdmin ? "Click to change image" : ""}
    >
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-200">
          <Image className="w-12 h-12 text-gray-400" />
        </div>
      )}
      
      {isAdmin && (
        <div className={cn(
          "absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300",
          isHovering ? "opacity-100" : "opacity-0"
        )}>
          <Button variant="secondary" size="sm" className="gap-2">
            <Upload className="w-4 h-4" />
            <span>Change Image</span>
          </Button>
        </div>
      )}
      
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        className="hidden" 
        accept="image/*" 
      />
    </div>
  );
};

export default EditableImage;
