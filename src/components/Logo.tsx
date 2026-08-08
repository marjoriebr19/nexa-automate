import React from 'react';
import logoAsset from '@/assets/logo-nexautoma.png.asset.json';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16",
    xl: "w-24 h-24"
  };

  return (
    <div className={`rounded-xl overflow-hidden flex items-center justify-center shrink-0 ${sizeClasses[size]} ${className}`}>
      <img 
        src={logoAsset.url} 
        alt="NEXAUTOMA" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Logo;
