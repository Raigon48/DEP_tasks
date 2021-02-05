async function searchYoutubeVideos() {
    let textInput = document.getElementById("textInput").value;
    nextPageToken = '';
    VIDEO_DATA = [];


    const videoList = await searchVideos(textInput);
    const videoIdList = videoList.map(video => video.id.videoId);
    const statsList = await getStatistics(videoIdList);
    VIDEO_DATA = await getCardsData(videoList, statsList);

    PAGE_STATE.currentPage = 1;
    PAGE_STATE.totalPage = VIDEO_DATA.length/PAGE_STATE.numberOfThumbnailPerPage;

    createHorizontalThumbnailList(PAGE_STATE.currentPage);
    createPagination();
}

function previousVideos() {
    if(PAGE_STATE.currentPage === 1) {
        return;
    }
    createHorizontalThumbnailList(PAGE_STATE.currentPage - 1);
}

async function nextVideos() {
    if(!(PAGE_STATE.currentPage === PAGE_STATE.totalPage)) {
        createHorizontalThumbnailList(PAGE_STATE.currentPage + 1);
        return;
    }

    let textInput = document.getElementById("textInput").value;

    const videoList = await nextPageVideos(textInput, nextPageToken);
    console.log(videoList); // remove later
    const videoIdList = videoList.map(video => video.id.videoId);
    const statsList = await getStatistics(videoIdList);
    console.log(statsList); // remove later
    result = await getCardsData(videoList, statsList);
    
    VIDEO_DATA.push(...result);
    console.log(VIDEO_DATA);
    PAGE_STATE.currentPage = PAGE_STATE.totalPage + 1;
    PAGE_STATE.totalPage = VIDEO_DATA.length/PAGE_STATE.numberOfThumbnailPerPage;

    createHorizontalThumbnailList(PAGE_STATE.currentPage);
    createPagination();
    
}

function getCardsData(videoList, statsList) {
    return videoList.map((item, index) => {
        const {snippet, id} = item;
        const {thumbnails, title, channelTitle, publishTime, description} = snippet;
        const {statistics} = statsList[index];

        return {
            thumbnail : thumbnails.default.url,
            title : title,
            description : description,
            author : channelTitle,
            publishTime : new Date(publishTime),
            views : `${statistics.viewCount} views`,
            videoId : id.videoId
        }
    })
}


const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", searchYoutubeVideos);