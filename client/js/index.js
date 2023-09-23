import {createClientsHeader} from './createHeader.js';
import {createModalWindow} from './addClients.js';
import {createSectionMain} from './createSectionMain.js';
import {getClients} from './getClientsApi.js';
import {createTRItem} from './createTRItem.js';

const createApp = async () => {
  const header = createClientsHeader();
  const main = createSectionMain();
  const modal = createModalWindow();
  const clients = await getClients();

  document.body.append(header, main.main);

  main.addClientBtn.addEventListener('click', () => {
    document.body.append(modal);
  });

  for (const client of clients) {
    document.querySelector('.section-body').append(createTRItem(client));
  }
};

createApp();
