'use strict';
/**
 * Реализуйте телефонную книгу на хеш-таблицах, т.е. справочниках (объектах).
 * Задайте справочник (объект) с ключами равными значениям поля name
 * (из предыдущего примера) и значениями равными полю phone.
 * Реализуйте функцию findPhoneByName
 * с сигнатурой findPhoneByName(name: string): string
 * которая находит телефон в хеше по имени и возвращает номер телефона.
 * Используйте hash[key] для поиска телефона.
 */

const phonebook = {
  'Marcus Aurelius': '+380445554433',
  'Iosiv Stallin': '+70000000000',
  'Mao Dsedun': '+99999999999',
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
