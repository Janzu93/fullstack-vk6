import React from 'react'
import { actionForFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux'

class FilterForm extends React.Component {
  handleChange = (e) => {
    e.preventDefault()
    const content = e.target.value
    this.props.setFilter(content)
  }
  render() {
    return (
      <div>
        <form onChange={this.handleChange}>
          <div>filter<input name='filter' /></div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  setFilter: actionForFilter.setFilter
}

const connectedFilterForm = connect(null, mapDispatchToProps)(FilterForm)

export default connectedFilterForm