import React from 'react';
import { Box, Container, Typography, Card, CardContent, Chip, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { Work, Timeline, LocationOn } from '@mui/icons-material';

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const experiences = [
    {
      title: 'Founding SWE Intern',
      company: 'BestWork',
      location: 'New York, USA',
      duration: 'May 2025 - June 2025',
      type: 'Internship',
      description: 'Founding Software Engineer headed the backend architecture.',
      technologies: ['Node.js', 'AWS', 'TypeScript', 'Zoom Api', 'Slack Api', 'CRMs Api'],
      achievements: [
        'Designed and optimized cloud-native LLM-driven services, reducing GPT API calls by 50% to improve scalability and cost.',
        'Built a Slack chatbot using AWS Lambda, API Gateway, and DynamoDB to streamline collaboration and ingest third-party data.',
        'Developed schema-driven reasoning pipelines with S3 + ECS to structure evidence-like insights from HubSpot and Salesforce.'
      ]
    },
    {
      title: 'Research Intern',
      company: 'NC State University',
      location: 'Raleigh, NC',
      duration: 'Jan 2025 - Apr 2025',
      type: 'Internship',
      description: 'Frontend Developer - Worked on WebAplus learning platform.',
      technologies: ['Angular', 'Typescript', 'Linux'],
      achievements: [
        'Redesigned WebAplus learning platform UI with Angular (TypeScript), improving interactivity, accessibility, and student engagement.e',
        'Debugged and stabilized core user-facing modules, ensuring reliable production performance for diverse learners.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'NiCE',
      location: 'Pune, MH',
      duration: 'July 2022 - July 2024',
      type: 'Full-time',
      description: 'Focused on building scalable and efficient backend systems for Cloud Storage',
      technologies: ['AWS', 'Node', 'Typescript', 'Serverless', 'LLMs', 'Anuglar', 'Cucumber'],
      achievements: [
        'Designed end-to-end microservices with Node.js, AWS SQS/SNS, and DynamoDB, enhancing resiliency of message processing.',
        'Delivered TypeScript REST APIs via AWS API Gateway, generating 100+ pre-signed S3 URLs under 300ms for clinician-facing assets.',
        'Refactored AWS Lambda Authorizer with caching + Docker local testing, reducing execution time by 25% and saving $10K annually.',
        'Collaborated cross-functionally to build and test Angular-based storage UI with Playwright/Jasmine, improving usability and clinician workflows.',
        'Secured two U.S. patents for AI-driven contact center systems, becoming the youngest engineer at NICE to achieve this.'
      ]
    },
    {
      title: 'Project Intern',
      company: 'IMATMI',
      location: 'New Jersey, USA',
      duration: 'July 2022 - July 2024',
      type: 'Internship',
      description: 'Developed a webapp for students suffering with ADHD and Dyslexia',
      technologies: ['Node', 'Express', 'Javascript', 'Reactjs', 'MaterialUI', 'Vercel', 'Heroku'],
      achievements: [
        'Built React.js + MUI role-based UI with anonymized student metrics, ensuring compliance with privacy needs.',
        'Engineered Node.js backend with MongoDB, optimizing aggregation queries to reduce latency by 33%',
        'Led end-to-end CI/CD pipeline in Agile sprints, delivering features reliably and on schedule.'
      ]
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
      id="experience"
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)',
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
              Experience
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              My professional journey and the experiences that shaped my expertise
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Box sx={{ position: 'relative' }}>
            {/* Timeline Line */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 20, md: 50 },
                top: 0,
                bottom: 0,
                width: 2,
                background: 'linear-gradient(180deg, #00D4FF 0%, #FFFFFF 100%)',
                borderRadius: 1,
              }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                style={{ position: 'relative', marginBottom: 4 }}
              >
                <Card
                  sx={{
                    mx: 'auto',
                    mb: 4,
                    maxWidth: { xs: '92%', md: 560 },
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 212, 255, 0.1)',
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'transform 1000ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 1000ms ease, border-color 1000ms ease, z-index 1000ms ease',
                    perspective: 1000,
                    position: 'relative',
                    zIndex: 1,
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.02)',
                      borderColor: 'rgba(0, 212, 255, 0.3)',
                      boxShadow: '0 24px 48px rgba(0, 212, 255, 0.12)',
                      zIndex: 10,
                    },
                    '&:hover .flipInner': {
                      transform: 'rotateY(180deg)'
                    }
                  }}
                >
                  <Box className="flipInner" sx={{ position: 'relative', transformStyle: 'preserve-3d', transition: 'transform 1000ms cubic-bezier(0.2, 0.8, 0.2, 1)', willChange: 'transform' }}>
                    {/* Front */}
                    <Box className="flipFront" sx={{ position: 'relative', p: 4, backfaceVisibility: 'hidden' }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #00D4FF 0%, #FFFFFF 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Work sx={{ color: '#0A0A0A', fontSize: '1.5rem' }} />
                        </Box>
                        
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 600,
                              mb: 1,
                              color: 'text.primary',
                            }}
                          >
                            {exp.title}
                          </Typography>
                          
                          <Typography
                            variant="h6"
                            sx={{
                              color: 'primary.main',
                              fontWeight: 500,
                              mb: 1,
                            }}
                          >
                            {exp.company}
                          </Typography>

                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <LocationOn sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {exp.location}
                              </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              {exp.duration}
                            </Typography>
                            <Chip
                              label={exp.type}
                              size="small"
                              sx={{
                                background: 'rgba(0, 212, 255, 0.1)',
                                color: 'primary.main',
                                border: '1px solid rgba(0, 212, 255, 0.3)',
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>

                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.secondary',
                          mb: 2,
                          lineHeight: 1.7,
                        }}
                      >
                        {exp.description}
                      </Typography>

                      {/* Technologies (restored) */}
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 1.5,
                            color: 'text.primary',
                          }}
                        >
                          Technologies:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {exp.technologies.map((tech, idx) => (
                            <Chip
                              key={idx}
                              label={tech}
                              sx={{
                                background: 'rgba(0, 212, 255, 0.1)',
                                color: 'primary.main',
                                border: '1px solid rgba(0, 212, 255, 0.3)',
                                '&:hover': {
                                  background: 'rgba(0, 212, 255, 0.2)',
                                },
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    </Box>

                    {/* Back */}
                    <Box className="flipBack" sx={{
                      position: 'absolute',
                      inset: 0,
                      p: 4,
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
                        Key Achievements
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, m: 0 }}>
                        {exp.achievements.map((achievement, idx) => (
                          <Typography
                            key={idx}
                            component="li"
                            variant="body2"
                            sx={{
                              color: 'text.primary',
                              mb: 1,
                              lineHeight: 1.6,
                            }}
                          >
                            {achievement}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Card>

                {/* Timeline Dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: 12, md: 42 },
                    top: 30,
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #00D4FF 0%, #FFFFFF 100%)',
                    border: '3px solid #0A0A0A',
                    zIndex: 1,
                  }}
                />
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;