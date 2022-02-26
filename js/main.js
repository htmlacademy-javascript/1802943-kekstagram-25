//Первая функция

function getRandofromclusiveInteger(from, to) {
  //Гвард (нет числовых значений || два отрицательных значения)
  if (typeof from !== 'number' || typeof to !== 'number' || from < 0 && to < 0) {
    return null;
  }
  //Числа равны
  if (from === to) {
    return from;
  }
  //Число
  if (from < 0 && to > 0) {
    from = 0;
  }

  if (to < 0 && from > 0) {
    to = 0;
  }
  //Диапазон перевернут
  if (from > to) {
    [from, to] = [to, from];
  }

  return Math.round(Math.ceil(from) + Math.random() * (Math.floor(to) - Math.ceil(from) + 1));
}

getRandofromclusiveInteger();

//Вторая функция

function isValidStringLength(line = '', maxWidth) {
  return line.length <= maxWidth;
}

isValidStringLength('строка', 6);
