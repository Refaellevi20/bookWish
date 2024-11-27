import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { Provider } from 'react-redux'

// import { HomePage } from './pages/HomePage.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { HomePage } from './pages/HomePage.jsx'
import UserWishList from './pages/UserWishList.jsx'


export default function App() {
    return (
        <div className="main-container  main-layout full">          
            {/* <UserMsg /> */}
            <main>
                <Routes>
                    <Route path="/" element={<BookIndex/>} />
                    <Route path="" element={<HomePage/>} />
                    <Route path="/wishlist" element={<UserWishList />} />

                </Routes>
            </main>
        </div>
    )
}


