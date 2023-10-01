import {createRoot} from "react-dom/client"
export default function MyApp() {

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: animalInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }
    return (
      <div>
        <h1>Symptom Tracker</h1>
        <getUserDetails />
      </div>
    );
  }
