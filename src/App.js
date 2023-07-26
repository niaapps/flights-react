import "./styles.css";

import { useState } from "react";

const Header = ({ height, children }) => (
  <div
    style={{
      width: "auto",
      alignItems: "center",
      justifyContent: "center"
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
      justifyContent: "center"
    }}
  >
    {children}
  </div>
);

const Message = ({ place }) => {
  let template;
  if (place === "" || place === undefined) {
    template = <h3>No destination chosen yet</h3>;
  } else {
    template = <h3>You chose {place} as your next travel Destination.</h3>;
  }
  return template;
};

const Itinerary = ({ place }) => {
  let template;
  if (place === "Miami, Florida") {
    template = (
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
    template = (
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
    template = (
      <p>
        <ul>
          <li>Possible Itinerary</li>
          <li>Surfing classes</li>
          <li>Scuba Diving</li>
          <li>Food Tour</li>
        </ul>
      </p>
    );
  } else {
    template = (
      <p> No suggested itinerary because no destination has been chosen yet.</p>
    );
  }
  return template;
};

const TravelPicker = () => {
  const places = ["Miami, Florida", "Nassau, Bahamas", "San Diego, California"];
  const [place, setPlace] = useState("");
  const COLORS = ["lightblue", "lemonchiffon", "lightpink", "plum"];
  const [currentColor, setCurrentColor] = useState(COLORS[3]);

  const generateFlight = (a) => {
    setPlace(places[a]);
    setCurrentColor(COLORS[a]);
  };

  return (
    <div
      style={{
        padding: "30",
        display: "block",
        gap: 24,
        alignItems: "center",
        justifyContent: "center",
        background: currentColor
      }}
    >
      <button
        onClick={() => {
          generateFlight(0);
        }}
      >
        {places[0]}
      </button>
      <button
        onClick={() => {
          generateFlight(1);
        }}
      >
        {places[1]}
      </button>
      <button
        onClick={() => {
          generateFlight(2);
        }}
      >
        {places[2]}
      </button>
      <Message place={place}></Message>
      <Itinerary place={place}></Itinerary>
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
