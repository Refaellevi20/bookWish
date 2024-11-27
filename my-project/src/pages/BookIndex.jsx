import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loadBooks } from '../store/actions/book.actions'
import { BookList } from '../cmps/BookList'
import { Link } from 'react-router-dom'




export function BookIndex() {
    let books = useSelector(storeState => storeState.bookModule.books)
    // useEffect(() => {
    //     renderParams()
    // }, [])

    useEffect(() => {
        loadBooks()
    }, [])
    if (!books.length && !books && isLoading) return <div> loading...</div>

    return (
        <section>

        <section className="book-index full ">

            <BookList books={books} />

        </section>
        <Link to="/wishlist" className="heart" title="save to list">
                ❤️ 
            </Link>
        </section>

    )
}