const articles = {
  1: {
    title: 'React article',
    description: 'Learn React.js'
  },
  2: {
    title: 'Vue article',
    description: 'Learn Vue.js'
  },
  3: {
    title: 'Angular article',
    description: 'Learn Angular'
  }
}

export default (req, res) => {
  const {
    query: { id },
  } = req

  const article = articles[id]
  if (article) {
    res.status(200).json(article)
  } else {
    res.sendStatus(404)
  }
}