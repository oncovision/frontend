import React from "react";
import testPdf from "../../assets/React App.pdf";
import testPdf1 from "../../assets/React App.pdf";

function PatientInfo7() {
  return (
    <div>
      <div className="box">
        <iframe
          src={testPdf}
          frameBorder="0"
          scrolling="no"
          width="100%"
          height="512"
          align="left"
        >
          {" "}
        </iframe>
      </div>

      <div className="box">
        <iframe
          src={testPdf1}
          frameBorder="0"
          scrolling="no"
          width="100%"
          height="512"
          align="right"
        ></iframe>
      </div>
    </div>
  );
}

export default PatientInfo7;
