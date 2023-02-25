import PieChart from "../PieChart";

export default function CardDiseaseFeeStatus(){
    const data = {
        labels: ['N/A', 'recurred/progressed'],
        datasets: [
          {
            label: 'Quantity',
            data: [23, 87],
            backgroundColor: [
              '#d3d3d3', 
              '#d95f02'
            ],
            borderColor: [
                '#d3d3d3', 
                '#d95f02',
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