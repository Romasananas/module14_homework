

const btn = document.querySelector('#submit');
const result = document.querySelector('#result');

async function getRes() {
    const value1 = document.querySelector('#input_1').value;
    const value2 = document.querySelector('#input_2').value;



    if (100 <= value1 && value1 <= 300 && 100 <= value2 && value2 <= 300) {

    let response = await fetch(`https://picsum.photos/${value1}/${value2}`);

    let blob = await response.blob();

    let img = document.createElement('img');
    document.body.append(img);
    console.log(blob)
    img.src = URL.createObjectURL(blob);
    document.body.insertBefore(img, result);
    
    } else {
        alert('числа вне диапазона от 100 до 300');
    }


}

btn.addEventListener('click', () => {
    getRes();
});