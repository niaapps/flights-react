import "./styles.css";

import { useState } from "react";

const Header = ({ children }) => (
  <div
    style={{
      width: "auto",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <img
      src="https://www.gstatic.com/travel-frontend/animation/hero/flights_3.svg"
      alt="Google FLights Background"
    />
    <h1>{children}</h1>
  </div>
);
const Footer = ({ height, children }) => (
  <div
    style={{
      width: "auto",
      height: height,
      border: "2px purple dashed",
      display: "flex",
      background: "lightblue",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {children}
  </div>
);

const Message = ({ place }) =>
  typeof place === "undefined" ? (
    <h3>No destination chosen yet</h3>
  ) : (
    <h3>You chose {place} as your next travel destination.</h3>
  );

const Itinerary = ({ place }) => {
  if (place === "Miami, Florida") {
    return (
      <p>
        <ul>
          <li>Possible Itinerary</li>
          <li>Sunbathe</li>
          <li>Alligator Show</li>
          <li>Disney</li>
        </ul>
      </p>
    );
  } else if (place === "Nassau, Bahamas") {
    return (
      <p>
        <ul>
          <li>Possible Itinerary</li>
          <li>Snorkeling</li>
          <li>Cave Tour</li>
          <li>Queens Staircase</li>
        </ul>
      </p>
    );
  } else if (place === "San Diego, California") {
    return (
      <p>
        <ul>
          <li>Possible Itinerary</li>
          <li>Surfing classes</li>
          <li>Scuba Diving</li>
          <li>Food Tour</li>
        </ul>
      </p>
    );
  } else if (typeof place === "undefined") {
    return (
      <p> No suggested itinerary because no destination has been chosen yet.</p>
    );
  }
};

const TravelPicker = () => {
  const destinations = [
    { name: "Miami, Florida", color: "plum" },
    { name: "Nassau, Bahamas", color: "lemonchiffon" },
    { name: "San Diego, California", color: "lightpink" },
  ];
  const [destinationIndex, setDestinationIndex] = useState();
  // This will be null by default

  return (
    <div
      style={{
        padding: "30",
        display: "block",
        gap: 24,
        alignItems: "center",
        justifyContent: "center",
        background:
          typeof destinations[destinationIndex] === "undefined"
            ? "peachpuff"
            : destinations[destinationIndex].color,
      }}
    >
      <button onClick={() => setDestinationIndex(0)}>Miami, Florida</button>
      <button onClick={() => setDestinationIndex(1)}>Nassau, Bahamas</button>
      <button onClick={() => setDestinationIndex(2)}>
        San Diego, California
      </button>
      <Message
        place={
          typeof destinations[destinationIndex] === "undefined"
            ? undefined
            : destinations[destinationIndex].name
        }
      />
      <Itinerary
        place={
          typeof destinations[destinationIndex] === "undefined"
            ? undefined
            : destinations[destinationIndex].name
        }
      />
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Header height={250}>Flights</Header>
      <h1>Hello Traveler!</h1>
      <h2>Choose your Destination</h2>
      <TravelPicker />
      <Footer width={500} height={80}>
        Footer
      </Footer>
    </div>
  );
}
