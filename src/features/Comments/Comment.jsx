import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';

function Comment({ comment }) {
  const dateCreated = new Date(comment.created * 1000);
  return (
    <div className="bg-gray-100 mt-3 mb-3 p-3 rounded-lg shadow-md">
      <div className="text-xs font-light flex justify-between mb-3">
        <p>by u/{comment.author}</p>
        <p>
          <TimeAgo date={dateCreated} />
        </p>
      </div>
      <div>
        <p>{comment.body}</p>
      </div>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    created: PropTypes.number,
    author: PropTypes.string,
    body: PropTypes.string,
  }),
};

export default Comment;
