import React from 'react'
import ReactMarkdown from 'react-markdown'

export default class FromMarkdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    fetch(process.env.PUBLIC_URL + `/${this.props.name}.md`)
      .then(res => res.text())
      .then(result => (
        this.setState({
          markdown: result
        })
      ))
  }
  render() {
    return <ReactMarkdown source={this.state.markdown} />
  }
}