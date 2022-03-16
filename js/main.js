//Первая функция
const HOW_MANY_POSTS = 25;

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Толян',
  'Борисыч',
  'Джульетта',
  'Дед Максим',
  'Хисока'
];

const DESCRIPTIONS = [
  'Красивое',
  'Пойдет',
  'Не красивое',
  'Огонь',
  'Удалить немедленно'
];

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

getRandomInclusiveInteger();

//Вторая функция

function checkStringLength (line = '', maxWidth) {
  return line.length <= maxWidth;
}

checkStringLength('строка', 6);

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

function createPhotoDescription (_, index) {
  const postId = index + 1;

  return {
    id: postId,
    url: `photos/${postId}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInclusiveInteger(15, 200),
    comment: Array.from({length:getRandomInclusiveInteger(1, 6)}, generateCommentsList)
  };
}

const generateCommentId = createRandomIdFromRangeGenerator(1, 999);

function generateCommentsList () {
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInclusiveInteger(1, 6)}.svg`,
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES)
  };
}

const generatePostsArray = Array.from({length: HOW_MANY_POSTS}, createPhotoDescription);
// eslint-disable-next-line
console.log(generatePostsArray);
