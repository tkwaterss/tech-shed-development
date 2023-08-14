import "./App.css";
import React, { useState } from "react";
import journey1 from "./images/journeyIMG1.png";
import journey2 from "./images/journeyIMG2.png";
import journey3 from "./images/journeyIMG3.png";
import journey4 from "./images/journeyIMG4.png";
import journey5 from "./images/journeyIMG5.png";
import squigly from "./images/squigly.png";

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
              <img src={journey1} alt="research" />
            </label>
            {selected === "research" && (
              <img src={squigly} className="squigly" alt="squigly line"></img>
            )}
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
              <img src={journey2} alt="graduate" />
            </label>
            {selected === "graduate" && (
              <img src={squigly} className="squigly" alt="squigly line"></img>
            )}
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
              <img src={journey3} alt="network" />
            </label>
            {selected === "network" && (
              <img src={squigly} className="squigly" alt="squigly line"></img>
            )}
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
              <img src={journey4} alt="apply" />
            </label>
            {selected === "apply" && (
              <img src={squigly} className="squigly" alt="squigly line"></img>
            )}
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
              <img src={journey5} alt="employment" />
            </label>
            {selected === "employment" && (
              <img src={squigly} className="squigly" alt="squigly line"></img>
            )}
          </div>
        </div>
        <div className="msgContainer">
          <div className="msg arrow-top">
            <h3>{displayContent[selected].title}</h3>
            <p>{displayContent[selected].message}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
