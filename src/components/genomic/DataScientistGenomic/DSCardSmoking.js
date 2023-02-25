import PieChart from "../../PieChart";

export default function DSSurvivalStatus(){
    const data = {
        labels: ['Yes', 'No', 'NA'],
        datasets: [
          {
            label: 'Quantity',
            data: [64, 149, 19],
            backgroundColor: [
              '#006e23',
              '#dc3912',
              '#808080',
            ],
            borderColor: [
              '#006e23',
              '#dc3912',
              '#808080',
            ],
            borderWidth: 1,
          },
        ],
      };
    return(
        <div className="card">
        <div className="aboutChart">
            <PieChart chartData={data} />
        </div>
        <h3>Passive Smoking</h3>
        </div>
    )
}