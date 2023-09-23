import {svgEmail, svgOther, svgPhone, svgVk} from './svgImg.js';

export const formatDate = data => {
  const newDate = new Date(data);

  const correctDate = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  const resultDate = newDate.toLocaleString('ru', correctDate);

  return resultDate;
};

export const formatTime = data => {
  const newDate = new Date(data);

  const correctDate = {
    hour: 'numeric',
    minute: 'numeric',
  };

  const resultTime = newDate.toLocaleString('ru', correctDate);

  return resultTime;
};

export const capitalizeWords = (str) => {
  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(' ');
};

export const createContactsLink = (type, value, el, svg, item) => {
  el = document.createElement('a');
  el.classList.add('contacts-link');
  el.innerHTML = svg;

  if (type === 'Почта') {
    el.href = `mailto:${value.trim()}`;
  } else if (type === 'Телефон') {
    el.href = `tel:${value.trim()}`;
  } else {
    el.href = value.trim();
  }
  item.append(el);
};

export const createByType = (type, value, item) => {
  switch (type) {
    case 'Телефон':
      let phone;
      createContactsLink(type, value, phone, svgPhone, item);
      break;
    case 'Почта':
      let email;
      createContactsLink(type, value, email, svgEmail, item);
      break;
    case 'Другое':
      let other;
      createContactsLink(type, value, other, svgOther, item);
      break;
    case 'ВК':
      let vk;
      createContactsLink(type, value, vk, svgVk, item);
      break;

    default:
      break;
  }
};
