import {getUserDetails} from './get_user_details.js';
import {} from './api/generate.js';

async function onSubmit(event) {
  event.preventDefault();
  try {
    const data = await response.json();
    if (response.status !== 200) {
      throw data.error || new Error(`Request failed with status ${response.status}`);
    }
  } catch(error) {
    console.error(error);
    alert(error.message);
  }
};

window.getUserDetails = getUserDetails
window.logit = logit;

function logit(e) {
  e.preventDefault();
  console.log(e)
};