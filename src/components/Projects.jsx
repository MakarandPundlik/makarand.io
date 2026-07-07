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
      title: 'LLM Full Stack Application',
      description: 'Built a RAG (Retrieval-Augmented Generation) assistant backend on Node.js and AWS that unified business context from 4 SaaS sources (Slack, Zoom, HubSpot, Salesforce), so users got answers in one place instead of switching between apps. Designed cloud-native LLM services that reduced GPT API calls by 50%, built a Slack chatbot with Lambda, API Gateway, and DynamoDB, and developed schema-driven reasoning pipelines with S3 and ECS.',
      image: `${process.env.PUBLIC_URL}/placeholder-project6.jpg`,
      technologies: ['Node.js', 'AWS', 'TypeScript', 'Lambda', 'DynamoDB', 'RAG', 'Slack API'],
      githubUrl: 'https://github.com/MakarandPundlik/unified-context-rag',
      featured: true,
      category: 'AI/ML'
    },
    {
      id: 2,
      title: 'AWS Backend Application',
      description: 'Built a messaging backend with Lambda, SQS, API Gateway WebSocket connections, and DynamoDB, with AES encryption at rest and in transit.',
      image: `${process.env.PUBLIC_URL}/cloud.png`,
      technologies: ['AWS Lambda', 'SQS', 'API Gateway', 'DynamoDB', 'WebSocket', 'AES'],
      githubUrl: 'https://github.com/CampusCrush1-0/back-end',
      featured: true,
      category: 'Backend'
    },
    {
      id: 3,
      title: 'DevOps Pipeline',
      description: 'Designed a GitHub Actions + Jenkins pipeline that runs 33 Playwright end-to-end tests and 50+ unit tests on every merge, plus Trivy vulnerability scans and Semgrep code quality checks. Caught security and lint issues before they hit production.',
      image: `${process.env.PUBLIC_URL}/devops.png`,
      technologies: ['GitHub Actions', 'Jenkins', 'Playwright', 'Trivy', 'Semgrep', 'Docker'],
      featured: true,
      category: 'DevOps'
    },
    {
      id: 4,
      title: 'Pack Travel',
      description: 'Built a Django and PostgreSQL travel-planning platform with modular REST APIs, Google Maps route visualization, group itinerary management, and ride-pairing workflows for university students traveling off-campus.',
      image: `${process.env.PUBLIC_URL}/packtravel.png`,
      technologies: ['Python', 'Django', 'PostgreSQL', 'REST APIs', 'Google Maps'],
      githubUrl: 'https://github.com/MakarandPundlik/PackTravel',
      featured: true,
      category: 'Full Stack'
    }
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
                background: 'linear-gradient(135deg, #00D4FF 0%, #FFFFFF 100%)',
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
                      height: 400,
                      background: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(0, 212, 255, 0.1)',
                      borderRadius: 3,
                      overflow: 'hidden',
                      transition: 'transform 1000ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 1000ms ease, border-color 1000ms ease',
                      perspective: 1000,
                      position: 'relative',
                      cursor: project.githubUrl ? 'pointer' : 'default',
                      '&:hover': {
                        borderColor: 'rgba(0, 212, 255, 0.3)',
                        boxShadow: '0 20px 40px rgba(0, 212, 255, 0.1)',
                      },
                      '&:hover .flipInner': {
                        transform: 'rotateY(180deg)'
                      }
                    }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => project.githubUrl && window.open(project.githubUrl, '_blank')}
                  >
                    <Box className="flipInner" sx={{ position: 'relative', transformStyle: 'preserve-3d', transition: 'transform 1000ms cubic-bezier(0.2, 0.8, 0.2, 1)', willChange: 'transform', height: '100%' }}>
                      {/* Front */}
                      <Box className="flipFront" sx={{ position: 'relative', height: '100%', backfaceVisibility: 'hidden' }}>
                        {/* Project Image */}
                        <Box sx={{ position: 'relative', height: 240, overflow: 'hidden' }}>
                          <CardMedia
                            component="img"
                            height={240}
                            image={project.image}
                            alt={project.title}
                            sx={{
                              transition: 'transform 0.3s ease',
                              transform: hoveredProject === project.id ? 'scale(1.1)' : 'scale(1)',
                              objectFit: 'cover',
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
                              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.8) 0%, rgba(255, 255, 255, 0.8) 100%)',
                              opacity: hoveredProject === project.id ? 1 : 0,
                              transition: 'opacity 0.3s ease',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: 2,
                            }}
                          >
                          {project.githubUrl && (
                            <IconButton
                              sx={{
                                color: 'white',
                                background: 'rgba(255, 255, 255, 0.2)',
                                '&:hover': {
                                  background: 'rgba(255, 255, 255, 0.3)',
                                },
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.githubUrl, '_blank');
                              }}
                            >
                              <GitHubIcon />
                            </IconButton>
                          )}
                          </Box>

                          {/* Featured Badge */}
                          {project.featured && (
                            <Chip
                              label="Featured"
                              sx={{
                                position: 'absolute',
                                top: 16,
                                right: 16,
                                background: 'linear-gradient(135deg, #00D4FF 0%, #FFFFFF 100%)',
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

                        <CardContent sx={{ p: 3, height: 160, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
                                  background: 'rgba(0, 212, 255, 0.1)',
                                  color: 'primary.main',
                                  border: '1px solid rgba(0, 212, 255, 0.3)',
                                  fontSize: '0.75rem',
                                }}
                              />
                            )}
                          </Box>
                        </CardContent>
                      </Box>

                      {/* Back */}
                      <Box className="flipBack" sx={{
                        position: 'absolute',
                        inset: 0,
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        background: '#000',
                        borderRadius: 3,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                      }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            mb: 2,
                            color: 'primary.main',
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.primary',
                            lineHeight: 1.6,
                            fontSize: '0.9rem',
                          }}
                        >
                          {project.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

      </Container>
    </Box>
  );
};

export default Projects;
