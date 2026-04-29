"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface OptimizedImageProps extends ImageProps {
  containerClassName?: string;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  className, 
  containerClassName = "", 
  ...props 
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Skeleton Pulse */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse z-0 flex items-center justify-center">
           {/* Optional: we could put a small spinner or logo watermark here */}
        </div>
      )}
      
      <Image
        src={src}
        alt={alt}
        className={`transition-opacity duration-700 ease-in-out ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${className}`}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
}
