import {svgDel} from './svgImg.js';

export const createFormContactItem = () => {
  const contact = document.createElement('div');
  const contactType = document.createElement('div');
  const contactName = document.createElement('button');
  const contactList = document.createElement('ul');
  const contactPhone = document.createElement('li');
  const contactVk = document.createElement('li');
  const contactEmail = document.createElement('li');
  const contactOther = document.createElement('li');
  const contactInput = document.createElement('input');
  const contactBtnDel = document.createElement('button');
  const contactBtnDelTooltip = document.createElement('span');

  contact.classList.add('contact');
  contactType.classList.add('contact__type');
  contactList.classList.add('contact__list', 'list-reset');
  contactName.classList.add('contact__name');
  contactBtnDel.classList.add('contact__btn-del', 'btn-reset');
  contactInput.classList.add('contact__input');
  contactBtnDelTooltip.classList.add('site-tooltip');

  contactBtnDelTooltip.textContent = 'Удалить контакт';
  contactName.textContent = 'Телефон';
  contactPhone.textContent = 'Телефон';
  contactVk.textContent = 'ВК';
  contactEmail.textContent = 'Почта';
  contactOther.textContent = 'Другое';
  contactBtnDel.innerHTML = svgDel;

  contactInput.placeholder = 'Введите данные контакта';

  contactBtnDel.append(contactBtnDelTooltip);
  contactList.append(contactPhone, contactVk, contactEmail, contactOther);
  contactType.append(contactName, contactList);
  contact.append(contactType, contactInput, contactBtnDel);

  contactBtnDel.addEventListener('click', (e) => {
    e.preventDefault();
    contact.remove();
    document.querySelector('.add-contact').classList.add('active');
  });

  contactName.addEventListener('click', (e) => {
    e.preventDefault();
    contactList.classList.toggle('active');
    contactName.classList.toggle('active');
  });
  contactType.addEventListener('mouseleave', () => {
    contactList.classList.remove('active');
    contactName.classList.remove('active');
  });

  const setType = (type) => {
    type.addEventListener('click', () => {
      contactName.textContent = type.textContent;
      contactList.classList.remove('active');
      contactName.classList.remove('active');
    });
  };

  const typeArr = [contactEmail, contactVk, contactOther, contactPhone];

  for (const iterator of typeArr) {
    setType(iterator);
  }

  return {
    contact,
    contactName,
    contactBtnDel,
  };
};
