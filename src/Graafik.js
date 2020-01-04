import React from 'react'
import Chart from 'chart.js'

export default class Graafik extends React.Component {
  constructor(props) {
    super(props)
    this.canvasRef = React.createRef()
  }
  componentDidMount() {
    var data = this.props.data
    delete data['']
    this.chart = new Chart(this.canvasRef.current, {
      type: 'bar',
      data: {
        labels: Object.keys(data),
        datasets: [
          {
            data: Object.values(data),
            backgroundColor: 'lightblue'
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: this.props.question
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  }
  componentDidUpdate() {
    var data = this.props.data
    delete data['']
    this.chart.data.labels = Object.keys(data)
    this.chart.data.datasets[0].data = Object.values(data)
    this.chart.options.title.text = this.props.question
    this.chart.update()
  }
  render() {
    return <canvas ref={this.canvasRef} />
  }
}