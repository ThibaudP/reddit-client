const redditUrl = 'https://www.reddit.com';

const fetchPostsForSubreddit = async (subreddit) => {
  const endpoint = `/r/${subreddit}`;
  const url = redditUrl + endpoint + '.json';

  const response = await fetch(url);
  const json = await response.json();
  const data = json.data.children.map((child) => child.data);

  return data;
};

const fetchPopularSubs = async () => {
  const endpoint = '/subreddits/popular.json';
  const url = redditUrl + endpoint;

  const response = await fetch(url);
  const json = await response.json();
  const data = json.data.children.map((child) => child.data);

  return data;
};

const fetchCommentsForPost = async (postPermalink) => {
  const endpoint = postPermalink.slice(0, -1);
  const url = redditUrl + endpoint + '.json';

  const response = await fetch(url);
  const json = await response.json();
  const data = json[1].data.children.map((child) => child.data);

  return data;
};

export { fetchPostsForSubreddit, fetchPopularSubs, fetchCommentsForPost };
