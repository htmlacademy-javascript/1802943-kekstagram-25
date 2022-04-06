import {onEscKeyPress} from './keydowns.js';

const bigPicture = document.querySelector('.big-picture'); //секция полноразмерных фото
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const body = document.querySelector('body');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const escButton = document.querySelector('#picture-cancel'); //обращение по id к кнопке закрытия попапа
const commentsCount = document.querySelector('.comments-count');
const socialCaption = document.querySelector('.social__caption'); //описание
// const socialComments = document.querySelector('.social__comments');

// Блок обеспечения закрытия окна нажатием Esc
const closeFullSize = (evt) => {
  if (onEscKeyPress(evt)) {
    evt.preventDefault();
    clozeFullSizePhoto();
  }
};

function clozeFullSizePhoto() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.addEventListener('keydown', closeFullSize);
}

function renderFullSizePhoto (userPost) {

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  commentsLoader.classList.add('hidden');
  socialCommentCount.classList.add('hidden');

  bigPictureImg.src = userPost.url;
  commentsCount.textContent = userPost.comment.length;
  likesCount.textContent = userPost.likes;
  socialCaption.textContent = userPost.description;

  document.addEventListener('keydown', closeFullSize);
}

escButton.addEventListener('click', clozeFullSizePhoto);

export {renderFullSizePhoto};
