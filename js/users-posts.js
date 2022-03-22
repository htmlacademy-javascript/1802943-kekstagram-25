import {POSTS_QUANTITY, USERS_COMMENTS, USERS_NAMES, PHOTO_DESCRIPTIONS} from './data.js';
import {getRandomInclusiveInteger, getRandomArrayElement, createRandomIdFromRangeGenerator} from './util.js';

const generateCommentId = createRandomIdFromRangeGenerator(1, 999);

function makeCommentsContent () {
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInclusiveInteger(1, 6)}.svg`,
    message: getRandomArrayElement(USERS_COMMENTS),
    name: getRandomArrayElement(USERS_NAMES)
  };
}

function makePhotoDescription (_, index) {
  const postId = index + 1;

  return {
    id: postId,
    url: `photos/${postId}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
    likes: getRandomInclusiveInteger(15, 200),
    comment: Array.from({length:getRandomInclusiveInteger(1, 6)}, makeCommentsContent)
  };
}

const usersPosts = Array.from({length: POSTS_QUANTITY}, makePhotoDescription);

export {usersPosts};
