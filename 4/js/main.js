//Первая функция

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

function isValidStringLength (line = '', maxWidth) {
  return line.length <= maxWidth;
}

isValidStringLength('строка', 6);

const commentsArray = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const namesArray = [
  'Толян',
  'Борисыч',
  'Джульетта',
  'Дед Максим',
  'Хисока'
];

const descriptionArray = [
  'Красивое',
  'Пойдет',
  'Не красивое',
  'Огонь',
  'Удалить немедленно'
];

const getRandomArrayElement = (elements) => elements[getRandomInclusiveInteger(0, elements.length - 1)];

function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

function getPhotoNumber () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const generatePhotoId = createIdGenerator();
const generatePhotoNumber = getPhotoNumber ();
// const getRandomPhoto = creatRandomIdFromRangeGenerator();

function photoDescription () {

  return {
    id: generatePhotoId(),
    url: `photos/${generatePhotoNumber()}.jpg`,
    description: getRandomArrayElement(descriptionArray),
    likes: getRandomInclusiveInteger(15, 200),
    comment: Array.from({length:getRandomInclusiveInteger(1, 6)}, commentsList)
  };
}

const generateCommentId = createIdGenerator();

function commentsList () {
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInclusiveInteger(1, 6)}.svg`,
    message: getRandomArrayElement(commentsArray),
    name: getRandomArrayElement(namesArray)
  };
}

const GENERAL_ARRAY_LENGTH = 25;

const generateTargetArray = Array.from({length: GENERAL_ARRAY_LENGTH}, photoDescription);
// eslint-disable-next-line
console.log(generateTargetArray);
