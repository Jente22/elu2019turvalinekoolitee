import React from 'react'
import ReactMarkdown from 'react-markdown'

export default class FromMarkdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    fetch(`https://raw.githubusercontent.com/Jente22/elu2019turvalinekoolitee/master/public/${this.props.name}.md`)
      .then(res => res.text())
      .then(result => (
        this.setState({
          markdown: result
        })
      ))
  }
  render() {
    return <ReactMarkdown source={this.state.markdown} escapeHtml={false} />
  }
}