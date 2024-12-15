import { useDispatch, useSelector } from 'react-redux';
import { loadCommentsForPost, selectComments } from './commentsSlice';
import { useEffect } from 'react';
import Comment from './Comment';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';

function Comments({ postPermalink, postId }) {
  const dispatch = useDispatch();
  const allComments = useSelector(selectComments);
  const thisComments = allComments[postId];

  useEffect(() => {
    dispatch(loadCommentsForPost(postPermalink));
  }, [postPermalink, dispatch]);

  return (
    <div>
      {thisComments &&
        thisComments
          .slice(0, -1) // slice needed because the last item returned by the API is not a comment but a list of additional comment ids
          .map((comment) => <Comment comment={comment} key={comment.id} />)}

      {!thisComments &&
        Array.from({ length: 5 }).map((v, i) => (
          <Skeleton key={i} height={50} className="rounded mb-3 shadow-lg" />
        ))}
    </div>
  );
}

Comments.propTypes = {
  postPermalink: PropTypes.string,
  postId: PropTypes.number,
};

export default Comments;
