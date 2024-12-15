import { Link, Outlet } from 'react-router-dom';
import './App.css';
import SubsList from '../features/SubsList/SubsList';
import SearchBar from '../features/SearchBar/SearchBar';

function AppLayout() {
  return (
    <>
      <div
        id="top"
        className="w-full h-16 shadow-lg flex mb-5 bg-white rounded-b-lg fixed justify-between pr-4 pl-4"
      >
        <h1 className="header-title content-center font-semibold text-xl">
          <Link to="/">RedditClient</Link>
        </h1>
        <SearchBar />
      </div>
      <div className="flex pt-20">
        <Outlet />
        <SubsList />
      </div>
    </>
  );
}

export default AppLayout;
