import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, LinearProgress, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Palette, Storage, CloudQueue, PhoneAndroid, Build } from '@mui/icons-material';

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code />,
      color: '#00D4FF',
      skills: [
        { name: 'Angular', level: 85 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 95 },
        { name: 'React', level: 90 },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Storage />,
      color: '#4FC3F7',
      skills: [
        { name: 'Node.js', level: 99 },
        { name: 'Python', level: 80 },
        { name: 'REST APIs', level: 92 },
        { name: 'Microservices', level: 99 },
      ]
    },
    {
      title: 'Database & Storage',
      icon: <Storage />,
      color: '#4CAF50',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'DynamoDB', level: 95 },
        { name: 'Redis', level: 80 },
        { name: 'MySQL', level: 82 },
        // { name: 'Firebase', level: 75 },
        { name: 'Elasticsearch', level: 95 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <CloudQueue />,
      color: '#FF9800',
      skills: [
        { name: 'AWS', level: 99 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 70 },
        { name: 'CI/CD', level: 95 },
        // { name: 'Terraform', level: 70 },
        { name: 'Monitoring', level: 90 },
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
      id="skills"
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
              Skills & Expertise
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              A comprehensive overview of my technical skills and areas of expertise
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: 800, mx: 'auto' }}>
            {skillCategories.map((category, categoryIndex) => (
              <Grid item xs={12} md={6} key={categoryIndex}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(0, 212, 255, 0.1)',
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        borderColor: 'rgba(0, 212, 255, 0.3)',
                        boxShadow: '0 20px 40px rgba(0, 212, 255, 0.1)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 3,
                        }}
                      >
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${category.color}20, ${category.color}40)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 2,
                            border: `2px solid ${category.color}40`,
                          }}
                        >
                          <Box sx={{ color: category.color, fontSize: '1.5rem' }}>
                            {category.icon}
                          </Box>
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: 'text.primary',
                          }}
                        >
                          {category.title}
                        </Typography>
                      </Box>

                      <Box sx={{ space: 2 }}>
                        {category.skills.map((skill, skillIndex) => (
                          <Box key={skillIndex} sx={{ mb: 2 }}>
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                mb: 1,
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  fontWeight: 500,
                                  color: 'text.primary',
                                }}
                              >
                                {skill.name}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: 'text.secondary',
                                  fontSize: '0.875rem',
                                }}
                              >
                                {skill.level}%
                              </Typography>
                            </Box>
                            <LinearProgress
                              variant="determinate"
                              value={skill.level}
                              sx={{
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                '& .MuiLinearProgress-bar': {
                                  background: `linear-gradient(90deg, ${category.color} 0%, ${category.color}CC 100%)`,
                                  borderRadius: 4,
                                },
                              }}
                            />
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                mb: 4,
                color: 'text.primary',
              }}
            >
              Additional Skills
            </Typography>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
              {[
                'Agile/Scrum', 'Project Management', 'Team Leadership', 'Code Review',
                'Performance Optimization', 'Security Best Practices', 'API Design',
                'Responsive Design', 'Cross-browser Compatibility', 'SEO Optimization',
                'Accessibility (WCAG)', 'Internationalization', 'Version Control',
                'Documentation', 'Mentoring', 'Problem Solving'
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Box
                    sx={{
                      px: 3,
                      py: 1.5,
                      borderRadius: 3,
                      background: 'rgba(0, 212, 255, 0.1)',
                      border: '1px solid rgba(0, 212, 255, 0.3)',
                      color: 'primary.main',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(0, 212, 255, 0.2)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    {skill}
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;