import {getUserDetails} from './get_user_details.js';
import askAI from './api/generate.js';

async function submitForm() {
  let user = getUserDetails()
  try {
    let response = askAI(user,"whatever the web scraper got here")
    console.log(response)
  } catch(error) {
    console.error(error);
    alert(error.message);
  }
};

window.submitForm = submitForm