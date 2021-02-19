export function createHeadlines(headlinesList) {
    let newsBlockTemplate = document.querySelector("#news-block-template");
    const blogList = document.querySelector(".blogList");

    headlinesList.forEach(data => {
        const {title, description, url, urlToImage} = data;
        const template = newsBlockTemplate.content.cloneNode(true);

        const anchor = template.querySelector('a');
        anchor.setAttribute(`href`, url);
        anchor.setAttribute(`target`, `_`);
        
        const image = template.querySelector('img');
        image.setAttribute(`src`, urlToImage);
        image.setAttribute(`alt`, title);
        
        const heading = template.querySelector('.heading');
        heading.textContent = `${title}`;

        const desc = template.querySelector('.description');
        desc.textContent = `${description}`;

        blogList.appendChild(template);

    })
}