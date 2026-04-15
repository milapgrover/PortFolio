import React from 'react';
import { motion } from 'framer-motion';

function SkillCard({ icon, name, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className="glass-card rounded-xl p-6 flex flex-col items-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
        <span className="text-white text-xl">{icon}</span>
      </div>
      <span className="text-sm font-medium text-foreground">{name}</span>
    </motion.div>
  );
}

export default SkillCard;