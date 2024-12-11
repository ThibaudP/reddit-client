import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadPopularSubs, selectSubsList } from './subsListSlice';

function SubsList() {
  const dispatch = useDispatch();
  const subsList = useSelector(selectSubsList);

  useEffect(() => {
    dispatch(loadPopularSubs());
  }, [subsList]);

  return (
    <div className="bg-white shadow-lg flex mb-5 mr-4 p-5 lg:w-1/4 xl:w-1/3 sm:hidden lg:block xl:block">
      <h3 className="text-semibold ">Subreddit list</h3>
      <ul className="">
        {subsList.map((sub) => (
          <li key={sub.id}>
            <Link to={sub.url}>{sub.display_name_prefixed}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubsList;
