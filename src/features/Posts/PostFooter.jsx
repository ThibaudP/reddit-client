import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';

function PostFooter({ author, createdAt, numberOfComments, toggleComments }) {
  return (
    <div className="flex justify-between pt-1 mt-2 text-xs border-t">
      <div>
        by{' '}
        <a href={`https://www.reddit.com/u/${author}`} className="">
          u/{author}
        </a>
      </div>
      <div>
        <TimeAgo date={createdAt * 1000} />
      </div>
      <div
        className="cursor-pointer hover:text-blue-800"
        onClick={toggleComments}
      >
        {numberOfComments} comments
      </div>
    </div>
  );
}

PostFooter.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.number,
  numberOfComments: PropTypes.number,
  toggleComments: PropTypes.bool,
};

export default PostFooter;
