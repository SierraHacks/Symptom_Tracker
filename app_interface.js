import getUserDetails from './js/get_user_details.js';
import addSymptomsBox from './js/add_symptoms_box.js';
import askAI from './api/generate.js';

const responseDiv = document.getElementById('response-div');
async function submitForm() {
  let user = getUserDetails(document.querySelectorAll(".symptoms").length)
  responseDiv.innerHTML = "Loading..."
  try {
    let response = await askAI(user,"whatever the web scraper got here")
    console.log(response)
    responseDiv.innerHTML = response
  } catch(error) {
    console.error(error.response);
    alert(error.response.data.error.message);
  }
};

window.submitForm = submitForm
window.addSymptomsBox = addSymptomsBox