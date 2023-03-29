
const btn = document.querySelector('#btn');
const page = document.querySelector('#input1').value;
const limit = document.querySelector('#input2').value;
const result = document.querySelector('.result');


function displayImg(jsonObj) {
    let blocks = '';
    jsonObj.forEach(item => {
        let block = `
            <div>
                <img src='${item.download_url}'>
                <p>ID:${item.id}</p>
            </div>`;
        blocks = blocks + block;
    });
    result.innerHTML = blocks;
};

async function getImg() {
    const pageNum = +document.querySelector('#input1').value;
    const limitNum = +document.querySelector('#input2').value;

    if (1 <= pageNum && pageNum <= 10 && 1 <= limitNum && limitNum <= 10) {

        let url = new URL('https://picsum.photos/v2/list');
        url.searchParams.set('page', pageNum);
        url.searchParams.set('limit', limitNum);

        let response = await fetch(url);
        let json = await response.json();
        displayImg(json);
        localStorage.setItem('data', JSON.stringify(json));

    } else if (page < 1 || page > 10 || typeof(page) != 'number') {
        alert('Номер страницы вне диапазона от 1 до 10');
    } else if (limit < 1 || limit > 10 || typeof(limit) != 'number') {
        alert('Лимит вне диапазона от 1 до 10');
    } else {
        alert('Номер страницы и лимит вне диапазона от 1 до 10');
    }
};

btn.addEventListener('click', () => {
    let data = localStorage.getItem('data');
    if (data) {
        let jsonData = JSON.parse(data);
        displayImg(jsonData);
    } else {
        getImg();
    }
});