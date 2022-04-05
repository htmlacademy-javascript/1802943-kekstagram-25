import {renderFullSizePhoto} from './render-fullsize-photo.js';

//Контейнер для изображений от других пользователей
const picturesContainer = document.querySelector('.pictures');
//Поиск шаблона по id, получение его содержимого из элемента с классом .picture
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
// console.log(picturesTemplate);

const picturesFragment = document.createDocumentFragment();

function renderUserThumbnails(usersPosts) {
  usersPosts.forEach((userPost) => {
    //клонирование шаблона
    const pictureElement = picturesTemplate.cloneNode(true);

    //превьюшки
    pictureElement.querySelector('.picture__img').src = userPost.url;
    pictureElement.querySelector('.picture__comments').textContent = userPost.comment.length;
    pictureElement.querySelector('.picture__likes').textContent = userPost.likes;

    //полноразмерные фото
    // eslint-disable-next-line
    pictureElement.addEventListener('click', function () {
      renderFullSizePhoto(userPost);
    });

    picturesFragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(picturesFragment);
}

export {renderUserThumbnails};
