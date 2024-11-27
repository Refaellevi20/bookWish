import { BookPreview } from './BookPreview'


export function BookList({ books }) {
    return (
        
    <div className="book-list__container main layout full">
        
    <ul className="book-list  ">
        {books.map(book =>
            <li className="book-preview" key={book._id}>
                <BookPreview book={book} />
            </li>)}
    </ul>
    </div>
    )
}