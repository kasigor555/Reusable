'use strict';
/**
 * Реализуйте функцию rangeOdd(start: number, end: number): array
 * которая отдает массив нечетных чисел из диапазона [15, 30]
 * включая крайние числа.
 */

const rangeOdd = (start, end) => {
  const resArr = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) resArr.push(i);
  }
  return resArr;
};

module.exports = { rangeOdd };
