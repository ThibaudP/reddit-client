import Skeleton from 'react-loading-skeleton';

function PostSkeleton() {
  return (
    <div className="p-4 pl-5 pr-10 shadow-xl md:ml-4 md:mr-4 mb-4 sm:ml-0 sm:mr-0 bg-white flex flex-col justify-start rounded-lg ">
      <Skeleton height={40} className="mb-4" />
      <Skeleton height={150} className="mb-4" />
      <Skeleton height={20} className="mb-4" />
    </div>
  );
}

export default PostSkeleton;
