import PieChart from "../../PieChart";

export default function DSSurvivalStatus(){
    const data = {
        labels: ['Living', 'Deceased', 'NA'],
        datasets: [
          {
            label: 'Quantity',
            data: [56, 170, 5],
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
        <h3>OverAll Survival Status</h3>
        </div>
    )
}