import React from 'react'
import { actionForFilter } from '../reducers/filterReducer'

class FilterForm extends React.Component {
  handleChange = (e) => {
    e.preventDefault()
    const content = e.target.value
    this.props.store.dispatch(actionForFilter.setFilter(content))
  }
  render() {
    return (
      <div>
        <form onChange={this.handleChange}>
          <div>filter<input name='filter'/></div>
        </form>
      </div>
    )
  }
}

export default FilterForm