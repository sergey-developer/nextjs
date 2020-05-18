import React from 'react'
import fetch from 'node-fetch'
import ErrorPage from 'next/error'

function Article({article}) {
  if (!article) {
    return <ErrorPage statusCode={404}/>
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
    </div>
  )
}

export async function getServerSideProps({params, res}) {
  try {
    const {id} = params
    const url = `http://localhost:3000/api/articles/${id}`
    const response = await fetch(url)
    const article = await response.json()

    return {
      props: {
        article,
      },
    }
  } catch {
    res.statusCode = 404
    return {
      props: {}
    }
  }
}

export default Article