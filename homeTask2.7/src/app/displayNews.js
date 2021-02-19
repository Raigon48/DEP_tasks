import {getNews} from './apiCall';
import { createHeadlines } from './element';

export async function displayLatestNews() {
    let data = await getNews();
    if(data === "Error") {
        return window.alert("Can't fetch News");
    }
    console.log(data);
    createHeadlines(data);
}