import "./App.css";
import React, { useState } from "react";

function App() {
  const [selected, setSelected] = useState("research");

  console.log(selected);
//TODO download images and insert them
//TODO downliad squigly and insert
//TODO setup squigly to only show on selected radio

  //This object contains the contents for each message blurb
  const displayContent = {
    research: {
      title: "Research",
      message:
        "Deserunt ullamco excepteur elit eiusmod sint. Sint in proident exercitation nulla laboris minim laborum in labore aliquip amet officia. Ullamco ",
    },
    graduate: {
      title: "Graduate",
      message:
        "duis deserunt ut ea consequat amet exercitation exercitation anim tempor magna. Proident cillum laboris fugiat enim id nulla qui anim quis aute in laboris.",
    },
    network: {
      title: "Network",
      message:
        "sunt ut labore veniam consectetur incididunt. Non irure in dolor laboris officia exercitation laborum do adipisicing quis ad irure qui irure. Lorem proident sit ",
    },
    apply: {
      title: "Apply",
      message:
        "sit sunt cillum fugiat cillum tempor sunt consequat cupidatat reprehenderit eiusmod eu aute fugiat. Duis adipisicing incididunt non exercitation incididunt ",
    },
    employment: {
      title: "Employment",
      message:
        "sunt ut labore veniam consectetur incididunt. Non irure in dolor laboris officia exercitation laborum do adipisicing quis ad irure qui irure. Lorem proident sit ",
    },
  };

  const handleRadioChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <main className="App">
      <section>
        <h1>journey to success</h1>
        <div className="btnsContainer">
          <div className="selector">
            <label className="radio-label">
              <input
                type="radio"
                name="journeyStage"
                value="research"
                checked={selected === "research"}
                onChange={handleRadioChange}
              />
              <img
                src="https://www.moonind.com/assets/images/c1.jpg"
                alt="research"
              />
            </label>
            <div className="squigly"></div>
          </div>
          <div className="selector">
            <label className="radio-label">
              <input
                type="radio"
                name="journeyStage"
                value="graduate"
                checked={selected === "graduate"}
                onChange={handleRadioChange}
              />
              <img
                src="https://www.moonind.com/assets/images/c1.jpg"
                alt="graduate"
              />
            </label>
            <div className="squigly"></div>
          </div>
          <div className="selector">
            <label className="radio-label">
              <input
                type="radio"
                name="journeyStage"
                value="network"
                checked={selected === "network"}
                onChange={handleRadioChange}
              />
              <img
                src="https://www.moonind.com/assets/images/c1.jpg"
                alt="network"
              />
            </label>
            <div className="squigly"></div>
          </div>
          <div className="selector">
            <label className="radio-label">
              <input
                type="radio"
                name="journeyStage"
                value="apply"
                checked={selected === "apply"}
                onChange={handleRadioChange}
              />
              <img
                src="https://www.moonind.com/assets/images/c1.jpg"
                alt="apply"
              />
            </label>
            <div className="squigly"></div>
          </div>
          <div className="selector">
            <label className="radio-label">
              <input
                type="radio"
                name="journeyStage"
                value="employment"
                checked={selected === "employment"}
                onChange={handleRadioChange}
              />
              <img
                src="https://www.moonind.com/assets/images/c1.jpg"
                alt="employment"
              />
            </label>
            <div className="squigly"></div>
          </div>
        </div>
        <div className="msgContainer">
          <div className="msg">
            <h3>{displayContent[selected].title}</h3>
            <p>{displayContent[selected].message}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
