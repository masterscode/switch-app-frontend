import { baseUrl } from "./config.json";
import axios from "axios";

async function doRegister(formSubmitEvent, formData) {
  formSubmitEvent.preventDefault();

  const url = baseUrl + "/users/register";
  try {
    const { data } = await axios.post(url, formData);
    return { data, status: true };
  } catch (exception) {
    const error  = exception.response;
    const requestError = exception.request;
    if(requestError.status == 0)return { error: 'network error' , status: false };
    if(error.status == 409)return { error: error.data , status: false };
    if(error.status == 500)return { error: "The server is currently down, try again later!!!" , status: false };

  }
}

function doLogin() {}

export { doLogin, doRegister };
