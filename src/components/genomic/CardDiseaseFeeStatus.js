import PieChart from "../PieChart";

export default function CardDiseaseFeeStatus(){
    const data = {
        labels: ['N/A', 'recurred/progressed'],
        datasets: [
          {
            label: 'Quantity',
            data: [23, 87],
            backgroundColor: [
              '#C84802', 
              '#ECCFA4'
            ],
            borderColor: [
                '#C84802', 
                '#ECCFA4',
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
        <h3>Disease Free Status</h3>
        </div>
    )
}
