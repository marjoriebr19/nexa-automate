import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  tag?: string;
  title: string;
  gradientTitle?: string;
  description?: string;
  className?: string;
  tagColor?: 'primary' | 'destructive';
}

const SectionHeader = ({
  tag,
  title,
  gradientTitle,
  description,
  className,
  tagColor = 'primary'
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("text-center mb-16", className)}
    >
      {tag && (
        <span className={cn(
          "inline-block text-xs font-black uppercase tracking-ultra-wide mb-4",
          tagColor === 'destructive' ? "text-destructive" : "text-primary"
        )}>
          {tag}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-ultra-tight mb-6 leading-[0.95]">
        {title} {gradientTitle && <span className="text-gradient">{gradientTitle}</span>}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
