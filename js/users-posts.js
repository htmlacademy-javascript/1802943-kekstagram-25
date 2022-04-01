import {
  POSTS_QUANTITY, USERS_COMMENTS, USERS_NAMES, PHOTO_DESCRIPTIONS, MIN_COMMENT_ID,
  MAX_COMMENT_ID, MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER, MIN_LIKES_QUANTITY,
  MAX_LIKES_QUANTITY, MIN_COMMENT_NUMBER, MAX_COMMENT_NUMBER
} from './data.js';

import {getRandomInclusiveInteger, getRandomArrayElement, createRandomIdFromRangeGenerator} from './util.js';

const generateCommentId = createRandomIdFromRangeGenerator(MIN_COMMENT_ID, MAX_COMMENT_ID);

function makeCommentsContent () {
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInclusiveInteger(MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER)}.svg`,
    message: getRandomArrayElement(USERS_COMMENTS),
    name: getRandomArrayElement(USERS_NAMES)
  };
}

function generatePost (_, index) {
  const postId = index + 1;

  return {
    id: postId,
    url: `photos/${postId}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
    likes: getRandomInclusiveInteger(MIN_LIKES_QUANTITY, MAX_LIKES_QUANTITY),
    comment: Array.from({length:getRandomInclusiveInteger(MIN_COMMENT_NUMBER, MAX_COMMENT_NUMBER)}, makeCommentsContent)
  };
}

function generatePosts () {
  return Array.from({length: POSTS_QUANTITY}, generatePost);
}

export {generatePosts};
