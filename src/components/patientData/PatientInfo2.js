import React from "react";
import { useLocation } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faHospital,
  faTruck,
  faRadiation,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/About.css";
import "react-vertical-timeline-component/style.min.css";

const workIcon = {
  icon: <FontAwesomeIcon icon={faRadiation} />,
  iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
};
const admitIcon = {
  icon: <FontAwesomeIcon icon={faTruck} />,
  iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faHospital} />,
  iconStyle: { background: "rgb(16, 204, 82)", color: "#fff" },
};

export const timeline1 = [
  {
    icon: workIcon,
    date: "2011 - present",
    title: "Last Diagnosis",
    subtitle: "Status : Alive",
    desc: "After 3rd Chemo, patient survived.",
  },
  {
    icon: workIcon,
    date: "2010 - 2011",
    title: "Third Diagnosis",
    subtitle:
      "Status : Patienet shows signs of recovery and body is responding well to chemo",
    desc: "Chemo exact details:",
  },
  {
    icon: workIcon,
    date: "2008 - 2010",
    title: "Second Diagnosis",
    subtitle: "Status : Chemo in Progress",
    desc: "Patient on low diet and Chemo in progress",
  },
  {
    icon: workIcon,
    date: "2006 - 2008",
    title: "First Diagnosis",
    subtitle: "Status : Chemo in progress",
    desc: "Patient on low diet and Chemo in progress",
  },
  {
    icon: schoolIcon,
    date: "2004 - 2006",
    title: "Inital Diagnosis",
    subtitle: "Status : Tumours taken for tests",
    desc: "Signs and symptoms of cancer observed.",
  },
  {
    icon: admitIcon,
    date: "2002 - 2004",
    title: "Admitted to hospital for panic attack",
    subtitle: "Initial prognosis",
    desc: "Patinet had panic attack for first time.",
  },
  {
    icon: admitIcon,
    date: "2001 - 2002",
    title: "Admitted to hospital for minor issues",
    subtitle: "Minor stress issues",
    desc: "Patinet had high stress due to studies",
  },
  { icon: starIcon },
];

export const timeline2 = [
  {
    icon: workIcon,
    date: "2011 - present",
    title: "Last Diagnosis",
    subtitle: "Status : Alive",
    desc: "After 3rd Chemo, patient survived.",
  },
  {
    icon: workIcon,
    date: "2010 - 2011",
    title: "Third Diagnosis",
    subtitle:
      "Status : Patienet shows signs of recovery and body is responding well to chemo",
    desc: "Chemo exact details:",
  },
  {
    icon: workIcon,
    date: "2008 - 2010",
    title: "Second Diagnosis",
    subtitle: "Status : Chemo in Progress",
    desc: "Patient on low diet and Chemo in progress",
  },
  {
    icon: workIcon,
    date: "2006 - 2008",
    title: "First Diagnosis",
    subtitle: "Status : Chemo in progress",
    desc: "Patient on low diet and Chemo in progress",
  },
  {
    icon: schoolIcon,
    date: "2004 - 2006",
    title: "Inital Diagnosis",
    subtitle: "Status : Tumours taken for tests",
    desc: "Signs and symptoms of cancer observed.",
  },
  {
    icon: admitIcon,
    date: "2002 - 2004",
    title: "Admitted to hospital for panic attack",
    subtitle: "Initial prognosis",
    desc: "Patinet had panic attack for first time.",
  },
  {
    icon: admitIcon,
    date: "2001 - 2002",
    title: "Admitted to hospital for minor issues",
    subtitle: "Minor stress issues",
    desc: "Patinet had high stress due to studies",
  },
  { icon: starIcon },
];

export const timeline3 = [
  {
    icon: workIcon,
    date: "2011 - present",
    title: "Last Diagnosis",
    subtitle: "Status : Alive",
    desc: "After 3rd Chemo, patient survived.",
  },
  {
    icon: workIcon,
    date: "2010 - 2011",
    title: "Third Diagnosis",
    subtitle:
      "Status : Patienet shows signs of recovery and body is responding well to chemo",
    desc: "Chemo exact details:",
  },
  {
    icon: workIcon,
    date: "2008 - 2010",
    title: "Second Diagnosis",
    subtitle: "Status : Chemo in Progress",
    desc: "Patient on low diet and Chemo in progress",
  },
  {
    icon: workIcon,
    date: "2006 - 2008",
    title: "First Diagnosis",
    subtitle: "Status : Chemo in progress",
    desc: "Patient on low diet and Chemo in progress",
  },
  {
    icon: schoolIcon,
    date: "2004 - 2006",
    title: "Inital Diagnosis",
    subtitle: "Status : Tumours taken for tests",
    desc: "Signs and symptoms of cancer observed.",
  },
  {
    icon: admitIcon,
    date: "2002 - 2004",
    title: "Admitted to hospital for panic attack",
    subtitle: "Initial prognosis",
    desc: "Patinet had panic attack for first time.",
  },
  {
    icon: admitIcon,
    date: "2001 - 2002",
    title: "Admitted to hospital for minor issues",
    subtitle: "Minor stress issues",
    desc: "Patinet had high stress due to studies",
  },
  { icon: starIcon },
];

