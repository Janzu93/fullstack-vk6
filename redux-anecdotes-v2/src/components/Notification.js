import React from 'react'
import { actionForNotification } from '../reducers/notificationReducer'

class Notification extends React.Component {

  render() {
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1,
    }
    setTimeout(() => this.props.store.dispatch(actionForNotification.createNotification('')), 5000)
    return (

      <div style={style}>
        {this.props.store.getState().notification}
      </div>
    )
  }
}

export default Notification
