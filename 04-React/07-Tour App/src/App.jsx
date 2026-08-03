import { useState } from "react";
import "./App.css";
import Tours from "./components/Tours";
import data from "./data.js";

function App() {
  const [tours, setTours] = useState(data);

  function removeTourHandler(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  function refereshToursHandler() {
    setTours(data);
  }


  if (tours.length === 0) {
    return (
      <div className="referesh">
      <h2 className="btn-white">No Tours Left</h2>
      <button className="btn-white" onClick={refereshToursHandler}>Referesh</button>
    </div>
    )
  }
  return (
    <>
      <div className="main-container">
        <Tours className='App'  tours={tours} removeTourHandler={removeTourHandler} />
      </div>
    </>
  );
}

export default App;
