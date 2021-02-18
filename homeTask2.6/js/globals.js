const BASE_URL = "https://www.googleapis.com/youtube/v3/";
const API_KEY = 'AIzaSyAuxtHuY5yrXL76BurFia85Q1XqzyqB2L4';
const MAX_RESULT = 15;

let VIDEO_DATA = [];

let nextPageToken = '';
let NUMBER_OF_CARDS = 5;

const PAGE_STATE = {
    currentPage : 1,
    totalPage : 0,
    numberOfThumbnailPerPage : 5
}