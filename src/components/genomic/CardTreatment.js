import PieChart from "../PieChart";

export default function CardTreatment(){
    const data = {
        labels: ['Heterogeneous progression', 'Heterogeneous response', 'Primary tumor', 'Stable disease in primary tumor', 'Heterogeneous progression'],
        datasets: [
          {
            label: 'Quantity',
            data: [128, 199, 100, 98, 115],
            backgroundColor: [
              '#f88508', 
              '#dc3912',
              '#718cf1',
              '#990099',
              '#109618'
            ],
            borderColor: [
            '#f88508', 
            '#dc3912',
            '#718cf1',
            '#990099',
            '#109618'
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
        <h3>Treatment Response</h3>
        </div>
    )
}