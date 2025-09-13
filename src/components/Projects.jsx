import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { Launch, Visibility } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Campus Crush',
      description: 'A dating application for NC State University Students where they are matched according to their interests using matching algorithm',
      image: '/crush.png',
      technologies: ['AWS', 'Serverless', 'React Native'],
      // liveUrl: '',
      githubUrl: 'https://github.com/CampusCrush1-0',
      featured: true,
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'The Art Of Success',
      description: 'A webapp for students suffereing with ADHD and Dyslexia. App pairs students with tutors based on their experies and dilects',
      image: '/artofsuccess.jpg',
      technologies: ['Node', 'Express', 'Javascript','Socket.io', 'Reactjs', 'MaterialUI', 'Vercel', 'Heroku'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/Art-of-Success',
      featured: true,
      category: 'Web App'
    },
    {
      id: 3,
      title: 'Pack Travel',
      description: 'Most of the university students do not have a car to travel off-campus and rely mostly on the Wolfline. But what if someone wants to travel outside Wolflines limit? Well... why not collaborate on PackTravel to travel off-campus by a cab, rental car, etc.',
      image: '/wolf2.svg',
      technologies: ['Python', 'Django', 'MongoDb', 'Javascript', 'HTML', 'CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/GradHackersGuild/PackTravel-Old',
      featured: true,
      category: 'WebApp'
    },
    // {
    //   id: 4,
    //   title: 'Social Media Analytics',
    //   description: 'A comprehensive analytics platform for social media metrics with data visualization and reporting features.',
    //   image: '/placeholder-project4.jpg',
    //   technologies: ['Next.js', 'Python', 'D3.js', 'Redis', 'AWS'],
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com/example',
    //   featured: true,
    //   category: 'Analytics'
    // },
    // {
    //   id: 5,
    //   title: 'Mobile Banking App',
    //   description: 'A secure mobile banking application with biometric authentication, transaction management, and financial planning tools.',
    //   image: '/placeholder-project5.jpg',
    //   technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT', 'Stripe'],
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com/example',
    //   featured: false,
    //   category: 'Mobile'
    // },
    // {
    //   id: 6,
    //   title: 'AI Chatbot Platform',
    //   description: 'An intelligent chatbot platform with natural language processing, multi-language support, and integration capabilities.',
    //   image: '/placeholder-project6.jpg',
    //   technologies: ['Python', 'TensorFlow', 'FastAPI', 'React', 'Docker'],
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com/example',
    //   featured: false,
    //   category: 'AI/ML'
    // }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(135deg, #00D4FF 0%, #FF6B6B 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Featured Projects
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              A showcase of my recent work and side projects that demonstrate my skills and passion
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid item xs={12} md={6} lg={4} key={project.id}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(0, 212, 255, 0.1)',
                      borderRadius: 3,
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      '&:hover': {
                        borderColor: 'rgba(0, 212, 255, 0.3)',
                        boxShadow: '0 20px 40px rgba(0, 212, 255, 0.1)',
                      },
                    }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {/* Project Image */}
                    <Box sx={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={project.image}
                        alt={project.title}
                        sx={{
                          transition: 'transform 0.3s ease',
                          transform: hoveredProject === project.id ? 'scale(1.1)' : 'scale(1)',
                        }}
                      />
                      
                      {/* Overlay */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.8) 0%, rgba(255, 107, 107, 0.8) 100%)',
                          opacity: hoveredProject === project.id ? 1 : 0,
                          transition: 'opacity 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 2,
                        }}
                      >
                        {/* <IconButton
                          sx={{
                            color: 'white',
                            background: 'rgba(255, 255, 255, 0.2)',
                            '&:hover': {
                              background: 'rgba(255, 255, 255, 0.3)',
                            },
                          }}
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <Launch />
                        </IconButton> */}
                        <IconButton
                          sx={{
                            color: 'white',
                            background: 'rgba(255, 255, 255, 0.2)',
                            '&:hover': {
                              background: 'rgba(255, 255, 255, 0.3)',
                            },
                          }}
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <GitHubIcon />
                        </IconButton>
                      </Box>

                      {/* Featured Badge */}
                      {project.featured && (
                        <Chip
                          label="Featured"
                          sx={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            background: 'linear-gradient(135deg, #00D4FF 0%, #4FC3F7 100%)',
                            color: '#0A0A0A',
                            fontWeight: 600,
                          }}
                        />
                      )}

                      {/* Category Badge */}
                      <Chip
                        label={project.category}
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 16,
                          left: 16,
                          background: 'rgba(0, 0, 0, 0.7)',
                          color: 'white',
                          fontWeight: 500,
                        }}
                      />
                    </Box>

                    <CardContent sx={{ p: 3 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          mb: 2,
                          color: 'text.primary',
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          mb: 3,
                          lineHeight: 1.6,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {project.description}
                      </Typography>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <Chip
                            key={idx}
                            label={tech}
                            size="small"
                            sx={{
                              background: 'rgba(0, 212, 255, 0.1)',
                              color: 'primary.main',
                              border: '1px solid rgba(0, 212, 255, 0.3)',
                              fontSize: '0.75rem',
                            }}
                          />
                        ))}
                        {project.technologies.length > 4 && (
                          <Chip
                            label={`+${project.technologies.length - 4}`}
                            size="small"
                            sx={{
                              background: 'rgba(255, 107, 107, 0.1)',
                              color: 'secondary.main',
                              border: '1px solid rgba(255, 107, 107, 0.3)',
                              fontSize: '0.75rem',
                            }}
                          />
                        )}
                      </Box>

                      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                        {/* <IconButton
                          size="small"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                          sx={{
                            color: 'primary.main',
                            '&:hover': {
                              background: 'rgba(0, 212, 255, 0.1)',
                            },
                          }}
                        >
                          <Launch fontSize="small" />
                        </IconButton> */}
                        <IconButton
                          size="small"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                          sx={{
                            color: 'text.secondary',
                            '&:hover': {
                              background: 'rgba(255, 107, 107, 0.1)',
                              color: 'secondary.main',
                            },
                          }}
                        >
                          <GitHubIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: 4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'transparent',
              border: '2px solid #00D4FF',
              color: '#00D4FF',
              padding: '12px 32px',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#00D4FF';
              e.target.style.color = '#0A0A0A';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#00D4FF';
            }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
