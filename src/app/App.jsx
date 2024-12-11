import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import AppLayout from './AppLayout.jsx';
import Posts from '../features/Posts/Posts.jsx';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Posts />} />
        <Route path="/r/:subreddit" element={<Posts />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
