'use strict';
/**
 * Выполнить следующие пункты внутри функции fn:
 * Создайте объект с одним полем name и присвойте его в константу.
 * Создайте объект с одним полем name и присвойте его в переменную.
 * Попробуйте поменять поле name у обоих объектов.
 * Попробуйте присвоить другой объект в оба идентификатора.
 * Объясните поведение кода и оставьте только рабочий код.
 */

const fn = () => {
  const myConstObj = { name };
  // let myLetObj = { name };
  myConstObj.name = 'aaa';
  // myLetObj.name = 'bbb';
  // myConstObj = { adres };
  // myLetObj = { adres };
  // myLetObj.adres = 'adr';
};

module.exports = { fn };
