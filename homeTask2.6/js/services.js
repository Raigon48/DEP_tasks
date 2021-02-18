function searchVideos(query) {
    let URL = `${BASE_URL}search?key=${API_KEY}&type=video&part=snippet&maxResults=${MAX_RESULT}&q=${query}`;

    return api(URL)
        .then(data => {
            nextPageToken = data.nextPageToken;
            return data.items;
        }, err => Promise.reject(err));
}

function getStatistics(videoIdList) {
    let videosString = videoIdList.join(`,`);
    let URL = `${BASE_URL}videos?key=${API_KEY}&id=${videosString}&part=snippet,statistics`;

    return api(URL)
            .then(stats => stats.items, err => Promise.reject(err));
}

function nextPageVideos(query, nextPageToken) {
    let URL = `${BASE_URL}search?key=${API_KEY}&type=video&part=snippet&maxResults=${MAX_RESULT}&q=${query}&pageToken=${nextPageToken}`;

    return api(URL) 
        .then(data => data.items, err => Promise.reject(err));
}