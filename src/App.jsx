import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Header from './layout/Header';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      { path: '/', element: <CreateEmployee /> },
      { path: 'employee-list', element: <EmployeeList /> },
    ],
  },
]);

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RouterProvider router={router} />
    </LocalizationProvider>
  );
}

export default App;
