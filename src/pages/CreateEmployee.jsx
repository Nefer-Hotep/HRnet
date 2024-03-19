import { Container, Typography, Box, TextField, Stack } from '@mui/material';

function CreateEmployee() {
  return (
    <>
      <Container maxWidth='sm'>
        <Typography variant='h3' align='center' gutterBottom>
          Create Employee
        </Typography>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Stack spacing={2} sx={{ width: '100%' }}>
            <TextField name='firstName' label='First Name' />
            <TextField name='lastName' label='Last Name' />
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default CreateEmployee;
