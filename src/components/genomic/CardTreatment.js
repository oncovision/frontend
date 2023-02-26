import PieChart from "../PieChart";

export default function CardTreatment(){
    const data = {
        labels: ['Heterogeneous progression', 'Heterogeneous response', 'Primary tumor', 'Stable disease in primary tumor', 'Heterogeneous progression'],
        datasets: [
          {
            label: 'Quantity',
            data: [128, 199, 100, 98, 115],
            backgroundColor: [
              '#FD7F39', 
              '#EBC386',
              '#009CB3',
              '#FF9A8C',
              '#ADD98B'
            ],
            borderColor: [
            '#FD7F39', 
              '#EBC386',
              '#009CB3',
              '#FF9A8C',
              '#ADD98B'
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
