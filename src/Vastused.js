import React from 'react'
import { Button } from 'react-bootstrap'
import Graafik from './Graafik'

export default class Vastused extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    fetch(process.env.PUBLIC_URL + `/tulemused_${this.props.type}.json`)
      .then(res => res.json())
      .then(result => this.setState({
        data: result,
        selectedQuestion: Object.keys(result)[0]
      }))
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