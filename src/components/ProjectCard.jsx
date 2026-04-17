import React from 'react';
import { motion } from 'framer-motion';

function ProjectCard({ title, description, techStack, features, delay = 0, githubLink = null }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/20 flex flex-col h-full"
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        {githubLink && (
  <a
    href={githubLink}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary/90 active:scale-95 shadow-sm shadow-primary/20 shrink-0"
  >
     View on GitHub
  </a>
)}
      </div>
      
      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{description}</p>
      
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-foreground mb-3">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default ProjectCard;