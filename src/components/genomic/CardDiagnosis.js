import { faker } from "@faker-js/faker";
import BarChart from "../BarChart";

export default function CardDiagnosis() {
  const mutationOption = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Age",
          colour: "black",
        },
      },
      y: {
        title: {
          display: true,
          text: "No. of samples",
          colour: "black",
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },

      title: {
        display: true,
        text: "Diagnosis Age",
      },
    },
  };
  const labels = ["48", "62", "64", "66", "74", "80"];
  const mutData = {
    labels,
    datasets: [
      {
        label: "Number of samples",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: "#2986e2",
      },
    ],
  };
  return (
    <div className="card">
      <div className="chart450">
        <BarChart chartData={mutData} options={mutationOption} />
      </div>
      <h3>Diagnosis Age</h3>
    </div>
  );
}
