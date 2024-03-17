import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [readingTime, setReadingTime] = useState(0)

  const handleMarkAsRead = time =>{
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime)
  }

  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmark = blog => {
    // console.log("Bookmark adding soon")
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto'>
      <Blogs handleMarkAsRead = {handleMarkAsRead} handleAddToBookmark = {handleAddToBookmark}></Blogs>
      <Bookmarks bookmarks = {bookmarks} readingTime = {readingTime}></Bookmarks>
      </main>
    </>
  )
}

export default App
