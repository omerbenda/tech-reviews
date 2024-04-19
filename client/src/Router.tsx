import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import FeedPage from './Pages/FeedPage/FeedPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';

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
  {
    path: '/profile/:userId',
    element: <ProfilePage />,
  },
]);

export default router;
