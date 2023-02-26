import PieChart from "../PieChart";

export default function CardTumorSite(){
    const data = {
        labels: ['right bronchus intermedius', 'left lower lobe', 'left upper lobe', 'right upper lobe', 'right middle lobe'],
        datasets: [
          {
            label: 'Quantity',
            data: [128, 199, 100, 98, 115],
            backgroundColor: [
              '#ADD98B', 
              '#FF9A8C',
              '#009CB3',
              '#EBC386',
              '#FD7F39'
            ],
            borderColor: [
              '#ADD98B', 
              '#FF9A8C',
              '#009CB3',
              '#EBC386',
              '#FD7F39'
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
        <h3>Tumor Site</h3>
        </div>
    )
}
