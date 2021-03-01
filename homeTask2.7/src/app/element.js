export function createHeadlines(headlinesList) {
    const blogList = document.querySelector(".blogList");

    headlinesList.forEach(data => {
        const {title, description, url, urlToImage} = data;
        const template = document.createElement('article');

        const figure = document.createElement('figure');
        const section = document.createElement('section');
        template.appendChild(figure);
        template.appendChild(section);
        
        const image = document.createElement('img');
        image.setAttribute(`src`, urlToImage);
        image.setAttribute(`alt`, title);
        figure.appendChild(image);

        
        const heading = document.createElement('h2');
        heading.textContent = `${title}`;
        section.appendChild(heading);

        const desc = document.createElement('p');
        desc.textContent = `${description}`;
        section.appendChild(desc);

        const anchor = document.createElement('a');
        anchor.setAttribute(`href`, url);
        anchor.setAttribute(`target`, `_`);
        section.appendChild(anchor);


        blogList.appendChild(template);

    })
}