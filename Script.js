let raqam1 = prompt('1-raqamni kiriting:');
let raqam2 = prompt('2-raqamni kiriting:');

let tanlov = prompt(
    "Amalni tanlang:\n" +
    "1) +\n" +
    "2) /\n" +
    "3) *\n" +
    "4) -"
);

raqam1 = parseFloat(raqam1);
raqam2 = parseFloat(raqam2);

const container = document.createElement('div');
container.style.backgroundColor = '#e2a800';
container.style.padding = '30px';
container.style.display = 'flex';
container.style.gap = '50px';
container.style.borderRadius = '8px';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
container.style.width = 'fit-content';
container.style.margin = '100px auto';

function createBox(text) {
    const box = document.createElement('div');
    box.textContent = text;
    box.style.width = '50px';
    box.style.height = '50px';
    box.style.border = '2px solid black';
    box.style.display = 'flex';
    box.style.justifyContent = 'center';
    box.style.alignItems = 'center';
    box.style.fontSize = '18px';
    box.style.fontWeight = 'bold';
    box.style.backgroundColor = '#ffc400ff';
    return box;
}

// Кнопка
const box10 = document.createElement('button');
box10.textContent = 'Hisoblash';
box10.style.backgroundColor = 'green';
box10.style.display = 'flex';
box10.style.flexDirection = 'row-reverse';
box10.style.height = '100px';
box10.style.borderRadius = "10px";
box10.style.marginLeft = '800px';
box10.style.marginBottom = '19px';
box10.style.width = '100px';
box10.style.color = 'white';
box10.style.fontSize = '16px';
box10.style.cursor = 'pointer';

// Добавляем кнопку к body
document.body.appendChild(box10);

// Элементы с числами
const box1 = createBox(raqam1.toString());
const box3 = createBox(raqam2.toString());

container.appendChild(box1);
container.appendChild(box3);

// Добавляем контейнер к body
document.body.style.backgroundColor = '#ffffff';
document.body.appendChild(container);

// Результат
const resultBox = document.createElement('div');
resultBox.style.marginTop = '20px';
resultBox.style.fontSize = '20px';
resultBox.style.fontWeight = 'bold';
resultBox.style.textAlign = 'center';
document.body.appendChild(resultBox);

// Обработка нажатия на кнопку
box10.addEventListener('click', function () {
    let result;

    switch (tanlov) {
        case '+':
        case '1':
            result = raqam1 + raqam2;
            break;
        case '/':
        case '2':
            result = raqam2 !== 0 ? raqam1 / raqam2 : 'Nolga bo‘lish mumkin emas';
            break;
        case '*':
        case '3':
            result = raqam1 * raqam2;
            break;
        case '-':
        case '4':
            result = raqam1 - raqam2;
            break;
        default:
            result = 'Noto‘g‘ri amal tanlandi';
    }

    resultBox.textContent = `Natija: ${result}`;
});
