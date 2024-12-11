import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

import { fetchPostsForSubreddit, fetchPopularSubs } from './reddit.js';

describe('fetchPostsForSubreddit', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('fetches posts for a given subreddit', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        data: {
          children: [
            {
              data: {
                title: 'post 1',
                url: 'http://www.google.fr',
                selftext: 'je suis le post 1',
              },
            },
            {
              data: {
                title: 'post 2',
                url: 'http://www.free.fr',
                selftext: 'je suis le post 2',
              },
            },
          ],
        },
      })
    );

    const subreddit = 'france';
    const result = await fetchPostsForSubreddit(subreddit);

    expect(fetch).toHaveBeenCalledWith('https://www.reddit.com/r/france.json');
    expect(result).toEqual([
      {
        title: 'post 1',
        url: 'http://www.google.fr',
        selftext: 'je suis le post 1',
      },
      {
        title: 'post 2',
        url: 'http://www.free.fr',
        selftext: 'je suis le post 2',
      },
    ]);
    // console.log(result);
  });
});

describe('fetchPopularSubs', () => {
  it('fetches the list of popular subreddits', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        data: {
          children: [
            {
              data: {
                display_name: 'France',
                display_name_prefixed: 'r/France',
                url: 'r/france/',
              },
            },
            {
              data: {
                display_name: 'AskReddit',
                display_name_prefixed: 'r/AskReddit',
                url: 'r/askreddit/',
              },
            },
          ],
        },
      })
    );

    const result = await fetchPopularSubs();

    expect(fetch).toHaveBeenCalledWith(
      'https://www.reddit.com/subreddits/popular.json'
    );
    expect(result).toEqual([
      {
        display_name: 'France',
        display_name_prefixed: 'r/France',
        url: 'r/france/',
      },
      {
        display_name: 'AskReddit',
        display_name_prefixed: 'r/AskReddit',
        url: 'r/askreddit/',
      },
    ]);
  });
});
