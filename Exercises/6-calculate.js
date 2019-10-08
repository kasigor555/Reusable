'use strict';
/**
 * Реализуйте функцию square с сигнатурой square(x: number): number
 * вычисляющую квадрат своего аргумента.
 */
const square = x => x * x;

/**
 * Реализуйте функцию cube с сигнатурой cube(x: number): number
 * вычисляющую куб своего аргумента.
 */
const cube = x => x ** 3;

/**
 * Реализуйте функцию average с сигнатурой average(a: number, b: number): number
 * вычисляющую среднее арифметическое своих аргументов.
 */
const average = (a, b) => (a + b) / 2;

/**
 * Вызовите функции square и cube в цикле от 0 до 9, вычисляя,
 * соответственно квадрат и куб от переменной цикла.
 * Передайте квадрат и куб на каждой итерации в функцию average.
 * Результаты сложите в массив и возвратите из функции calculate.
 */
const calculate = () => {
  const res = [];
  for (let i = 0; i <= 9; i++) {
    res.push(average(square(i), cube(i)));
  }
  return res;
};

module.exports = { square, cube, average, calculate };
