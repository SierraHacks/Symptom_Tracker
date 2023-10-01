export function getUserDetails() {
    const name = document.getElementById('name').value;
    const ID = document.getElementById('ID').value;
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    console.log("User's Name:", name);
    console.log("User's ID:", ID);
    console.log("User's Gender:", gender);
    console.log("User's Age:", age);
    console.log("User's Height:", height);
    console.log("User's Weight:", weight);
}