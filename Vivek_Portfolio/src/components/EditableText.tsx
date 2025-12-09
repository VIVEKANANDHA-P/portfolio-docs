
import React, { useState, useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { useAdmin } from '@/context/AdminContext';

interface EditableTextProps {
  initialValue: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  placeholder?: string;
}

const EditableText = ({ 
  initialValue, 
  className, 
  as = 'p',
  placeholder = 'Edit this text'
}: EditableTextProps) => {
  const { isAdmin } = useAdmin();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialValue);
  
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isEditing && textRef.current) {
      textRef.current.focus();
      // Set cursor at the end
      const range = document.createRange();
      const sel = window.getSelection();
      range.selectNodeContents(textRef.current);
      range.collapse(false);
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    if (isAdmin) {
      setIsEditing(true);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setIsEditing(false);
    }
  };

  const handleInput = (e: React.FormEvent<HTMLElement>) => {
    setText(e.currentTarget.textContent || '');
  };

  // Create a component based on the 'as' prop
  const Component = as as any;

  return (
    <Component
      ref={textRef}
      className={cn(
        "transition-all duration-200",
        isAdmin && "edit-focus", 
        isEditing ? "border-dashed border border-gray-300 p-1" : "border border-transparent",
        className
      )}
      contentEditable={isAdmin && isEditing}
      suppressContentEditableWarning
      onDoubleClick={handleDoubleClick}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      onInput={handleInput}
      data-placeholder={placeholder}
      title={isAdmin ? "Double-click to edit" : ""}
    >
      {text || placeholder}
    </Component>
  );
};

export default EditableText;
