var searchYouTube = (options = { key: window.YOUTUBE_API_KEY, query: null, max: 5 }, callback) => {
  // use jQuery send GET request (ajax)
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    dataType: 'json',
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      part: 'snippet',
      videoEmbeddable: true,
      maxResults: options.max,
      // videoDimension: 
    },
    success: data => callback(data)
  });
  // must accept callback that is invoked with the videos array from endpoint
  // accept options with:
  // query - string to search for
  // max number - default to 5
  // key - API access key
  // only return embeddable videos
};

window.searchYouTube = searchYouTube;