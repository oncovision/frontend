import PatientInfo2 from "../components/patientData/PatientInfo2";
import PatientInfo3 from "../components/patientData/PatientInfo3";
import PatientInfo4 from "../components/patientData/PatientInfo4";
import PatientInfo5 from "../components/patientData/PatientInfo5";
import PatientInfo6 from "../components/patientData/PatientInfo6";
import PatientInfo7 from "../components/patientData/PatientInfo7";
import PatientInfoPage from "../components/patientData/PatinetInfoPage";
import Tabs from "../components/Tabs";

function PatientInfo() {
  return (
    <div className="pt-7">
      <Tabs
        tab1="Medical History Timeline"
        tab2="Diagnosis Timeline"
        tab3="Histology Data"
        tab4="Radiology Data"
        tab5="Multimodal Biomedical Integration"
        tab6="Compare Reports"
        tab7="MRD Data"
        content1={PatientInfo3}
        content2={PatientInfo2}
        content3={PatientInfo5}
        content4={PatientInfo4}
        content5={PatientInfo6}
        content6={PatientInfo7}
        content7={PatientInfoPage}
      ></Tabs>
    </div>
  );
}

export default PatientInfo;
