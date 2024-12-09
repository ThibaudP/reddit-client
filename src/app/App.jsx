import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import AppLayout from './AppLayout.jsx';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<AppLayout />}>
      <Route index element={<p>Coucou index</p>} />
      <Route path='/r/:subreddit' element={<><p>coucou subreddit</p></>} />
      <Route path='*' element={<Navigate to='/' />} />
    </Route>)
  );
  return <RouterProvider router={router} />;
}

export default App;
