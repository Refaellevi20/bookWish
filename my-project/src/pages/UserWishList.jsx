import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { BookPreview } from '../cmps/BookPreview'
import { loadBooks } from '../store/actions/book.actions'

function UserWishList() {
  const books = useSelector((storeState) => storeState.bookModule.books)

  useEffect(() => {
    loadBooks()
  }, [])

  const wishListBooks = books.filter((book) => book.wishList && book.wishList.length > 0)

  return (
    <div className="wish-list">
      <Link to="/"> back</Link>
      <h1 style={{ marginTop: '23px' }}>My list</h1>
      <p style={{ marginTop: '23px', fontSize: '1.4rem' }}>
        Organize your go-to freelancers and favorite services into
      </p>
      <p style={{ marginTop: '-13px', fontSize: '1.4rem' }}>
        custom lists you can easily access and share with your team.
      </p>
      <h3 style={{ marginTop: '10px', fontSize: '1.2rem' }}>
        You have {wishListBooks.length} {wishListBooks.length === 1 ? 'book' : 'books'} in the wishlist.
      </h3>
      
      <ul className="book-list">
        {wishListBooks.length > 0 ? (
          wishListBooks.map((book) => (
            <li className="book-preview" key={uuidv4()}>
              <BookPreview book={book} />
            </li>
          ))
        ) : (
          <h2>The wish list is empty</h2>
         
        )}
      </ul>
    </div>
  )
}

export default UserWishList
