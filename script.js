const searchinput = document.querySelector('.search-input');
const list = document.querySelector('#list');

// метод indexOf - ищет подстроку в строке
// возвращает позицию первого совпадения, а если оно не найдено то вернет -1
//  синтаксис: строка.indexOf(что ищем, [откуда начать поиск])

function isMatching(full, piece) {
    let pos = full.toLowerCase().indexOf(piece.toLowerCase())
    //функция проверяет содержит ли строка full в себе подстроку piece
    // если строка содержит подстроку то функция вернет true иначе false
    return pos != -1;
}

//При вводе данных в поле ввода получить коллекцию списка элементов
// Получить значение из поля ввода
// Перебрать в цикде все элементы списка
//  если функция isMatching найдет введенное в строку поиска содержимое внутри элемент списка
// отабражаем этот элемент на экране
// иначе скрываем
searchinput.addEventListener('keyup', (event)=>{
let items = document.querySelectorAll('.item')
let value = searchinput.value;
for(let item of items) {
    if(isMatching(item.textContent, value) && value != '') {
        item.style.display = 'flex'

    } else {
        item.style.display = 'none'
    }
}
})