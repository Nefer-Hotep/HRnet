import {
  Container,
  Typography,
  // Box,
  TextField,
  Stack,
  Select,
  MenuItem,
  Button,
  InputLabel,
  FormControl,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import states from '../data/statesData.json';

function CreateEmployee() {
  return (
    <>
      <Container maxWidth='sm'>
        <Typography variant='h4' align='center' gutterBottom>
          Create Employee
        </Typography>
        {/* <Box display='flex' flexDirection='column' alignItems='center'> */}
        <form>
          <Stack spacing={2} sx={{ width: '100%' }}>
            <TextField name='firstName' label='First Name' />
            <TextField name='lastName' label='Last Name' />
            <DatePicker name='dateOfBirth' label='Date of Birth' />
            <DatePicker name='startDate' label='Start Date' />
            <TextField name='street' label='Street' />
            <TextField name='city' label='City' />
            <FormControl fullWidth>
              <InputLabel id='stateId'>State</InputLabel>
              <Select labelId='stateId' name='state' label='State'>
                {states.map((state) => (
                  <MenuItem key={state.abbreviation} value={state.abbreviation}>
                    {state.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField name='zipCode' label='Zip Code' />
            <FormControl fullWidth>
              <InputLabel id='departmentIdLabel'>Department</InputLabel>
              <Select
                labelId='departmentIdLabel'
                name='department'
                label='Department'
              >
                <MenuItem value='Sales'>Sales</MenuItem>
                <MenuItem value='Marketing'>Marketing</MenuItem>
                <MenuItem value='Engineering'>Engineering</MenuItem>
                <MenuItem value='Human Resources'>Human Resources</MenuItem>
                <MenuItem value='Legal'>Legal</MenuItem>
              </Select>
            </FormControl>
            <Button type='submit' variant='contained' color='primary'>
              Save
            </Button>
          </Stack>
        </form>
        {/* </Box> */}
      </Container>
    </>
  );
}

export default CreateEmployee;
