import { createStore, combineReducers } from 'redux'
import anecdoteReducer, { actionFor } from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import anecdoteService from './services/anecdotes'

const reducer = combineReducers({
  notification: notificationReducer,
  anecdote: anecdoteReducer,
  filter: filterReducer
})
const store = createStore(reducer)

anecdoteService.getAll().then(anecdotes =>
  store.dispatch(actionFor.anecdotesInit(anecdotes))
)

export default store