import { faker } from "@faker-js/faker";
import BarChart from "../../BarChart";

export default function CardDSAge(){
    const ageOption = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Age',
          },
        },
    };
    const labels = ["40","45", "50", "55", "60", "65", "70", "75", "80",];
    const ageData = {
    labels,
    datasets: [
        {
        label: 'Number of samples',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: '#2986e2',
        },
    ],
    }
    return(
        <div className="card">
        <div className="chart450">

        <BarChart chartData={ageData} options={ageOption} />
        </div>
        <h3>Age (Yrs) </h3>
        </div>
    )
}