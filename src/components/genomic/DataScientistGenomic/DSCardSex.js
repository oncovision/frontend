import PieChart from "../../PieChart";

export default function DSCardSex(){
    const data = {
        labels: ['Male', 'Female'],
        datasets: [
          {
            label: 'Quantity',
            data: [38, 37],
            backgroundColor: [
              '#718cf1',
              '#ff93e2',
            ],
            borderColor: [
              '#718cf1',
              '#ff93e2',
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
        <h3>Sex</h3>
        </div>
    )
}