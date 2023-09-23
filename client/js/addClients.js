import {createModalForm} from './createModalForm.js';
import {createClient} from './getClientsApi.js';

export const createModalWindow = () => {
  const modalForm = createModalForm('Новый клиент');
  const modal = document.createElement('div');
  const modalContent = document.createElement('div');

  modal.classList.add('modal');
  modalContent.classList.add('modal__content');

  modalContent.append(
      modalForm.modalTitle,
      modalForm.closeBtn,
      modalForm.form,
      modalForm.cancelBtn,
  );
  modal.append(modalContent);

  document.addEventListener('click', (e) => {
    if (e.target === modalForm.closeBtn ||
       e.target === modal ||
       e.target === modalForm.cancelBtn) {
      modal.remove();
    }
  });

  modalForm.form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const contactsType = document.querySelectorAll('.contact__name');
    const contactsValueInput = document.querySelectorAll('.contact__input');

    const contacts = [];
    const clientObj = {};

    for (let i = 0; i < contactsType.length; i++) {
      contacts.push({
        type: contactsType[i].innerHTML,
        value: contactsValueInput[i].value,
      });
    }

    clientObj.name = modalForm.inputName.value;
    clientObj.surname = modalForm.inputSurname.value;
    clientObj.lastName = modalForm.inputLastName.value;
    clientObj.contacts = contacts;
    modalForm.inputName.value = '';
    modalForm.inputSurname.value = '';
    modalForm.inputLastName.value = '';

    modal.remove();

    await createClient(clientObj);
  });

  return modal;
};
