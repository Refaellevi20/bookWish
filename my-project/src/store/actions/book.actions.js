import { store } from '../store' 
import { ADD_BOOK, REMOVE_BOOK, SET_BOOKS, UPDATE_BOOK  } from '../reducer/book.reducer'
import { LOADING_DONE,LOADING_START  } from '../system/system.reducer'
import { bookService } from '../../servies/book.serveis.local' 
// import { showSuccessMsg, showErrorMsg } from '../../services/event-bus.service'

export function getActionRemoveBook(bookId) {
    return {
        type: REMOVE_BOOK,
        bookId
    }
}
export function getActionAddBook(book) {
    return {
        type: ADD_BOOK,
        book
    }
}
export function getActionUpdateBook(book) {
    return {
        type: UPDATE_BOOK,
        book
    }
}

export async function loadBooks() {
    try {
        store.dispatch({ type: LOADING_START })
        const books = await bookService.query()
        store.dispatch({ type: SET_BOOKS, books })
    } catch (err) {
        console.log('Cannot load books', err)
        throw err
    } finally {
        store.dispatch({ type: LOADING_DONE })
    }
}

export async function removeBook(bookId) {
    try {
        await bookService.remove(bookId)
        // store.dispatch(getActionRemoveBook(bookId))
    } catch (err) {
        console.log('Cannot remove book', err)
        throw err
    }
}

export async function addBook(book) {
    try {
        const savedBook = await bookService.save(book)
        console.log('Added book', savedBook)
        // store.dispatch(getActionAddBook(savedBook))
        return savedBook
    } catch (err) {
        console.log('Cannot add book', err)
        throw err
    }
}

export async function updateBook(book) {
    try {
        const savedBook = await bookService.save(book)
        console.log('Updated book action store:', savedBook)
        store.dispatch(getActionUpdateBook(savedBook))
        return savedBook
    } catch (err) {
        console.log('Cannot save book', err)
        throw err
    }
}
