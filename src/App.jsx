import useSwitch from "./assets/useSwitch";
import useDate from "./assets/useDate";

function App() {
  const { date } = useDate();

  return (
    <div>
      <h1>Data e ora attuali:</h1>
      <p>{date}</p>
    </div>
  );
}

export default App;

// useSwitch:

// const { isOn, toggle } = useSwitch();

// return (
//   <div>
//     <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
//     <button onClick={toggle}>Cambia Stato</button>
//   </div>
// );
