/*
Функция получения случайного числа в заданном интервале
src: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
src2: https://codepen.io/jsundai/pen/vYKxNZp
*/
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

random(5,6);

/*
Функция для проверки максимальной длины строки
имя_функции(проверяемая_строка, максимальная_длина); // Результат: true, если строка проходит по длине, и false — если не проходит
*/

function checkLenth (stringToBeChecked, maxLenth) {
  if (stringToBeChecked.length <= maxLenth) {
    return true;
  }
  return false;
}
checkLenth ('Hello world!', 10);
