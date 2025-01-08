import React, { useState } from 'react';
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

  // Submission status for alerts
  const [submitStatus, setSubmitStatus] = useState({
    show: false,
    success: false,
    message: '',
  });

  // Storing files in state
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

  // -------------- Convert File to Base64 --------------
  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      if (!file) {
        resolve('');
        return;
      }

      // Limit set to 50 MB
      if (file.size > 50 * 1024 * 1024) {
        reject(new Error('File size must be less than 50MB'));
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // reader.result is a full data URL: "data:<MIME type>;base64,<encoded data>"
        // We just need the base64 part if using EmailJS's built-in attachments approach
        // but we can pass the entire data URL as well (with "data:...;base64,").
        resolve(reader.result);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  // -------------- OnSubmit Handler --------------
  const onSubmit = async (values, { resetForm }) => {
    try {
      setSubmitStatus({
        show: true,
        success: false,
        message: 'Sending application...',
      });

      // Convert both files to Base64
      let cvBase64 = '';
      let coverLetterBase64 = '';

      try {
        cvBase64 = files.cv ? await convertFileToBase64(files.cv) : '';
      } catch (error) {
        setSubmitStatus({
          show: true,
          success: false,
          message: `CV file error: ${error.message}`,
        });
        return;
      }

      try {
        coverLetterBase64 = files.coverLetter
          ? await convertFileToBase64(files.coverLetter)
          : '';
      } catch (error) {
        setSubmitStatus({
          show: true,
          success: false,
          message: `Cover letter file error: ${error.message}`,
        });
        return;
      }

      // ----------------------
      // Build template params
      // ----------------------
      // 'cv_file' and 'cover_letter_file' should match the variables
      // you set up in your EmailJS template.
      const templateParams = {
        to_email: 'your-email@example.com',  // Replace with your actual email
        from_name: values.fullName,
        from_email: values.email,
        message: values.message,
        // Pass entire data URLs for EmailJS to handle
        cv_file: cvBase64,
        cover_letter_file: coverLetterBase64,
      };

      // -------------- Send email using EmailJS --------------
      const response = await emailjs.send(
        'service_6q1p18j',  // Replace with your EmailJS service ID
        'template_j2kjadd', // Replace with your EmailJS template ID
        templateParams
      );

      if (response.status === 200) {
        setSubmitStatus({
          show: true,
          success: true,
          message: 'Application sent successfully!',
        });
        resetForm();
        setFiles({ cv: null, coverLetter: null });

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
          Apply for this job
        </Typography>
        <Typography color="text.secondary" align={'center'}>
          We develop intelligent solutions for companies to reduce their
          operational costs, increase their profitability and improve service
          quality.
        </Typography>
      </Box>

      <Box
        component={'form'}
        onSubmit={formik.handleSubmit}
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
              <input
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileChange('cv')}
                accept=".pdf,.doc,.docx"
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
              <input
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileChange('coverLetter')}
                accept=".pdf,.doc,.docx"
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
              {formik.isSubmitting ? 'Sending...' : 'Apply now'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Application;
