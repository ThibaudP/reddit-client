function PostFooter({ author, createdAt, numberOfComments, toggleComments }) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString('en-US', {
      weekday: 'long',
      month: 'long',
      year: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  };

  return (
    <div className="flex justify-between pt-1 mt-2 text-xs border-t">
      <div>
        by{' '}
        <a href={`https://www.reddit.com/u/${author}`} className="">
          u/{author}
        </a>
      </div>
      <div>{formatDate(createdAt)}</div>
      <div
        className="cursor-pointer hover:text-blue-800"
        onClick={toggleComments}
      >
        {numberOfComments} comments
      </div>
    </div>
  );
}

export default PostFooter;
