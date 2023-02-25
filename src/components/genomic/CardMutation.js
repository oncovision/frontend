import { faker } from "@faker-js/faker";
import BarChart from "../BarChart";

export default function CardMutation() {
  const mutationOption = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Mutation Count",
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
        text: "Mutation count",
      },
    },
  };
  const labels = ["<80", "100", "200", "320", "400", "420", "440", ">440"];
  const mutData = {
    labels,
    datasets: [
      {
        label: "Number of samples",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "#2986e2",
      },
    ],
  };
  return (
    <div className="card">
      <div className="chart450">
        <BarChart chartData={mutData} options={mutationOption} />
      </div>
      <h3>Mutation Count</h3>
    </div>
  );
}
