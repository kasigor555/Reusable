'use strict';
/**
 * Реализуйте телефонную книгу на массиве объектов.
 * Объявите массив объектов с двумя полями:
 * name и phone для хранения телефонной книги.
 * Пример объекта: { name: 'Marcus Aurelius', phone: '+380445554433' }
 * и добавьте несколько объектов в массив, чтоб было на чем проверять.
 * Реализуйте функцию findPhoneByName
 * с сигнатурой findPhoneByName(name: string): string.
 * При вызове функция должна находить объект,
 * где поле name равно аргументу name и возвращать номер телефона из объекта.
 */

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Iosiv Stallin', phone: '+70000000000' },
  { name: 'Mao Dsedun', phone: '+99999999999' },
];

const findPhoneByName = name => {
  for (const pers of phonebook) {
    if (pers.name === name) return pers.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
