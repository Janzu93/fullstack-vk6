const anecdoteToShow = ({ anecdote, filter }) => {
  return !filter ? anecdote : anecdote.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
}

export default anecdoteToShow