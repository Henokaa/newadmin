import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Masonry from 'react-masonry-css'
import NoteCard from '../components/NoteCard'
import { Redirect } from "react-router-dom";
import NewsCard from '../components/NewsCard';
export default function News({ authorized }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/news')
      .then(res => res.json())
      .then(data => setNews(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/news/' + id, {
      method: 'DELETE'
    })
    const newNews = news.filter(news => news.id !== id)
    setNews(newNews)
  }

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  };

  
  return (
  
    <Container>

{(() => {
  if(!authorized) {
    return <Redirect to="/login" />;
  }
})}

      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {news.map(news => (
          <div key={news.id}>
            <NewsCard news={news} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  )
}
