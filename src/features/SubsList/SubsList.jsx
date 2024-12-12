import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadPopularSubs,
  selectIsLoadingSubsList,
  selectSubsList,
} from './subsListSlice';
import { FaReddit } from 'react-icons/fa';
import './SubsList.css';
import Skeleton from 'react-loading-skeleton';

function SubsList() {
  const dispatch = useDispatch();
  const subsList = useSelector(selectSubsList);
  const isLoadingSubsList = useSelector(selectIsLoadingSubsList);
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(loadPopularSubs());
  }, [dispatch]);

  return (
    <div className="bg-white shadow-lg mb-5 mr-4 p-5 lg:w-1/4 hidden lg:block xl:block h-fit rounded-lg">
      <h3 className="font-semibold header-title">Subreddits</h3>
      <ul>
        {isLoadingSubsList && Array.from({ length: 5 }).map((v, i) => <Skeleton key={i} height={40} className='mt-3 rounded-lg' />)}
        {subsList.map((sub) => (
          <li
            key={sub.id}
            className={
              'p-3 flex justify-start ' +
              (pathname === sub.url && 'current-sub')
            }
          >
            {sub.icon_img ? (
              <img src={sub.icon_img} className="h-6 w-6 self-center mr-4" />
            ) : (
              <FaReddit className="h-6 w-6 self-center mr-4" />
            )}
            <Link to={sub.url}>{sub.display_name_prefixed}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubsList;
