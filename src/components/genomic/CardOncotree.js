import PieChart from "../PieChart";

export default function CardOncotree(){
    const data = {
        labels: ['LUAD', 'LUSC', 'SCLC'],
        datasets: [
          {
            label: 'Quantity',
            data: [66, 120, 135],
            backgroundColor: [
                '#8ACBD8', 
                '#ECCFA4',
                '#FFB1A6',
            ],
            borderColor: [
                '#8ACBD8', 
                '#ECCFA4',
                '#FFB1A6',
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
        <h3>Oncotree Code</h3>
        </div>
    )
}
