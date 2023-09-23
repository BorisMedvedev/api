import {formatDate, formatTime} from './utils.js';

export const createTRItem = (data) => {
  const itemTR = document.createElement('tr');
  const itemTDId = document.createElement('td');
  const itemTDIdSpan = document.createElement('span');
  const itemTdFullName = document.createElement('td');
  const itemTdNameSpan = document.createElement('span');
  const itemTdSurNameSpan = document.createElement('span');
  const itemTdLastNameSpan = document.createElement('span');
  const itemTdDateCreation = document.createElement('td');
  const itemTdDateSpan = document.createElement('span');
  const itemTdTimeSpan = document.createElement('span');
  const itemTdChanges = document.createElement('td');
  const itemTdChangesDateSpan = document.createElement('span');
  const itemTdChangesTimeSpan = document.createElement('span');
  const itemTdContacts = document.createElement('td');
  const itemTdActions = document.createElement('td');
  const itemTdActionsBtnEdit = document.createElement('button');
  const itemTdActionsBtnDelete = document.createElement('button');

  itemTdChangesTimeSpan.classList.add('time-span')
  itemTdTimeSpan.classList.add('time-span')
  itemTdNameSpan.classList.add('item-span');
  itemTdLastNameSpan.classList.add('item-span');
  itemTDIdSpan.classList.add('item-id');

  itemTDIdSpan.textContent = `id: ${data.id.substr(0, 6)}`;
  itemTdNameSpan.textContent = data.name;
  itemTdSurNameSpan.textContent = data.surname;
  itemTdLastNameSpan.textContent = data.lastName;
  itemTdDateSpan.textContent = formatDate(data.createdAt);
  itemTdTimeSpan.textContent = formatTime(data.createdAt);
  itemTdChangesDateSpan.textContent = formatDate(data.updatedAt);
  itemTdChangesTimeSpan.textContent = formatTime(data.updatedAt);
  // itemTdContacts.textContent = contacts;
  itemTdActionsBtnEdit.textContent = 'Изменить';
  itemTdActionsBtnDelete.textContent = 'Удалить';

  itemTdActionsBtnEdit.classList.add('btn', 'btn-success');
  itemTdActionsBtnDelete.classList.add('btn', 'btn-danger');

  itemTdFullName.append(itemTdNameSpan, itemTdLastNameSpan, itemTdSurNameSpan);
  itemTdDateCreation.append(itemTdDateSpan, itemTdTimeSpan);
  itemTdChanges.append(itemTdChangesDateSpan, itemTdChangesTimeSpan);
  itemTdActions.append(itemTdActionsBtnEdit, itemTdActionsBtnDelete);
  itemTDId.append(itemTDIdSpan);

  itemTR.append(
      itemTDId,
      itemTdFullName,
      itemTdDateCreation,
      itemTdChanges,
      itemTdContacts,
      itemTdActions,
  );

  return itemTR;
};
