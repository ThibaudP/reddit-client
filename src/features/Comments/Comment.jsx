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
      <div className=''>
        <p>{comment.body}</p>
      </div>
    </div>
  );
}

export default Comment;
