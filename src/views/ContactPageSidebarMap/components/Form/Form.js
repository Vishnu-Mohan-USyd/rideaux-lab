/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import emailjs from '@emailjs/browser';

import Container from 'components/Container'; // Adjust this import if needed

// ------------------- 1) Validation Schema -------------------
const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your first name'),
  lastName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your last name'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  message: yup
    .string()
    .trim()
    .required('Please specify your message'),
});

// ------------------- 2) Main Contact Component -------------------
const Contact = () => {
  const theme = useTheme();

  // -------------- A) Submission Alert State --------------
  const [submitStatus, setSubmitStatus] = useState({
    show: false,
    success: false,
    message: '',
  });

  // -------------- B) Initialize EmailJS --------------
  // If you prefer, you can place this in a useEffect or in a separate file.
  emailjs.init('tCN1dFcOBCtCrk491'); // <-- Replace with your actual Public Key

  // ------------------- 3) Left Side (Form) -------------------
  const LeftSide = () => {
    const initialValues = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    };

    // -------------- C) onSubmit Handler --------------
    const onSubmit = async (values, { resetForm }) => {
      try {
        // Show "sending..." or something similar
        setSubmitStatus({
          show: true,
          success: false,
          message: 'Sending message...',
        });

        // Build the template parameters (match with your EmailJS template)
        const templateParams = {
          from_name: `${values.firstName} ${values.lastName}`,
          from_email: values.email,
          message: values.message,
          // You can add more fields if your EmailJS template has them
          // e.g. to_name, phone, etc.
        };

        // Send email with EmailJS
        const response = await emailjs.send(
          'service_6q1p18j',      // <-- Replace with your actual service ID
          'template_j2kjadd',    // <-- Replace with your actual template ID
          templateParams
        );

        // Check response status
        if (response.status === 200) {
          // Success
          setSubmitStatus({
            show: true,
            success: true,
            message: 'Thank you! Your message was sent successfully.',
          });
          // Reset form fields
          resetForm();
        } else {
          // Some unexpected status code
          setSubmitStatus({
            show: true,
            success: false,
            message: 'Unexpected response from EmailJS.',
          });
        }
      } catch (error) {
        // Error from the try/catch (network, server, etc.)
        setSubmitStatus({
          show: true,
          success: false,
          message: `Failed to send message: ${error.message || 'Unknown error'}`,
        });
      }

      // Hide alert automatically after 5 seconds (optional)
      setTimeout(() => {
        setSubmitStatus({ show: false, success: false, message: '' });
      }, 5000);
    };

    // -------------- D) Formik Hook --------------
    const formik = useFormik({
      initialValues,
      validationSchema: validationSchema,
      onSubmit,
    });

    return (
      <Box>
        {/* A small section above the form */}
        <Box marginBottom={4}>
          <Typography variant={'h3'} sx={{ fontWeight: 700 }} gutterBottom>
            Contact us
          </Typography>
          <Typography color="text.secondary">
            Interested in joining our lab or collaborating on research? We welcome inquiries
            from potential students, postdocs, and research partners who share our passion
            for understanding visual perception and brain function.
          </Typography>
        </Box>

        {/* Show alert if needed */}
        {submitStatus.show && (
          <Box marginBottom={2}>
            <Alert severity={submitStatus.success ? 'success' : 'error'}>
              {submitStatus.message}
            </Alert>
          </Box>
        )}

        {/* Our contact form */}
        <Box>
          <form noValidate onSubmit={formik.handleSubmit}>
            <Grid container spacing={4}>
              {/* First Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ height: 54 }}
                  label="First name"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="firstName"
                  fullWidth
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
              </Grid>

              {/* Last Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ height: 54 }}
                  label="Last name"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="lastName"
                  fullWidth
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>

              {/* Email */}
              <Grid item xs={12}>
                <TextField
                  sx={{ height: 54 }}
                  label="Email"
                  type="email"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="email"
                  fullWidth
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>

              {/* Message */}
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  multiline
                  rows={6}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="message"
                  fullWidth
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={formik.touched.message && formik.errors.message}
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button
                  sx={{ height: 54, minWidth: 150 }}
                  variant="contained"
                  color="primary"
                  size="medium"
                  type="submit"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? 'Sending...' : 'Submit'}
                </Button>
              </Grid>

              {/* Subtext */}
              <Grid item xs={12}>
                <Typography color="text.secondary">
                  We'll get back to you in 1-2 business days.
                </Typography>
              </Grid>

              {/* Divider */}
              <Grid item xs={12}>
                <Divider />
              </Grid>

              {/* Footer text or policies */}
              <Grid item xs={12}>
                <Box>
                  <Typography component="p" variant="body2" align="left">
                    By clicking on "submit" you agree to our{' '}
                    <Box
                      component="a"
                      href=""
                      color={theme.palette.text.primary}
                      fontWeight={'700'}
                    >
                      Privacy Policy
                    </Box>
                    ,{' '}
                    <Box
                      component="a"
                      href=""
                      color={theme.palette.text.primary}
                      fontWeight={'700'}
                    >
                      Data Policy
                    </Box>{' '}
                    and{' '}
                    <Box
                      component="a"
                      href=""
                      color={theme.palette.text.primary}
                      fontWeight={'700'}
                    >
                      Cookie Policy
                    </Box>
                    .
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    );
  };

  // ------------------- 4) Right Side (Map) -------------------
  const RightSide = () => {
    return (
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.1290259241277!2d151.18478947644078!3d-33.88633071996837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b1d4d43ebb95%3A0x2af3154016b55f7b!2sGriffith%20Taylor%20Building!5e0!3m2!1sen!2sau!4v1736307036694!5m2!1sen!2sau"
        style={{
          minHeight: 300,
          filter:
            theme.palette.mode === 'dark'
              ? 'grayscale(0.5) opacity(0.7)'
              : 'none',
        }}
      />
    );
  };

  // ------------------- 5) Overall Layout -------------------
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          position={'relative'}
        >
          {/* Left side: Contact form */}
          <Box
            display={'flex'}
            alignItems={'center'}
            width={1}
            order={{ xs: 2, md: 1 }}
          >
            <Container>
              <LeftSide />
            </Container>
          </Box>

          {/* Right side: Map */}
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
              minHeight: { xs: 300, md: 600 },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '50vw' },
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    left: '0%',
                    width: 1,
                    height: 1,
                    position: { xs: 'relative', md: 'absolute' },
                  }}
                >
                  <RightSide />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider />
    </Box>
  );
};

export default Contact;
