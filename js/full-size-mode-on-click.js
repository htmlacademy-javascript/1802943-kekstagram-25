const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const body = document.querySelector('body');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');

function setFullSizeModeOnClick (userPost) {
  console.log(userPost);
  //тут просит стрелочную функцию, пока вырубил линтер
  // eslint-disable-next-line
  // bigPicture.addEventListener('click', function (evt) {
  //   evt.preventDefault();
  //   bigPicture.classList.remove('hidden');
  //   body.classList.add('modal-open');
  //   commentsLoader.classList.add('hidden');
  //   socialCommentCount.classList.add('hidden');
  // });

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  socialCommentCount.classList.add('hidden');

  bigPictureImg.querySelector('.big-picture__img').src = userPost.url;
  pictureElement.querySelector('.comments-count').textContent = userPost.comment.length;
  likesCount.querySelector('.likes-count').textContent = userPost.likes;
  pictureElement.querySelector('.social__caption').textContent = userPost.description;
  // eslint-disable-next-line
  // bigPicture.addEventListener('keydown', function (evt) {
  //   if (evt.keyCode === 27) {
  //     bigPicture.classList.add('hidden');
  //   }
  // });

  // // eslint-disable-next-line
  // bigPicture.addEventListener('click', function () {
  //   bigPicture.classList.add('hidden');
  // });
}


export {setFullSizeModeOnClick};
