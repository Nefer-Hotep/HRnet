import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../service/employeeSlice';
import { Container, Typography, TextField, Stack, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import departmentOptions from '../data/departmentData';
import states from '../data/statesData.json';
import SelectMenu from '../components/SelectMenu';
import DialogModal from 'neferhotep-hrnet-modal';

function CreateEmployee() {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [employeeData, setEmployeeData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    startDate: null,
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  // Separate handlers for date fields because DatePicker component returns a Date object
  const handleDateChange = (name, newValue) => {
    setEmployeeData({
      ...employeeData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Serialize date fields
    const serializedData = {
      ...employeeData,
      dateOfBirth: employeeData.dateOfBirth
        ? dayjs(employeeData.dateOfBirth).format('MM/DD/YYYY')
        : null,
      startDate: employeeData.startDate
        ? dayjs(employeeData.startDate).format('MM/DD/YYYY')
        : null,
    };
    dispatch(addEmployee(serializedData));
    setOpenModal(true)
  };

  return (
    <>
      <Container maxWidth='sm'>
        <Typography variant='h4' align='center' margin={'20px'} gutterBottom>
          Create Employee
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} sx={{ width: '100%' }}>
            <TextField
              name='firstName'
              label='First Name'
              value={employeeData.firstName}
              onChange={handleChange}
            />
            <TextField
              name='lastName'
              label='Last Name'
              value={employeeData.lastName}
              onChange={handleChange}
            />
            <DatePicker
              name='dateOfBirth'
              label='Date of Birth'
              value={employeeData.dateOfBirth}
              onChange={(newValue) => handleDateChange('dateOfBirth', newValue)}
            />
            <DatePicker
              name='startDate'
              label='Start Date'
              value={employeeData.startDate}
              onChange={(newValue) => handleDateChange('startDate', newValue)}
            />
            <TextField
              name='street'
              label='Street'
              value={employeeData.street}
              onChange={handleChange}
            />
            <TextField
              name='city'
              label='City'
              value={employeeData.city}
              onChange={handleChange}
            />
            <SelectMenu
              label='State'
              name='state'
              value={employeeData.state}
              options={states}
              handleChange={handleChange}
            />
            <TextField
              name='zipCode'
              label='Zip Code'
              value={employeeData.zipCode}
              onChange={handleChange}
            />
            <SelectMenu
              label='Department'
              name='department'
              value={employeeData.department}
              options={departmentOptions}
              handleChange={handleChange}
            />
            <Button type='submit' variant='contained' color='primary'>
              Save
            </Button>
          </Stack>
        </form>
      </Container>
      <DialogModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        message={'Employee Created !'}
      />
    </>
  );
}

export default CreateEmployee;
