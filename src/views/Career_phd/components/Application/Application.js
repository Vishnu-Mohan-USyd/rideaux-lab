/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';

// Initialize EmailJS with your public key
emailjs.init('tCN1dFcOBCtCrk491');

// -------------- Validation Schema --------------
const validationSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid full name')
    .max(50, 'Please enter a valid full name')
    .required('Please specify your full name'),
  message: yup
    .string()
    .trim()
    .required('Please specify your message'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required'),
});

const Application = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  // Reference to the form so we can pass it to emailjs.sendForm
  const formRef = useRef(null);

  // Submission status for alerts
  const [submitStatus, setSubmitStatus] = useState({
    show: false,
    success: false,
    message: '',
  });

  // Track chosen file names just to display them in the buttons
  const [files, setFiles] = useState({
    cv: null,
    coverLetter: null,
  });

  // Form initial values
  const initialValues = {
    fullName: '',
    message: '',
    email: '',
  };

  // -------------- Handle File Changes --------------
  const handleFileChange = (type) => (event) => {
    if (event.target.files[0]) {
      setFiles((prev) => ({
        ...prev,
        [type]: event.target.files[0],
      }));
    }
  };

  // -------------- OnSubmit Handler --------------
  const onSubmit = async (values, { resetForm }) => {
    // We only call emailjs.sendForm if the form is valid
    // (Formik handles validation for the text fields).
    try {
      setSubmitStatus({
        show: true,
        success: false,
        message: 'Sending application...',
      });

      // Send the form reference to EmailJS.
      // MAKE SURE the input "name" attributes match your EmailJS template setup.
      const response = await emailjs.sendForm(
        'service_6q1p18j',    // Replace with your EmailJS service ID
        'template_j2kjadd',  // Replace with your EmailJS template ID
        formRef.current,     // The form reference
        'tCN1dFcOBCtCrk491'  // Your public key (can omit if already set with emailjs.init)
      );

      if (response.status === 200) {
        setSubmitStatus({
          show: true,
          success: true,
          message: 'Application sent successfully!',
        });
        resetForm();
        setFiles({ cv: null, coverLetter: null });

        // Hide success alert after a few seconds
        setTimeout(() => {
          setSubmitStatus({ show: false, success: false, message: '' });
        }, 5000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        show: true,
        success: false,
        message: `Failed to send application: ${error.message || 'Unknown error'}`,
      });
    }
  };

  // -------------- useFormik Hook --------------
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  // -------------- UI Layout --------------
  return (
    <Box maxWidth={800} margin={'0 auto'}>
      {submitStatus.show && (
        <Alert
          severity={submitStatus.success ? 'success' : 'error'}
          sx={{ marginBottom: 2 }}
        >
          {submitStatus.message}
        </Alert>
      )}

      <Box marginBottom={2}>
        <Typography
          variant={'h4'}
          sx={{ fontWeight: 700 }}
          gutterBottom
          align={'center'}
        >
          Enquire about this position
        </Typography>
        <Typography color="text.secondary" align={'center'}>
          Leave us your information below and we will get in touch with you!
        </Typography>
      </Box>

      {/*
        NOTE: The main difference:
        1) We add ref={formRef} to the Box so emailjs.sendForm can read it.
        2) We keep formik.handleSubmit to handle field validation,
           then call emailjs.sendForm inside onSubmit.
      */}
      <Box
        component={'form'}
        ref={formRef}
        onSubmit={formik.handleSubmit}
        encType="multipart/form-data"
        sx={{
          '& .MuiOutlinedInput-root.MuiInputBase-multiline': {
            padding: 0,
          },
          '& .MuiOutlinedInput-input': {
            background: theme.palette.background.paper,
            padding: 2,
          },
        }}
      >
        <Grid container spacing={isMd ? 4 : 2}>
          {/* Full Name */}
          <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Full name
            </Typography>
            <TextField
              placeholder="Your full name"
              variant="outlined"
              size="medium"
              name="fullName"
              fullWidth
              type="text"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              E-mail
            </Typography>
            <TextField
              placeholder="Your e-mail address"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>

          {/* CV Upload */}
          <Grid item xs={12} sm={6} data-aos="fade-up">
            <Button
              variant="outlined"
              component="label"
              color="primary"
              fullWidth
              size="large"
              startIcon={
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  width={20}
                  height={20}
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </Box>
              }
            >
              {files.cv ? files.cv.name : 'Upload CV'}
              {/* Important: "name" must match the parameter in your EmailJS template attachments */}
              <input
                type="file"
                name="cv_file"
                style={{ display: 'none' }}
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange('cv')}
              />
            </Button>
          </Grid>

          {/* Cover Letter Upload */}
          <Grid item xs={12} sm={6} data-aos="fade-up">
            <Button
              variant="outlined"
              component="label"
              color="primary"
              fullWidth
              size="large"
              startIcon={
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  width={20}
                  height={20}
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </Box>
              }
            >
              {files.coverLetter ? files.coverLetter.name : 'Upload Cover Letter'}
              {/* Must match the parameter in your EmailJS template attachments */}
              <input
                type="file"
                name="cover_letter_file"
                style={{ display: 'none' }}
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange('coverLetter')}
              />
            </Button>
          </Grid>

          {/* Message */}
          <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Message
            </Typography>
            <TextField
              placeholder="Your question about our services"
              variant="outlined"
              name="message"
              fullWidth
              multiline
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item container justifyContent="center" xs={12}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              size="large"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? 'Sending...' : 'Enquire now'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Application;
