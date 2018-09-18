import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = { students: [] }
  }

  componentDidMount() {
    // console.log(this.props.match.params.class)
    axios
      .get(
        `http://localhost:3005/students?class=${this.props.match.params.class}`
      )
      .then((response) => {
        console.log(response)
        this.setState({ students: response.data })
      })
  }

  render() {
    let newList = this.state.students.map((e, i, arr) => {
      // console.log(e)
      return (
        <Link to={`/student/${e.id}`} key={i}>
          <h3>
            {e.first_name} {e.last_name}
          </h3>
        </Link>
      )
    })

    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {newList}
      </div>
    )
  }
}
