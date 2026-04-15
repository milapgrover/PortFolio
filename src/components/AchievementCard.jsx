import React from 'react';
import { motion } from 'framer-motion';

function AchievementCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 hover:border-secondary/20"
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 shadow-sm shadow-primary/20">
         <span className="text-white text-xl">{icon}</span>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default AchievementCard;