
const btn = document.getElementById('btn');
const result = document.getElementById('result');


function useRequest() {
    const value = document.getElementById('input').value;
    let xhr = new XMLHttpRequest();
    let url = `https://picsum.photos/v2/list/?limit=${value}`;
    if (value >= 1 && value <= 10) {
        xhr.open('GET', url, true);
        xhr.onload = function() {
            if (xhr.status != 200) {
                console.log("статус ответа:", xhr.status);
            } else {
                const RES = JSON.parse(xhr.response);
                console.log(RES);
                displayResult(RES);
            }
        };
        xhr.onerror = function() {
            console.log('ошибка:', xhr.status);
        };
        xhr.send();
    } else {
        alert('число вне диапазона от 1 до 10');
    }
}

function displayResult(apiData) {
    let cards = '';
    apiData.forEach(item => {
        const card = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
        </div>
        `;
        cards = cards + card;
    });
    result.innerHTML = cards + cardBlock;
}

btn.addEventListener('click', () => {
    useRequest();
});