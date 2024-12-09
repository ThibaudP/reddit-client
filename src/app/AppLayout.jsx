import { Outlet } from 'react-router-dom';
import './App.css';

function AppLayout() {
  return (
    <>
      <div className="w-full h-14 shadow-lg flex mb-5">
        <h1 className="header-title content-center ml-4 font-semibold text-xl">RedditClient</h1>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
