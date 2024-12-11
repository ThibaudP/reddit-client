const redditUrl = 'https://www.reddit.com/';

const fetchPostsForSubreddit = async (subreddit) => {
  const endpoint = `r/${subreddit}`;
  const url = redditUrl + endpoint + '.json';

  const response = await fetch(url);
  const json = await response.json();
  const data = json.data.children.map((child) => child.data);

  return data;
};

const fetchPopularSubs = async () => {
  const endpoint = 'subreddits/popular.json';
  const url = redditUrl + endpoint;

  const response = await fetch(url);
  const json = await response.json();
  const data = json.data.children.map((child) => child.data);

  return data;
};

export { fetchPostsForSubreddit, fetchPopularSubs };
