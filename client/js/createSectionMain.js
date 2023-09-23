import {addBtnSvg} from './svgImg.js';

export const createSectionMain = () => {
  const main = document.createElement('main');
  const sectionMain = document.createElement('section');
  const container = document.createElement('div');
  const sectionTitle = document.createElement('h1');
  const sectionTable = document.createElement('table');
  const sectionTableWrapper = document.createElement('div');
  const sectionTableThead = document.createElement('thead');
  const sectionTableTbody = document.createElement('tbody');
  const sectionTableTheadTR = document.createElement('tr');
  const theadThID = document.createElement('th');
  const theadThFIO = document.createElement('th');
  const theadThDateСreation = document.createElement('th');
  const theadThDateChange = document.createElement('th');
  const theadThContacts = document.createElement('th');
  const theadThActions = document.createElement('th');
  const addClientBtn = document.createElement('button');
  const addClientBtnSpan = document.createElement('span');

  sectionTitle.textContent = 'База клиентов';
  theadThID.textContent = 'id';
  theadThFIO.textContent = 'Фамилия Имя Отчество';
  theadThDateСreation.textContent = 'Дата и время создания';
  theadThDateChange.textContent = 'Последние изменения';
  theadThContacts.textContent = 'Контакты';
  theadThActions.textContent = 'Действия';
  addClientBtn.textContent = 'Добавить клиента';
  addClientBtnSpan.innerHTML = addBtnSvg;

  sectionTableTbody.classList.add('section-body');
  main.classList.add('main');
  sectionTitle.classList.add('section__title');
  container.classList.add('container', 'section-container');
  sectionTable.classList.add('table', 'table-primary');
  addClientBtn.classList.add('btn-reset', 'site-btn', 'add-client');
  addClientBtnSpan.classList.add('addbtn-svg-span');

  sectionTableTheadTR.append(
      theadThID,
      theadThFIO,
      theadThDateСreation,
      theadThDateChange,
      theadThContacts,
      theadThActions,
  );

  sectionTableThead.append(sectionTableTheadTR);
  sectionTable.append(sectionTableThead, sectionTableTbody);
  sectionTableWrapper.append(sectionTable);
  addClientBtn.prepend(addClientBtnSpan);
  container.append(sectionTitle, sectionTableWrapper, addClientBtn);
  sectionMain.append(container);
  main.append(sectionMain);


  return {
    main,
    sectionTableThead,
    sectionTableTbody,
    addClientBtn,
  };
};
