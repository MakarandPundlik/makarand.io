import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, TextField, Button, IconButton, useTheme, useMediaQuery, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { Email, Phone, LocationOn, Send, CheckCircle } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSnackbar({
      open: true,
      message: 'Thank you for your message! I\'ll get back to you soon.',
      severity: 'success'
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'makarand@example.com',
      link: 'mailto:makarand@example.com',
      color: '#00D4FF'
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: '#FF6B6B'
    },
    {
      icon: <LocationOn />,
      title: 'Location',
      value: 'Raleigh, NC',
      link: '#',
      color: '#4CAF50'
    }
  ];

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/makarand',
      color: '#0077B5'
    },
    {
      icon: <GitHubIcon />,
      name: 'GitHub',
      url: 'https://github.com/makarand',
      color: '#333'
    },
    {
      icon: <TwitterIcon />,
      name: 'Twitter',
      url: 'https://twitter.com/makarand',
      color: '#1DA1F2'
    }
  ];

  return (
    <Box
      id="contact"
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
                background: 'linear-gradient(135deg, #00D4FF 0%, #FF6B6B 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              Let's discuss your next project or just say hello. I'm always excited to work on new challenges!
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 4,
                  color: 'text.primary',
                }}
              >
                Contact Information
              </Typography>

              <Box sx={{ mb: 4 }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      sx={{
                        mb: 2,
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(0, 212, 255, 0.1)',
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: 'rgba(0, 212, 255, 0.3)',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box
                            sx={{
                              width: 50,
                              height: 50,
                              borderRadius: '50%',
                              background: `${info.color}20`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              border: `2px solid ${info.color}40`,
                            }}
                          >
                            <Box sx={{ color: info.color, fontSize: '1.5rem' }}>
                              {info.icon}
                            </Box>
                          </Box>
                          <Box>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 600,
                                color: 'text.primary',
                                mb: 0.5,
                              }}
                            >
                              {info.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: 'text.secondary',
                                textDecoration: 'none',
                                cursor: 'pointer',
                                '&:hover': {
                                  color: info.color,
                                },
                              }}
                              component="a"
                              href={info.link}
                            >
                              {info.value}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: 'text.primary',
                }}
              >
                Follow Me
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      sx={{
                        width: 50,
                        height: 50,
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(0, 212, 255, 0.2)',
                        color: social.color,
                        '&:hover': {
                          background: `${social.color}20`,
                          borderColor: social.color,
                          transform: 'translateY(-2px)',
                        },
                      }}
                      onClick={() => window.open(social.url, '_blank')}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 212, 255, 0.1)',
                  borderRadius: 3,
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 600,
                      mb: 3,
                      color: 'text.primary',
                    }}
                  >
                    Send Me a Message
                  </Typography>

                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: 'rgba(0, 212, 255, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(0, 212, 255, 0.5)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#00D4FF',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'text.secondary',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                              color: '#00D4FF',
                            },
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: 'rgba(0, 212, 255, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(0, 212, 255, 0.5)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#00D4FF',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'text.secondary',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                              color: '#00D4FF',
                            },
                          }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: 'rgba(0, 212, 255, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(0, 212, 255, 0.5)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#00D4FF',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'text.secondary',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                              color: '#00D4FF',
                            },
                          }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          multiline
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: 'rgba(0, 212, 255, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(0, 212, 255, 0.5)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#00D4FF',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'text.secondary',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                              color: '#00D4FF',
                            },
                          }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            startIcon={<Send />}
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
                            Send Message
                          </Button>
                        </motion.div>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: 8,
              pt: 4,
              borderTop: '1px solid rgba(0, 212, 255, 0.2)',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                mb: 2,
              }}
            >
              © 2024 Makarand Pundlik. All rights reserved.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontSize: '0.875rem',
              }}
            >
              Built with React, Material-UI, and Framer Motion
            </Typography>
          </Box>
        </motion.div>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
          icon={<CheckCircle />}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
