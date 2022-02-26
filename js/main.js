//Первая функция

function getRandomInclusiveInteger(from, to) {
  //Гвард (нет числовых значений || два отрицательных значения)
  if (typeof from !== 'number' ||
  typeof to !== 'number' ||
  (from < 0 && to < 0)) {
  return null;
  }

  //Одно отрицательное число
  if (from < 0) {
    from = 0;
  }
  if (to < 0) {
    to = 0;
  }
  //Числа равны
  if (from === to) {
    return from;
  }
  //Диапазон перевернут
  if (from > to) {
    [from, to] = [to, from]; //деструктурирующее присваивание
  }

  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(min + Math.random() * (max - min + 1));
}

getRandomInclusiveInteger();

//Вторая функция

function isValidStringLength (line = '', maxWidth) {
  return line.length <= maxWidth;
}

isValidStringLength('строка', 6);
