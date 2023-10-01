import {getUserDetails} from './get_user_details.js';
import getResponse from './api/generate.js';

async function submitForm() {
  user = getUserDetails()
  try {
    getResponse(user,"whatever the web scraper got here")
    const data = await response.json();
    if (response.status !== 200) {
      throw data.error || new Error(`Request failed with status ${response.status}`);
    }
  } catch(error) {
    console.error(error);
    alert(error.message);
  }
};

function logit(e) {
  e.preventDefault();
  console.log(e)
};

window.submitForm = submitForm
window.logit = logit;