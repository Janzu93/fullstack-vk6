import React from 'react'
import { actionFor } from '../reducers/anecdoteReducer'
import { actionForNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'


class AnecdoteList extends React.Component {

  render() {
    const anecdotes = this.props.anecdote
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).filter(anecdote => anecdote.content.toLowerCase().includes(this.props.filter.toLowerCase())).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => {
                this.props.anecdoteVoting(anecdote.id)
                this.props.createNotification(`Voted '${anecdote.content}' up`)
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

const mapStateToProps = (state) => {
  return {
    anecdote: state.anecdote,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  anecdoteVoting: actionFor.anecdoteVoting,
  createNotification: actionForNotification.createNotification
}

const connectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

export default connectedAnecdoteList
