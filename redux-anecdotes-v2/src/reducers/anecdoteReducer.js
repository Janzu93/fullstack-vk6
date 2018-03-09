export const actionFor = {
  anecdoteCreation(data) {
    return {
      type: 'CREATE',
      data
    }
  },
  anecdoteVoting(data) {
    return {
      type: 'VOTE',
      id: data.id,
      data
    }
  },
  anecdotesInit(data) {
    return {
      type: 'INIT_ANECDOTES',
      data
    }
  }
}

const anecdoteReducer = (store = [], action) => {

  if (action.type === 'VOTE') {
    return store.filter(a => a.id !== action.id).concat(action.data)
  }
  if (action.type === 'CREATE') {
    return [...store, action.data]
  }
  if (action.type === 'INIT_ANECDOTES') {
    return action.data
  }

  return store
}

export default anecdoteReducer