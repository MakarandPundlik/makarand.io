import React from 'react';
import { Box, Container, Typography, Button, Grid, Avatar, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { KeyboardArrowDown } from '@mui/icons-material';

const Landing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const scrollToNext = () => {
    const element = document.querySelector('#experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="landing"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)',
      }}
    >
      {/* Background Animation */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(0, 212, 255, 0.05) 0%, transparent 50%)
          `,
          animation: 'float 6s ease-in-out infinite',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center" sx={{ minHeight: '100vh' }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: 'primary.main',
                  fontWeight: 500,
                  mb: 2,
                  fontSize: { xs: '1rem', md: '1.2rem' },
                }}
              >
                Hello, I'm
              </Typography>
              
              <Typography
                variant={isMobile ? 'h2' : 'h1'}
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  background: 'linear-gradient(135deg, #00D4FF 0%, #FF6B6B 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Makarand Pundlik
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: 'text.secondary',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                <ReactTyped
                  strings={[
                    'Cloud Computing',
                    'Data Structures and Algorithms',
                    'Problem Solver',
                    'Tech Innovator'
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                  showCursor
                  cursorChar="|"
                />
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  lineHeight: 1.8,
                  maxWidth: '500px',
                }}
              >
                I write code that solves real world problems.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => scrollToNext()}
                    sx={{
                      background: 'linear-gradient(135deg, #00D4FF 0%, #4FC3F7 100%)',
                      color: '#0A0A0A',
                      fontWeight: 600,
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #4FC3F7 0%, #00D4FF 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 10px 20px rgba(0, 212, 255, 0.3)',
                      },
                    }}
                  >
                    View My Work
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => {
                      const element = document.querySelector('#contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    sx={{
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      fontWeight: 600,
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      '&:hover': {
                        borderColor: 'primary.light',
                        backgroundColor: 'rgba(0, 212, 255, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Get In Touch
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: 250, md: 350 },
                  height: { xs: 250, md: 350 },
                }}
              >
                {/* Profile Image Placeholder */}
                <Avatar
                  src="/me2.jpeg"
                  sx={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #00D4FF 0%, #FF6B6B 100%)',
                    fontSize: '4rem',
                    fontWeight: 700,
                  }}
                >
                  MP
                </Avatar>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    position: 'absolute',
                    top: '10%',
                    right: '10%',
                    width: 60,
                    height: 60,
                    background: 'rgba(0, 212, 255, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                  }}
                >
                  <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700 }}>
                    💻
                  </Typography>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                  style={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '10%',
                    width: 50,
                    height: 50,
                    background: 'rgba(255, 107, 107, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 107, 107, 0.3)',
                  }}
                >
                  <Typography variant="h6" sx={{ color: 'secondary.main', fontWeight: 700 }}>
                    ⚡
                  </Typography>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        style={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
        }}
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <KeyboardArrowDown
            sx={{
              fontSize: '2rem',
              color: 'primary.main',
              opacity: 0.7,
            }}
          />
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </Box>
  );
};

export default Landing;
