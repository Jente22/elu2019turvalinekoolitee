import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Spinner } from 'react-bootstrap'

export default class FromMarkdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    //fetch(process.env.PUBLIC_URL + this.props.name + '.md')
    fetch(`https://raw.githubusercontent.com/Jente22/elu2019turvalinekoolitee/master/public/${this.props.name}.md`)
      .then(res => res.text())
      .then(result => (
        this.setState({
          markdown: result
        })
      ))
  }
  render() {
    if (!this.state.markdown) return <div className="d-flex justify-content-center">
      <Spinner animation="border" variant="secondary" />
    </div>
    return <ReactMarkdown source={this.state.markdown} escapeHtml={false} />
  }
}