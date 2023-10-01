import {createRoot} from "react-dom/client"
<style>
  h1{
    font-family: Arial, sans-serif;
  }
</style>
export default function MyApp() {
    return (
      <div>
        <h1>Symptom Tracker</h1>
        <getUserDetails />
      </div>
    );
  }