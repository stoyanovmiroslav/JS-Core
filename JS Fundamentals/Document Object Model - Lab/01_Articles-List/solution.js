function solve() {
	let createTitle = document.getElementById('createTitle');
	let createContent = document.getElementById('createContent');

	if(createTitle.value === '' || createContent.value === ''){
	    return;
    }

	let heading = document.createElement('h3');
	heading.textContent = createTitle.value;

    let paragraph = document.createElement('p');
    paragraph.textContent = createContent.value;

    let article = document.createElement('article');
    article.appendChild(heading);
    article.appendChild(paragraph);

    let articles = document.querySelector('#articles');
    articles.appendChild(article);

    createTitle.value = '';
    createContent.value = '';
}