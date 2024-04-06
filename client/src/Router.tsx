import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import FeedPage from './Pages/FeedPage/FeedPage';

const router = createBrowserRouter([
  {
    path: '*',
    element: <Navigate to="/" replace={true} />,
  },
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/feed',
    element: <FeedPage />,
  },
]);

export default router;
