import axios from 'axios';

const qrpoint = axios.create({
  baseURL: 'https://app.qrpoint.com.br/apps/colaborador'
});

export { qrpoint };