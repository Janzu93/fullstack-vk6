import React from 'react'
import { actionFor } from '../reducers/anecdoteReducer'
import { actionForNotification } from '../reducers/notificationReducer'


class AnecdoteList extends React.Component {

    render() {
      const anecdotes = this.props.store.getState().anecdote
      return (
        <div>
          <h2>Anecdotes</h2>
          {anecdotes.sort((a, b) => b.votes - a.votes).filter(anecdote => anecdote.content.includes(this.props.store.getState().filter)).map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => {
                  this.props.store.dispatch(actionFor.anecdoteVoting(anecdote.id))
                  this.props.store.dispatch(actionForNotification.createNotification(`Voted '${anecdote.content}' up`))
                  setTimeout(() => this.props.store.dispatch(actionForNotification.createNotification('')), 5000)
                }
                }>
                  vote
              </button>
              </div>
            </div>
          )}
        </div>
      )
    }
  }

export default AnecdoteList
