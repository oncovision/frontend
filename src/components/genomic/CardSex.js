import PieChart from "../PieChart";

export default function CardSex(){
    const data = {
        labels: ['Male', 'Female'],
        datasets: [
          {
            label: 'Quantity',
            data: [345, 232],
            backgroundColor: [
              '#8ACBD8',
              '#BAE39A',
            ],
            borderColor: [
              '#8ACBD8',
              '#BAE39A',
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
