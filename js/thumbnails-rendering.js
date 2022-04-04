import {setFullSizeModeOnClick} from './full-size-mode-on-click.js';

//Контейнер для изображений от других пользователей
const picturesContainer = document.querySelector('.pictures');
//Поиск шаблона, получение его содержимого
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
// console.log(picturesTemplate);

const picturesFragment = document.createDocumentFragment();

function renderUserThumbnails(usersPosts) {
  usersPosts.forEach((userPost) => {
    //клонируем шаблон
    const pictureElement = picturesTemplate.cloneNode(true);
    // console.log(pictureElement);

    //превьюшки
    pictureElement.querySelector('.picture__img').src = userPost.url;
    pictureElement.querySelector('.picture__comments').textContent = userPost.comment.length;
    pictureElement.querySelector('.picture__likes').textContent = userPost.likes;

    //полноразмерные фото
    // eslint-disable-next-line
    pictureElement.addEventListener('click', function () {
      setFullSizeModeOnClick(userPost);
    });

    picturesFragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(picturesFragment);
}

export {renderUserThumbnails};
