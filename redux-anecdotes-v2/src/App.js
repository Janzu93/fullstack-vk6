import React from 'react'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import FilterForm from './components/filterForm'
import { connect } from 'react-redux'
import { actionFor } from './reducers/anecdoteReducer'

class App extends React.Component {
  componentDidMount = async () => {
    this.props.anecdoteInit()
  }

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

const mapDispatchToProps = {
  anecdoteInit: actionFor.anecdotesInit
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default connectedApp