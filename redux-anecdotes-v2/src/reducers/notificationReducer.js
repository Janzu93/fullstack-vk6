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
      store = action.notification
      return store
    default:
      return store
  }

}

export default notificationReducer