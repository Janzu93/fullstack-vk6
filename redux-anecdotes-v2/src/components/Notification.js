import React from 'react'
import { connect } from 'react-redux'
import { actionForNotification } from '../reducers/notificationReducer'

class Notification extends React.Component {

  render() {
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1,
    }
    setTimeout(() => this.props.createNotification(''), 5000)
    return (

      <div style={style}>
        {this.props.notification}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const mapDispatchToProps = {
  createNotification: actionForNotification.createNotification
}

const connectedNotification = connect(mapStateToProps, mapDispatchToProps)(Notification)

export default connectedNotification
