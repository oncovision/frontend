import PieChart from "../PieChart";

export default function CardOncotree(){
    const data = {
        labels: ['LUAD', 'LUSC', 'SCLC'],
        datasets: [
          {
            label: 'Quantity',
            data: [66, 120, 135],
            backgroundColor: [
                '#f88508', 
                '#dc3912',
                '#718cf1',
            ],
            borderColor: [
                '#f88508', 
                '#dc3912',
                '#718cf1',
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