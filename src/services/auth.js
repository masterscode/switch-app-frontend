import {baseUrl} from './config.json';
import axios from 'axios';



async function doRegister(formSubmitEvent, formData){
    formSubmitEvent.preventDefault();


    const url = baseUrl + '/users/register';
    try{
    const response = await axios.post(url, formData );
    console.log(response);
    }catch(exception){
        console.log(exception.response.data);
    }


}


function doLogin(){}


export {doLogin, doRegister};