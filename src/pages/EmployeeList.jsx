import { Typography, Container } from '@mui/material';
import { Box } from '@mui/material';
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 1,
        pb: 0,
      }}
    >
      <GridToolbarQuickFilter />
    </Box>
  );
}

function EmployeeList() {
  const employees = useSelector((state) => state.employees.employees);

  const columns = [
    { field: 'firstName', headerName: 'First Name', width: 130 },
    { field: 'lastName', headerName: 'Last Name', width: 130 },
    { field: 'startDate', headerName: 'Start Date', width: 130 },
    { field: 'department', headerName: 'Department', width: 130 },
    { field: 'dateOfBirth', headerName: 'Date of Birth', width: 130 },
    { field: 'street', headerName: 'Street', width: 130 },
    { field: 'city', headerName: 'City', width: 140 },
    { field: 'state', headerName: 'State', width: 90 },
    { field: 'zipCode', headerName: 'Zip Code', width: 130 },
  ];

 

  return (
    <>
      <Container maxWidth='lg'>
        <Typography align='center' margin={'20px'} variant='h4' gutterBottom>
          Employee List
        </Typography>
        <DataGrid
          rows={employees}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          slots={{ toolbar: QuickSearchToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              
            },
          }}
          autoHeight
        />
      </Container>
    </>
  );
}

export default EmployeeList;
