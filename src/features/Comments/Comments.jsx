import { useDispatch, useSelector } from 'react-redux';
import { loadCommentsForPost, selectComments } from './commentsSlice';
import { useEffect } from 'react';
import Comment from './Comment';

function Comments({ postPermalink, postId }) {
  const dispatch = useDispatch();
  const allComments = useSelector(selectComments);
  const thisComments = allComments[postId];

  useEffect(() => {
    dispatch(loadCommentsForPost(postPermalink));
  }, [postPermalink]);

  return (
    <div>
      {thisComments &&
        thisComments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
    </div>
  );
}

export default Comments;
