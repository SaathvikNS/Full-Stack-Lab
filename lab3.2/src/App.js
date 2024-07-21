import React from 'react'
import './App.css'

const App = () => {
  const books = [
    {
      img: "https://m.media-amazon.com/images/I/41XMaCHkrgL.jpg",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
    },
    {
      img: "https://m.media-amazon.com/images/I/416JeZoF8tL._SY445_SX342_.jpg",
      title: "The Alchemist",
      author: "Poulo Coelho",
      genre: "Fiction",
    },
    {
      img: "https://m.media-amazon.com/images/I/7180qjGSgDL._AC_UF1000,1000_QL80_.jpg",
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
    },
    {
      img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/f/s/1/pride-prejudice-original-imagy32ephewfga2.jpeg?q=90&crop=false",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/DaVinciCode.jpg/220px-DaVinciCode.jpg",
      title: "Da Vinci Code",
      author: "Dan Brown",
      genre: "Mystery",
    },
  ];

  return (
    <div className='wrapper'>
      <header>
        Library Dataset
      </header>
      <main>
        {books.map((item)=>(
          <div className='card'>
            <div className='imgcontainer'>
              <img src={item.img}/>
            </div>
            <div className='info'>
              <div className='title'>{item.title}</div>
              <div className='author'>{item.author}</div>
              <div className='genre'>{item.genre}</div>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}

export default App