import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Form from '../layout/Form';
import QuestionPage from '../layout/QuestionPage';
import { ReactNode } from 'react';
import NotFound from '../layout/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Form />,
    errorElement: <NotFound />,
  },
  {
    path: '/questions',
    element: <QuestionPage />,
  },
]);
// const router = createBrowserRouter({ routes });
// interface RouterProps {
//   children: ReactNode;
// }
