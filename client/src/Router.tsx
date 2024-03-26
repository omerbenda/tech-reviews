import { createBrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import FeedPage from './Pages/FeedPage/FeedPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/feed',
    element: <FeedPage />
  }
]);

export default router;
