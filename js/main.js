/**
 * Возвращает случайное целое число в заданном интервале
 * @param {number} a - число из диапазона
 * @param {number} b - число из диапазона
 * @return {integer} - случайное число
 * src: https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
*/

function getRandomPositiveInteger (a, b) {
  // Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
  // реализуем поддержку передачи минимального и максимального значения в любом порядке,
  // а какое из них большее и меньшее вычислим с помощью Math.min и Math.max.

  // После нам нужно убедиться, что пользователь не передал дробные значения,
  // для этого на всякий случай нижнюю границу диапазона
  // мы округляем к ближайшему большему целому с помощью Math.ceil,
  // а верхнюю границу - к ближайшему меньшему целому с помощью Math.floor
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  // Обратите внимание, чтобы учесть условие, что диапазон может быть [0, ∞),
  // мы не ругаем пользователя за переданное отрицательное число,
  // а просто берём его по модулю с помощью Math.abs

  // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
  // которое домножаем на разницу между переданными числами плюс единица - это будет наша случайная дельта.
  // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
  const result = Math.random() * (upper - lower + 1) + lower;
  // "Плюс единица", чтобы включить верхнюю границу диапазона в случайные числа

  // И в конце с помощью метода Math.floor мы округляем полученный результат,
  // потому что Math.random() генерирует только дробные числа и ноль.
  return Math.floor(result);
}
getRandomPositiveInteger(34,15);

/**
   * Проверяет максимальную длину строки
   * @param {string} stringToBeChecked - проверяемая строка
   * @param {number} maxLenth - максимальная длина строки
   * @return {boolean} - true, если строка проходит по длине, и false — если не проходит
   * src: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   * src2: https://codepen.io/jsundai/pen/vYKxNZp
  */

const checkLenth = (stringToBeChecked, maxLenth) => (stringToBeChecked.length <= maxLenth);
checkLenth('Hello world!', 10);
