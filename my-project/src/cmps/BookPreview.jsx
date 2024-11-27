import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { updateBook } from '../store/actions/book.actions'
import { StarRating } from './StarRating'

export function BookPreview({ book }) {
    const dispatch = useDispatch()
    const [isChecked, setIsChecked] = useState(book.wishList && book.wishList.length > 0)

    async function toggleCheck() {
        try {

            const updatedBook = { ...book }
            if (!Array.isArray(updatedBook.wishList)) {
                updatedBook.wishList = []
            }

            if (isChecked) {
                updatedBook.wishList = []
                setIsChecked(false)
            } else {
                updatedBook.wishList = ['global'] //! everyone can see
                setIsChecked(true)
            }

            dispatch(updateBook(updatedBook))
        } catch (err) {
            console.error('Failed to update wishlist:', err)
        }
    }


    return (
        <div className="book-preview__container">
            <section className="book-preview__card">
                <div className='flex'>
                    <span className="book-preview__title">
                        {book.title}
                    </span>
                    <div
                        className={`checkmark-box ${isChecked ? 'checked' : ''}`}
                        onClick={toggleCheck}
                    >
                        <svg className="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M9 16.2L4.8 12.4l-1.4 1.4L9 19 20.6 7.4l-1.4-1.4z" />
                        </svg>
                    </div>
                </div>
                <hr />
                <span className="book-preview__name">
                    {book.name}
                </span>
                <span className="book-preview__description">
                    {book.description}
                </span>
                <span className="book-preview__price">
                    Price ${book.price.toFixed(2)}
                </span>
                <span style={{display:'flex'}}>
                    <p>Rating</p>
                    <StarRating value={book.rate} />
                </span>
            </section>
        </div>
    )
}
