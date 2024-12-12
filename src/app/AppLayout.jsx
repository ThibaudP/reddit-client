import { Link, Outlet } from 'react-router-dom';
import './App.css';
import SubsList from '../features/SubsList/SubsList';

function AppLayout() {
  return (
    <>
      <div className="w-full h-14 shadow-lg flex mb-5 bg-white">
        <h1 className="header-title content-center ml-4 font-semibold text-xl">
          <Link to="/">RedditClient</Link>
        </h1>
      </div>
      <div className="flex">
        <Outlet />
        <SubsList />
      </div>
    </>
  );
}

export default AppLayout;
