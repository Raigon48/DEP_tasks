
let searchTemplate = document.querySelector('#searchTemplate');
let clone = document.importNode(searchTemplate.content , true);
document.querySelector('body').appendChild(clone);


function createHorizontalThumbnailList(pageNumber) {
    PAGE_STATE.currentPage = pageNumber;
    const horizontalUL = createThumbnail(pageNumber);
    if(document.querySelector('.horizontalList')) return;
    document.querySelector('.head').insertAdjacentElement('afterend', horizontalUL);
}

function createThumbnail(pageNumber) {
    const start = (pageNumber-1)*NUMBER_OF_CARDS;
    const end = pageNumber*5;

    if(document.querySelector('.horizontalList')) {
        const horizontalList = document.querySelector('.horizontalList');
        horizontalList.style.transition = `transform 0.4s ease-in-out`;
        horizontalList.style.transform = 'translateX(-100vw)';
        horizontalList.parentNode.removeChild(horizontalList);
    }

    const horizontalList = document.createElement('ul');
    horizontalList.classList.add("horizontalList");
    
    let thumbnailTemplate = document.querySelector("#thumbnailTemplate");

    VIDEO_DATA.forEach((videoItem, index) => {
        if(index >= start && index < end) {
            const {thumbnail, author, title, description, publishTime, views, videoId} = videoItem;
            const thumbnailClone = thumbnailTemplate.content.cloneNode(true);

            const anchor = thumbnailClone.querySelector('a');
            anchor.setAttribute(`href`, `https://www.youtube.com/watch?v=${videoId}`);
            anchor.setAttribute(`target`, `_`);
            const image = thumbnailClone.querySelector("img");
            image.setAttribute("src", thumbnail);
            image.setAttribute("alt", title);
            const titleNode = thumbnailClone.querySelector('.title');
            titleNode.textContent = `${title}`;
            const authorNode = thumbnailClone.querySelector(".author");
            authorNode.textContent = `${author}`;
            const publishDateNode = thumbnailClone.querySelector(".published-date");
            publishDateNode.textContent = `${publishTime.getDate()}/${publishTime.getMonth() + 1}/${publishTime.getFullYear()}`;
            const viewsNode = thumbnailClone.querySelector(".count-of-views");
            viewsNode.textContent = `${views}`
            const descriptionNode = thumbnailClone.querySelector(".description");
            descriptionNode.textContent = `${description}`;

            const listItem = document.createElement("li");
            listItem.style.width = (window.innerWidth - 100)/PAGE_STATE.numberOfThumbnailPerPage;
            listItem.appendChild(thumbnailClone);
            horizontalList.appendChild(listItem);
        }
    })
    return horizontalList;
}


function createPagination() {
    if(document.querySelector('.paginateComponent')) {
        const delNode = document.querySelector('.paginateComponent');
        delNode.parentNode.removeChild(delNode);
    }
    if(!VIDEO_DATA) {
        return;
    }
    const paginateNode = document.createElement('div');
    paginateNode.classList.add("paginateComponent");

    const prevNode = document.createElement('button');
    prevNode.classList.add('paginateBtn');
    prevNode.textContent = 'PREV';
    prevNode.addEventListener('click', previousVideos);
    paginateNode.appendChild(prevNode);

    for(let i=1 ; i<=PAGE_STATE.totalPage ; i++) {
        const numNode = document.createElement('button');
        numNode.classList.add('paginateBtn');
        numNode.textContent = `${i}`;
        numNode.addEventListener('click', () => createHorizontalThumbnailList(i));
        paginateNode.appendChild(numNode);
    }

    const nextNode = document.createElement('button');
    nextNode.classList.add('paginateBtn');
    nextNode.textContent = 'NEXT';
    nextNode.addEventListener('click', nextVideos);
    paginateNode.appendChild(nextNode);

    document.querySelector('body').appendChild(paginateNode);
}

