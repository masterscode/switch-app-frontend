import { baseUrl } from "./config.json";
import axios from "axios";

async function doRegister(formSubmitEvent, formData) {
  formSubmitEvent.preventDefault();

  const url = baseUrl + "/users/register";
  try {
    const { data } = await axios.post(url, formData);
    return { data, status: true };
  } catch (exception) {
    return { error: exception.response, status: false };
  }
}

function doLogin() {}

export { doLogin, doRegister };
