import anecdoteService from '../services/anecdotes'

export const actionFor = {
  anecdoteCreation(content) {
    return async (dispatch) => {
      const newAnecdote = await anecdoteService.createNew(content)
      dispatch({
        type: 'CREATE',
        data: newAnecdote
      })
    }
  },
  anecdoteVoting(id) {
    return async (dispatch) => {
      const anecdote = await anecdoteService.vote(id)
      dispatch({
        type: 'VOTE',
        id,
        data: anecdote
      })
    }
  },
  anecdotesInit() {
    return async (dispatch) => {
      const anecdotes = await anecdoteService.getAll()
      dispatch({
        type: 'INIT_ANECDOTES',
        data: anecdotes
      })
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