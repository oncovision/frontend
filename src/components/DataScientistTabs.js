import { useState } from "react";
import "../styles/Tabs.css";
import "../styles/About.css";

function DataScientistTabs({
  tab1,
  tab2,
  tab3,
  tab4,
  tab5,
  content1: Page1,
  content2: Page2,
  content3: Page3,
  content4: Page4,
  content5: Page5,
}) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          {tab1}
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          {tab2}
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          {tab3}
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          {tab4}
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          {tab5}
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <Page1 />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Page2 />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <Page3 />
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <Page4 />
        </div>
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <Page5 />
        </div>
      </div>
    </div>
  );
}

export default DataScientistTabs;
