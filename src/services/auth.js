import axios from 'axios';
import { baseUrl } from './config.json';

async function doRegister(formSubmitEvent, formData) {
  formSubmitEvent.preventDefault();
  let result;
  const url = `${baseUrl}/users/register`;
  try {
    const { data } = await axios.post(url, formData);
    return { data, status: true };
  } catch (exception) {
    const error = exception.response;
    const requestError = exception.request;
    if (requestError.status === 0) result = { error: 'network error', status: false };
    if (error.status === 409) result = { error: error.data, status: false };
    if (error.status === 500) result = { error: 'The server is currently down, try again later!!!', status: false };
  }
  return result;
}

function doLogin() {}

export { doLogin, doRegister };
