import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
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
  return <RouterProvider router={router} />;
}

export default App;
