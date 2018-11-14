var searchYouTube = (options = { key: window.YOUTUBE_API_KEY, query: null, max: 5 }, callback) => {
  // use jQuery send GET request (ajax)
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    dataType: 'json',
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      type: 'video',
      part: 'snippet',
      videoEmbeddable: true,
      maxResults: options.max,
    },
    success: data => callback(data.items)
  });

};

window.searchYouTube = searchYouTube;