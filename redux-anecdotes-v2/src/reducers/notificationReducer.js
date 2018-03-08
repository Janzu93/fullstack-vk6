const initialState = ''

export const actionForNotification = {
  createNotification(notification) {
    return {
      type: 'NEW',
      notification
    }
  }
}

const notificationReducer = (store = initialState, action) => {

  switch (action.type) {
    case 'NEW':
      return action.notification
    default:
      return store
  }

}

export default notificationReducer