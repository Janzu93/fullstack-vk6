import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const createNew = async (content, votes) => {

  const response = await axios.post(url, { content, votes })
  return response.data
}

const vote = async (id) => {
  const anecdotes = await axios.get(url)
  const anecdote = anecdotes.data.filter(an => an.id === id)[0]

  anecdote.votes += 1

  const response = await axios.put(url + `/${id}`, anecdote)
  return response.data
}

export default { getAll, createNew, vote }