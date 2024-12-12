import { Link, Outlet } from 'react-router-dom';
import './App.css';
import SubsList from '../features/SubsList/SubsList';

function AppLayout() {
  return (
    <>
      <div id='top' className="w-full h-16 shadow-lg flex mb-5 bg-white rounded-b-lg fixed">
        <h1 className="header-title content-center ml-4 font-semibold text-xl">
          <Link to="/" reloadDocument>RedditClient</Link>
        </h1>
      </div>
      <div className="flex pt-20">
        <Outlet />
        <SubsList />
      </div>
    </>
  );
}

export default AppLayout;
