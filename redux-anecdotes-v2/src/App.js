import React from 'react'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import FilterForm from './components/filterForm'
import { connect } from 'react-redux'

class App extends React.Component {

  render() {
    //  const anecdotes = this.props.store.getState().anecdote
    let notification = ''

    if (this.props.notification) {
      notification = <Notification />
    }
    return (
      <div>
        <h1>Programming anecdotes</h1>
        {notification}
        <FilterForm />
        <AnecdoteList />
        <AnecdoteForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const connectedApp = connect(mapStateToProps)(App)

export default connectedApp