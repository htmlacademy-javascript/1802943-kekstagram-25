//Первая функция

function randomize(min, max) {
  const random = min + Math.random() * (max - min + 1);
  if (min < 0 || max < 0 || min === max && max === min) {
    //Введите неравнозначные положительные числа!
  }  else {
    return Math.round(random);
  }
}
randomize();

//Вторая функция

function validation(line, maxWidth) {
  if (line.length > maxWidth) {
    return false;
  }  else {
    return true;
  }
}
//первый атрибут - комментарий в кавычках

validation();
