'use strict';
/**
 * Реализуйте функцию range(start: number, end: number): array
 * которая отдает массив чисел из диапазона [15, 30] включая крайние числа.
 */

const range = (start, end) => {

  const resArr = [];
  for (let i = start; i <= end; i++) {
    resArr.push(i);
  }
  return resArr;
};

module.exports = { range };
