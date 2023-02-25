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
  faHome,
} from "@fortawesome/free-solid-svg-icons";

import "react-vertical-timeline-component/style.min.css";
import "../../styles/About.css";

const workIcon = {
  icon: <FontAwesomeIcon icon={faRadiation} />,
  iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
};
const familyIcon = {
  icon: <FontAwesomeIcon icon={faHome} />,
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
    icon: schoolIcon,
    date: "2004 - 2006",
    title: "Malignant lesion found",
    subtitle: "Status : Tumours taken for tests",
    desc: "Signs and symptoms of malignant lesion observed.",
  },
  {
    icon: familyIcon,
    date: " - 2006",
    title: "Medical History of family verified.",
    subtitle: "No chronic health conditions found.",
    desc: "Family history found to be clean.",
  },
  {
    icon: admitIcon,
    date: "2002 - 2004",
    title: "Medication started for benign lesion",
    subtitle: "Initial prognosis",
    desc: "Patinet couldn't see any improvement from medications.",
  },
  {
    icon: admitIcon,
    date: "2001 - 2002",
    title: "Admitted to hospital and found benign lesion",
    subtitle: "Initial prognosis",
    desc: "Patinet found lump that can be felt under the skin",
  },
  {
    icon: admitIcon,
    date: "1999 - 2001",
    title: "Visited family doctor",
    subtitle: "Fatigue issues",
    desc: "Patinet used to feel tired very easily.",
  },

  { icon: starIcon },
];

export const timeline2 = [
  {
    icon: schoolIcon,
    date: "2004 - 2006",
    title: "Malignant lesion found",
    subtitle: "Status : Tumours taken for tests",
    desc: "Signs and symptoms of malignant lesion observed.",
  },
  {
    icon: familyIcon,
    date: " - 2006",
    title: "Medical History of family verified.",
    subtitle: "No chronic health conditions found.",
    desc: "Family history found to be clean but he was adopted.",
  },
  {
    icon: admitIcon,
    date: "2002 - 2004",
    title: "Medication started for benign lesion",
    subtitle: "Initial prognosis",
    desc: "Patinet couldn't see any improvement from medications.",
  },
  {
    icon: admitIcon,
    date: "2001 - 2002",
    title: "Admitted to hospital and found benign lesion",
    subtitle: "Initial prognosis",
    desc: "Patinet found lump that can be felt under the skin",
  },
  {
    icon: admitIcon,
    date: "1999 - 2001",
    title: "Visited family doctor",
    subtitle: "Cough issues",
    desc: "Patinet used to get persistent cough.",
  },

  { icon: starIcon },
];

export const timeline3 = [
  {
    icon: schoolIcon,
    date: "2004 - 2006",
    title: "Malignant lesion found",
    subtitle: "Status : Tumours taken for tests",
    desc: "Signs and symptoms of malignant lesion observed.",
  },
  {
    icon: familyIcon,
    date: " - 2006",
    title: "Medical History of family verified.",
    subtitle: "No chronic health conditions found.",
    desc: "Family history found to be clean.",
  },
  {
    icon: admitIcon,
    date: "2002 - 2004",
    title: "Medication started for benign lesion",
    subtitle: "Initial prognosis",
    desc: "Patinet couldn't see any improvement from medications.",
  },
  {
    icon: admitIcon,
    date: "2001 - 2002",
    title: "Admitted to hospital and found benign lesion",
    subtitle: "Initial prognosis",
    desc: "Patinet found lump that can be felt under the skin",
  },
  {
    icon: admitIcon,
    date: "1999 - 2001",
    title: "Visited family doctor",
    subtitle: "Hoarseness issues",
    desc: "Patinet used to feel hoarseness.",
  },

  { icon: starIcon },
];

export const timeline4 = [
  {
    icon: schoolIcon,
    date: "2004 - 2006",
    title: "Malignant lesion found",
    subtitle: "Status : Tumours taken for tests",
    desc: "Signs and symptoms of cancer observed.",
  },
  {
    icon: familyIcon,
    date: " - 2006",
    title: "Medical History of family verified",
    subtitle: "Chronic health conditions found in family.",
    desc: "Paternal grandmother found to be died from Cancer.",
  },
  {
    icon: admitIcon,
    date: "2002 - 2004",
    title: "Medication started for benign lesion",
    subtitle: "Initial prognosis",
    desc: "Patinet couldn't see any improvement from medications.",
  },
  {
    icon: admitIcon,
    date: "2001 - 2002",
    title: "Admitted to hospital and found benign lesion",
    subtitle: "Initial prognosis",
    desc: "Patinet found lump that can be felt under the skin",
  },
  {
    icon: admitIcon,
    date: "1999 - 2001",
    title: "Visited family doctor.",
    subtitle: "Common cold and trouble breathing.",
    desc: "Patinet used to catch cold easily and shortness of breath.",
  },
  { icon: starIcon },
];

export const timeline5 = [
  {
    icon: schoolIcon,
    date: "2004 - 2006",
    title: "Malignant lesion found",
    subtitle: "Status : Tumours taken for tests",
    desc: "Signs and symptoms of cancer observed.",
  },
  {
    icon: familyIcon,
    date: " - 2006",
    title: "Medical History of family verified",
    subtitle: "Chronic health conditions found in family.",
    desc: "Paternal uncle found to be died from Cancer.",
  },
  {
    icon: admitIcon,
    date: "2002 - 2004",
    title: "Medication started for benign lesion",
    subtitle: "Initial prognosis",
    desc: "Patinet couldn't see any improvement from medications.",
  },
  {
    icon: admitIcon,
    date: "2001 - 2002",
    title: "Admitted to hospital and found benign lesion",
    subtitle: "Initial prognosis",
    desc: "Patinet found lump that can be felt under the skin",
  },
  {
    icon: admitIcon,
    date: "1999 - 2001",
    title: "Visited family doctor",
    subtitle: "Fatigue issues",
    desc: "Patinet used to feel tired very easily.",
  },
  { icon: starIcon },
];

function PatientInfo3() {
  const location = useLocation();
  const pdata = location.state;

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
      className="App "
      style={{
        backgroundColor: "silver",
      }}
    >
      <h3>Patinet Data for Id - {pdata} </h3>
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
                    <h6 className="vertical-timeline-element-subtitle">
                      {t.subtitle}
                    </h6>
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

export default PatientInfo3;
