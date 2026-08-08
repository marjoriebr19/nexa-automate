import React from 'react';
import logoAsset from '@/assets/logo-nexautoma.png.asset.json';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-[50px] h-[50px]",
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
