import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import SkillCard from '../components/SkillCard.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import AchievementCard from '../components/AchievementCard.jsx';

function HomePage() {
  const skills = {
  programming: [
    { icon: "💻", name: "Java" },
    { icon: "🗄️", name: "SQL" },
    { icon: "🧠", name: "JavaScript" },
  ],
  frontend: [
    { icon: "🌐", name: "React" },
    { icon: "📄", name: "HTML" },
    { icon: "🎨", name: "CSS" },
  ],
  backend: [
    { icon: "⚙️", name: "Spring Boot" },
  ],
  tools: [
    { icon: "🐙", name: "GitHub" },
    { icon: "🔧", name: "Postman" },
    { icon: "💻", name: "IntelliJ" },
    { icon: "📝", name: "VS Code" },
  ],
  database: [
    { icon: "🗄️", name: "MySQL" },
  ],
};

  const projects = [
    {
      title: 'Cricket Live Score Application',
      description: 'A real-time cricket scoring application that provides live match updates, player statistics, and match analytics. Built with modern web technologies to deliver a seamless user experience.',
      techStack: ['React', 'Spring Boot', 'MySQL', 'REST API'],
      features: [
        'Real-time score updates and match statistics',
        'Player performance tracking and analytics',
        'Responsive design for mobile and desktop',
        'Secure backend with Spring Boot',
        'MySQL database for data persistence',
      ],
      githubLink: 'https://github.com/milapgrover/Cricket-Application',
      
    },
    {
      title: 'DocuMind AI ',
      description: 'DocuMind AI is an intelligent document assistant that allows users to upload documents and interact with them using AI. It can extract text from PDFs, answer questions based on document content, and generate concise summaries using advanced AI models.',
      techStack: ['React', 'Spring Boot', 'MySQL', 'REST API','Ollama (Local AI - Phi Model)', 'OpenAI'],
      features: [
        'Upload PDF documents',
        'Upload audio files (transcription support)',
        'Ask questions based on document content',
        'AI-generated summaries',
        'Timestamp extraction (for audio)',
      ],
      githubLink: 'https://github.com/milapgrover/DocuMind-AI',
    },
  ];

  const achievements = [
  {
    icon: "🏆",
    title: "4-Star Java on HackerRank",
    description: 'Achieved 4-star rating in Java programming on HackerRank, demonstrating strong problem-solving skills.',
  },
  {
    icon: "💻",
    title: "350+ DSA Problems Solved",
      description: 'Solved over 350 Data Structures and Algorithms problems across various platforms, showcasing algorithmic expertise.',
  },
  {
    icon: "🥇",
    title: "1st Prize - District Dancing",
      description: 'Won first prize in district-level dancing competition, demonstrating creativity and performance skills.',
  },
  {
  icon: "🥉",
  title: '3rd Prize - State Dancing',
  description: 'Secured third position in state-level dancing competition, competing against top performers.',
},
{
  icon: "🎤",
  title: '1st Prize - Speech Competition',
  description: 'Won first prize in speech competition, showcasing excellent communication and public speaking abilities.',
}
];

  const educationTimeline = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Chandigarh University',
      period: '2022 - 2026',
      score: 'CGPA: 7.19',
    },
    {
      degree: 'Higher Secondary Education (CBSE - Class 12)',
      institution: 'The Century Public School',
      period: '2020 - 2021',
      score: 'Percentage: 87.4%',
    },
    {
      degree: 'Matriculation (CBSE - Class 10)',
      institution: 'The Delhi Public School',
      period: '2018 - 2019',
      score: 'Percentage: 90.5%',
    }
  ];

  const certifications = [
    { name: 'React Course', platform: 'Scrimba' },
    { name: 'JavaScript Course', platform: 'Scrimba' },
  ];

  return (
    <>
      <Helmet>
        <title>Milap Grover - Full Stack Developer | Java & Spring Boot Specialist</title>
        <meta name="description" content="Portfolio of Milap Grover, a passionate Full Stack Developer specializing in Java, Spring Boot, React, and building secure, scalable web applications." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
        <Header />

        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1657533472082-1c19df4d4b98"
              alt="Abstract technology background"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{ letterSpacing: '-0.02em' }}
            >
              <span className="gradient-text">Milap Grover</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl font-semibold text-foreground mb-4"
            >
              Full Stack Developer | Java & Spring Boot Specialist
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Passionate developer building secure and scalable web applications
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
  href="#projects"
  onClick={(e) => {
    e.preventDefault();
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
  }}
  className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
