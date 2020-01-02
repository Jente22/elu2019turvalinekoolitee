import React from 'react'
import { Button } from 'react-bootstrap'
import Papa from 'papaparse'

import Graafik from './Graafik'

export default class Vastused extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    Papa.parse(`https://raw.githubusercontent.com/Jente22/elu2019turvalinekoolitee/master/public/tulemused_${this.props.type}.csv`, {
      download: true,
      header: true,
      complete: (results) => {
        var questions = Object.keys(results.data[0])
        var data = {}
        questions.map(question => data[question] = {})
        results.data.map(row =>
          questions.map(question =>
            data[question][row[question]] = (data[question][row[question]] || 0) + 1
          )
        )
        delete data['Aeg']
        this.setState({
          data: data,
          selectedQuestion: Object.keys(data)[0]
        })
      }
    })
  }
  handleClick = e => {
    this.setState({
      selectedQuestion: e.target.name
    })
  }
  render() {
    var data = this.state.data
    if (!data) return ''
    var selectedQuestion = this.state.selectedQuestion
    var questionData = data[selectedQuestion]
    return <div className="mt-3">
      <Graafik question={selectedQuestion} data={questionData} />
      {Object.keys(data).map(question => (
        <Button onClick={this.handleClick} name={question} variant="light" key={question} className="mb-3 mr-3">{question}</Button>
      ))}
    </div>
  }
}