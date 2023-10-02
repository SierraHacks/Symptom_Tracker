export default function addSymptomsBox() {
    // Find the last input box
    let lastInput = document.querySelector('.symptoms:last-of-type');
    let newInput = lastInput.cloneNode(true);
    
    // Generate a new unique ID for the cloned input box
    let lastNumber = parseInt(lastInput.id.slice(-1));
    let newNumber = lastNumber + 1;
    newInput.id = `symptom${newNumber}`;
    newInput.value = '';

    // add the new input after the last input box
    lastInput.after(newInput);
    lastInput.after(document.createElement("br"));
    lastInput.after(document.createElement("br"));
}