>
  View Projects →
</a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3.5 glass-card text-foreground rounded-lg font-medium transition-all duration-200 hover:bg-muted active:scale-95 flex items-center justify-center gap-2"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am a passionate Full Stack Developer with expertise in <span className="text-primary font-semibold">Java</span>, <span className="text-primary font-semibold">Spring Boot</span>, <span className="text-primary font-semibold">SQL</span>, and <span className="text-primary font-semibold">React</span>. My journey in software development is driven by a strong foundation in Data Structures and Algorithms, having solved over 350 problems across various platforms.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I specialize in building secure, scalable, and efficient web applications that solve real-world problems. My technical skills are complemented by strong problem-solving abilities and a commitment to writing clean, maintainable code.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond coding, I believe in continuous learning and staying updated with the latest technologies. I am always eager to take on new challenges and contribute to innovative projects that make a difference.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
                Skills & Technologies
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
            </motion.div>

            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Programming Languages</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {skills.programming.map((skill, index) => (
                    <SkillCard key={skill.name} {...skill} delay={index * 0.1} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Frontend Development</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {skills.frontend.map((skill, index) => (
                    <SkillCard key={skill.name} {...skill} delay={index * 0.1} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Backend Development</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {skills.backend.map((skill, index) => (
                    <SkillCard key={skill.name} {...skill} delay={index * 0.1} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Tools & Technologies</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {skills.tools.map((skill, index) => (
                    <SkillCard key={skill.name} {...skill} delay={index * 0.1} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Database</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {skills.database.map((skill, index) => (
                    <SkillCard key={skill.name} {...skill} delay={index * 0.1} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
                Featured Projects
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} {...project} delay={index * 0.2} />
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
                Achievements
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <AchievementCard key={achievement.title} {...achievement} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
                Education
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
            </motion.div>

            <div className="max-w-4xl mx-auto timeline-track mt-8">
              {educationTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="timeline-item"
                >
                  <div className="timeline-marker"></div>
                  <div className="glass-card rounded-2xl p-6 md:p-8 hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{item.degree}</h3>
                        <p className="text-lg text-primary font-semibold mb-3">{item.institution}</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-3 flex-shrink-0">
                        <span className="text-sm font-medium text-muted-foreground bg-muted px-4 py-1.5 rounded-full">
                          {item.period}
                        </span>
                        <div className="inline-flex px-4 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
                          <span className="text-sm font-semibold text-primary">{item.score}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
                Certifications
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-6 flex items-center gap-4 hover:shadow-lg hover:shadow-primary/5 transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-sm shadow-primary/20">
                    <span className="text-xl">📄</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.platform}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
                Get In Touch
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <motion.a
                href="mailto:milapgrover27@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-card rounded-xl p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-sm shadow-primary/20">
                  <span className="text-xl">📧</span>
                </div>
                <div className="text-center">
                  <span className="text-sm font-semibold text-foreground block mb-1">Email</span>
                  <span className="text-sm text-muted-foreground break-all">milapgrover27@gmail.com</span>
                </div>
              </motion.a>

              <motion.a
                href="tel:+918053184230"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-card rounded-xl p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-sm shadow-primary/20">
                  <span className="text-xl">📞</span>
                </div>
                <div className="text-center">
                  <span className="text-sm font-semibold text-foreground block mb-1">Phone</span>
                  <span className="text-sm text-muted-foreground">+91-8053184230</span>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/milap-grover-8ab000250/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-card rounded-xl p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-sm shadow-primary/20">
                  <span className="text-xl">💼</span>
                </div>
                <div className="text-center">
                  <span className="text-sm font-semibold text-foreground block mb-1">LinkedIn</span>
                  <span className="text-sm text-muted-foreground">Connect with me</span>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/milapgrover"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="glass-card rounded-xl p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-sm shadow-primary/20">
                  <span className="text-xl">🐙</span>
                </div>
                <div className="text-center">
                  <span className="text-sm font-semibold text-foreground block mb-1">GitHub</span>
                  <span className="text-sm text-muted-foreground">View my code</span>
                </div>
              </motion.a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;