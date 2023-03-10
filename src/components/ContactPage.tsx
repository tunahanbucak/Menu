import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';

const ContactPage = () => {
  return (
    <Box sx={{
      position: 'fixed',
      bottom: '0',
      right: '0',
      padding: '15rem'
    }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Address
              </Typography>
              <Typography variant="body1" gutterBottom>
                123 Main St, Anytown USA
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Contact Information
              </Typography>
              <Typography variant="body1" gutterBottom>
                Phone: 555-555-5555
              </Typography>
              <Typography variant="body1" gutterBottom>
                Email: info@example.com
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;
