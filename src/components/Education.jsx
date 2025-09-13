import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid, Chip, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { School, EmojiEvents, CalendarToday, LocationOn } from '@mui/icons-material';

const Education = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'North Carolina State University',
      location: 'Raleigh, NC',
      duration: '2021 - 2023',
      gpa: '4.0/4.0',
      description: 'Specialized in Software Engineering and Cloud Computing',
      coursework: ['Software Engineering', 'Data Structures and Algorithms', 'Cloud Computing', 'Object-Oriented Design and Development', 'Internet Protocols'],
      achievements: ['A+ in Algorithms, OODD and SE', 'Graduate Research Intern']
    },
    {
      degree: 'Bachelor of Technology in Electronics and Telecommunication Engineering',
      institution: 'Pune Institute of Computer Technology',
      location: 'Pune, India',
      duration: '2017 - 2021',
      gpa: '3.79/4.0',
      description: 'Comprehensive study of electronics and telecommunication engineering fundamentals with emphasis on software development and system design.',
      coursework: ['Data Structures and Algorithms', 'Object-Oriented Programming', 'Computer Networks', 'Operating Systems', 'Software Engineering', 'Database Management Systems', 'Digital Signal Processing', 'Wireless Communication', 'Antenna Design', 'Microwave Engineering'],
      achievements: ['First Class with Distinction', 'Multiple Hackathons']
    }
  ];

  // const certifications = [
  //   { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', date: '2023' },
  //   { name: 'Google Cloud Professional Developer', issuer: 'Google Cloud', date: '2022' },
  //   { name: 'Certified Kubernetes Administrator', issuer: 'Cloud Native Computing Foundation', date: '2022' },
  //   { name: 'React Developer Certification', issuer: 'Meta', date: '2021' }
  // ];

  return (
    <Box id="education" sx={{ py: 8, background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)', position: 'relative' }}>
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 2, background: 'linear-gradient(135deg, #00D4FF 0%, #FF6B6B 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Education
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: '600px', margin: '0 auto' }}>
              My academic journey and professional certifications that have shaped my expertise
            </Typography>
          </Box>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: 'text.primary', textAlign: 'center' }}>
              Academic Background
            </Typography>
            <Grid container spacing={4}>
              {education.map((edu, index) => (
                <Grid item xs={12} key={index}>
                  <Card sx={{ background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0, 212, 255, 0.1)', borderRadius: 3, transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-5px)', borderColor: 'rgba(0, 212, 255, 0.3)', boxShadow: '0 20px 40px rgba(0, 212, 255, 0.1)' } }}>
                    <CardContent sx={{ p: 4 }}>
                      <Grid container spacing={3} alignItems="flex-start">
                        <Grid item xs={12} md={2}>
                          <Box sx={{ width: 80, height: 80, borderRadius: 2, background: 'linear-gradient(135deg, #00D4FF 0%, #4FC3F7 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                            <School sx={{ color: '#0A0A0A', fontSize: '2rem' }} />
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={10}>
                          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>{edu.degree}</Typography>
                          <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 500, mb: 2 }}>{edu.institution}</Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <LocationOn sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                              <Typography variant="body2" sx={{ color: 'text.secondary' }}>{edu.location}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <CalendarToday sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                              <Typography variant="body2" sx={{ color: 'text.secondary' }}>{edu.duration}</Typography>
                            </Box>
                            <Chip label={`GPA: ${edu.gpa}`} sx={{ background: 'rgba(0, 212, 255, 0.1)', color: 'primary.main', border: '1px solid rgba(0, 212, 255, 0.3)' }} />
                          </Box>
                          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7 }}>{edu.description}</Typography>
                          <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>Key Coursework:</Typography>
                              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {edu.coursework.map((course, idx) => (
                                  <Chip key={idx} label={course} size="small" sx={{ background: 'rgba(255, 107, 107, 0.1)', color: 'secondary.main', border: '1px solid rgba(255, 107, 107, 0.3)' }} />
                                ))}
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>Achievements:</Typography>
                              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                {edu.achievements.map((achievement, idx) => (
                                  <Typography key={idx} component="li" variant="body2" sx={{ color: 'text.secondary', mb: 1, lineHeight: 1.6 }}>{achievement}</Typography>
                                ))}
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>

        {/* <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: 'text.primary', textAlign: 'center' }}>Professional Certifications</Typography>
            <Grid container spacing={3}>
              {certifications.map((cert, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card sx={{ height: '100%', background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0, 212, 255, 0.1)', borderRadius: 3, transition: 'all 0.3s ease', textAlign: 'center', '&:hover': { borderColor: 'rgba(0, 212, 255, 0.3)', boxShadow: '0 20px 40px rgba(0, 212, 255, 0.1)' } }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ width: 60, height: 60, borderRadius: '50%', background: 'linear-gradient(135deg, #00D4FF 0%, #4FC3F7 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                        <EmojiEvents sx={{ color: '#0A0A0A', fontSize: '1.5rem' }} />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: 'text.primary', fontSize: '1rem' }}>{cert.name}</Typography>
                      <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 500, mb: 1 }}>{cert.issuer}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{cert.date}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div> */}
      </Container>
    </Box>
  );
};

export default Education;