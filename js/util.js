function getRandomInclusiveInteger(from, to) {
  //Гвард (нет числовых значений || два отрицательных значения)
  if (typeof from !== 'number' ||
  typeof to !== 'number' ||
  (from < 0 && to < 0)
  ) {
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

function checkStringLength (line = '', maxWidth) {
  return line.length <= maxWidth;
}

/**
 * Получение случаного элемента из массива
 * @param {Array} array - исходный массив
 * @returns {*} - может быть массив из элементов любого типа
 */
function getRandomArrayElement (array) {
  return  array[getRandomInclusiveInteger(0, array.length - 1)];
}

function createRandomIdFromRangeGenerator (from, to) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInclusiveInteger(from, to);
    if (previousValues.length >= (to - from + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInclusiveInteger(from, to);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

export {getRandomInclusiveInteger, checkStringLength, getRandomArrayElement, createRandomIdFromRangeGenerator};
