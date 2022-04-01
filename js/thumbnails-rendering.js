//Контейнер для изображений от других пользователей
const picturesContainer = document.querySelector('.pictures');
//Поиск шаблона, получение его содержимого
const picturesTemplate = document.querySelector('#picture').content;

const picturesFragment = document.createDocumentFragment();

function renderUserThumbnails(usersPosts) {
  usersPosts.forEach(({url, likes, comment}) => {
    //клонируем шаблон
    const pictureElement = picturesTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__comments').textContent = comment.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;

    picturesFragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(picturesFragment);
}

export {renderUserThumbnails};
