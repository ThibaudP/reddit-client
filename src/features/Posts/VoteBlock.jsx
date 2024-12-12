import PropTypes from 'prop-types';
import {
  BiUpvote,
  BiSolidUpvote,
  BiDownvote,
  BiSolidDownvote,
} from 'react-icons/bi';

function VoteBlock({ upVote, downVote, score, vote }) {
  const formatVotes = (votes) => {
    if (votes < 1000) {
      return String(votes);
    } else {
      return String((votes / 1000).toFixed(1)) + 'k';
    }
  };

  return (
    <div id="vote-block" className="flex flex-col min-w-16 pr-2 items-center">
      {vote !== 1 && (
        <BiUpvote
          size={25}
          className="hover:bg-slate-300 hover:text-upvote rounded"
          cursor="pointer"
          onClick={upVote}
        />
      )}
      {vote === 1 && (
        <BiSolidUpvote
          size={25}
          className="hover:bg-slate-300 text-upvote rounded"
          cursor="pointer"
          onClick={upVote}
        />
      )}
      <p
        className={
          'font-semibold ' +
          (vote === 1 ? 'upvote-color' : vote === -1 ? 'downvote-color' : '')
        }
      >
        {formatVotes(score)}
      </p>
      {vote !== -1 && (
        <BiDownvote
          size={25}
          className="hover:bg-slate-300 hover:text-downvote rounded"
          cursor="pointer"
          onClick={downVote}
        />
      )}
      {vote === -1 && (
        <BiSolidDownvote
          size={25}
          className="hover:bg-slate-300 text-downvote rounded"
          cursor="pointer"
          onClick={downVote}
        />
      )}
    </div>
  );
}

export default VoteBlock;

VoteBlock.propTypes = {
  upVote: PropTypes.func,
  downVote: PropTypes.func,
  score: PropTypes.number,
  vote: PropTypes.number,
};
