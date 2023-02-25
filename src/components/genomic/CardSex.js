import PieChart from "../PieChart";

export default function CardSex(){
    const data = {
        labels: ['Male', 'Female'],
        datasets: [
          {
            label: 'Quantity',
            data: [345, 232],
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