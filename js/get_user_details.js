import Person from "../person.js"
export default function getUserDetails(symptomNum) {
    const elements = ["name", "ID", "gender", "age", "height", "weight"];
    const user = {};
    const symptoms = [];

    for (let element of elements) {
      const value = document.getElementById(element).value;
      user[element] = value;
    }
  
    for (let i = 1; i <= symptomNum; i++) {
      const symptom = document.getElementById(`symptom${i}`).value;
      symptoms.push(symptom);
    }
  
    console.log(user);
    console.log(symptoms);
    return new Person(user, symptoms);
}