export const timeline4 = [
  {
    icon: workIcon,
    date: "2011 - present",
    title: "Last Diagnosis",
    subtitle: "Status : Alive",
    desc: "After 3rd Chemo, patient survived.",
  },
  {
    icon: workIcon,
    date: "2010 - 2011",
    title: "Third Diagnosis",
    subtitle:
      "Status : Patienet shows signs of recovery and body is responding well to chemo",
    desc: "Chemo exact details:",
  },
  {
    icon: workIcon,
    date: "2008 - 2010",
    title: "Second Diagnosis",
    subtitle: "Status : Chemo in Progress",
    desc: "Patient on low diet and Chemo in progress",
  },
  {
    icon: workIcon,
    date: "2006 - 2008",
    title: "First Diagnosis",
    subtitle: "Status : Chemo in progress",
    desc: "Patient on low diet and Chemo in progress",
  },
  {
    icon: schoolIcon,
    date: "2004 - 2006",
    title: "Inital Diagnosis",
    subtitle: "Status : Tumours taken for tests",
    desc: "Signs and symptoms of cancer observed.",
  },
  {
    icon: admitIcon,
    date: "2002 - 2004",
    title: "Admitted to hospital for panic attack",
    subtitle: "Initial prognosis",
    desc: "Patinet had panic attack for first time.",
  },
  {
    icon: admitIcon,
    date: "2001 - 2002",
    title: "Admitted to hospital for minor issues",
    subtitle: "Minor stress issues",
    desc: "Patinet had high stress due to studies",
  },
  { icon: starIcon },
];

export const timeline5 = [
  {
    icon: workIcon,
    date: "2011 - present",
    title: "Last Diagnosis",
    subtitle: "Status : Alive",
    desc: "After 3rd Chemo, patient survived.",
  },
  {
    icon: workIcon,
    date: "2010 - 2011",
    title: "Third Diagnosis",
    subtitle:
      "Status : Patienet shows signs of recovery and body is responding well to chemo",
    desc: "Chemo exact details:",
  },
  {
    icon: workIcon,
    date: "2008 - 2010",
    title: "Second Diagnosis",
    subtitle: "Status : Chemo in Progress",
    desc: "Patient on low diet and Chemo in progress",
  },
  {
    icon: workIcon,
    date: "2006 - 2008",
    title: "First Diagnosis",
    subtitle: "Status : Chemo in progress",
    desc: "Patient on low diet and Chemo in progress",
  },
  {
    icon: schoolIcon,
    date: "2004 - 2006",
    title: "Inital Diagnosis",
    subtitle: "Status : Tumours taken for tests",
    desc: "Signs and symptoms of cancer observed.",
  },
  {
    icon: admitIcon,
    date: "2002 - 2004",
    title: "Admitted to hospital for panic attack",
    subtitle: "Initial prognosis",
    desc: "Patinet had panic attack for first time.",
  },
  {
    icon: admitIcon,
    date: "2001 - 2002",
    title: "Admitted to hospital for minor issues",
    subtitle: "Minor stress issues",
    desc: "Patinet had high stress due to studies",
  },
  { icon: starIcon },
];

function PatientInfo2() {
  const location = useLocation();
  const pdata = location.state;
  console.log(pdata);

  var timeline = [];
  if (pdata[0] === "AMC-001") {
    timeline = timeline1;
  } else if (pdata[0] === "AMC-002") {
    timeline = timeline2;
  } else if (pdata[0] === "AMC-003") {
    timeline = timeline3;
  } else if (pdata[0] === "AMC-004") {
    timeline = timeline4;
  } else if (pdata[0] === "AMC-005") {
    timeline = timeline5;
  }

  return (
    <div
      className="App"
      style={{
        backgroundColor: "silver",
      }}
    >
      <h3>Patinet Data for id - {pdata} </h3>
      <VerticalTimeline>
        {timeline.map((t, i) => {
          const contentStyle =
            i === 0
              ? { background: "rgb(33, 150, 243)", color: "#fff" }
              : undefined;
          const arrowStyle =
            i === 0
              ? { borderRight: "7px solid  rgb(33, 150, 243)" }
              : undefined;

          return (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={contentStyle}
              contentArrowStyle={arrowStyle}
              date={t.date}
              {...t.icon}
            >
              {t.title ? (
                <React.Fragment>
                  <h3 className="vertical-timeline-element-title">{t.title}</h3>
                  {t.subtitle && (
                    <h4 className="vertical-timeline-element-subtitle">
                      {t.subtitle}
                    </h4>
                  )}
                  {t.desc && <p>{t.desc}</p>}
                </React.Fragment>
              ) : undefined}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default PatientInfo2;
