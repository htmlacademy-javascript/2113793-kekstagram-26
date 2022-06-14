const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const DESCRIPTION = [
  'summer vibes',
  'entrepreneur life',
  'We did it!',
  'Yes or No?',
  'life’s a beach',
  'hello sunshine!',
  'Only God Can Judge Me',
  'California love'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.'
];

const NAME = [
  'Olivia',
  'Lucas',
  'Emma',
  'Oliver',
  'Theodore',
  'Mia',
  'Isabella',
  'James'
];

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];


const getPhotoDescription = () => {

  const getCommentId = () => {
    const commentIds = [];
    for (let i = 1; i <= 50; i++) {
      commentIds.push(i);
    }
    const idIndex = getRandomPositiveInteger(1, commentIds.length);
    const commentId = commentIds[idIndex];
    commentIds.splice(idIndex);
    return commentId;
  };
  const getPhotoId = () => {
    const photoIds = [];
    for (let i = 1; i <= 25; i++) {
      photoIds.push(i);
    }
    const idIndex = getRandomPositiveInteger(1, photoIds.length);
    const photoId = photoIds[idIndex];
    photoIds.splice(idIndex);
    return photoId;
  };

  const photoComments = [
    {
      id: getCommentId(),
      avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
      message: getRandomArrayElement(MESSAGE),
      name: getRandomArrayElement(NAME)
    },
    {
      id: getCommentId(),
      avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
      message: getRandomArrayElement(MESSAGE),
      name: getRandomArrayElement(NAME)
    }
  ];
  return {
    id: getPhotoId(),
    url: `photos/${getRandomPositiveInteger(1,25)}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomPositiveInteger(15,200),
    comments: photoComments
  };
};

const photoDescriptions = Array.from({length:25},getPhotoDescription);

console.log(photoDescriptions);
