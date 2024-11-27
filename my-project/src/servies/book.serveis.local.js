import { storageService } from './async-storage.service'
import { utilService } from './util.service'

const STORAGE_KEY = 'book'
_createBooks()

export const bookService = {
    query,
    getById,
    save,
    remove,
    getEmptyBook,
    getDefaultFilter,

    getDefaultSort
}

window.cs = bookService
function getDefaultFilter() {
    return { title: '', Price: ''}
}
function getDefaultSort() {
    return 'price' 
}

async function query(filterBy = { title: '', tags: [], daysToMake: '' }, sort = 'recommended',) {
    var books = await storageService.query(STORAGE_KEY)
    if (filterBy.title) {
        const regex = new RegExp(filterBy.title, 'i')
        books = books.filter(book => regex.test(book.title) || regex.test(book.description))
    }
    return books
}

function getById(bookId) {
    return storageService.get(STORAGE_KEY, bookId)
}

async function remove(bookId) {
    await storageService.remove(STORAGE_KEY, bookId)
}

async function save(book) {
    var savedBook
    if (book._id) {
        savedBook = await storageService.put(STORAGE_KEY, book)
    } else {

        savedBook = await storageService.post(STORAGE_KEY, book)
    }
    return savedBook
}

function _createBooks() {
    let books = utilService.loadFromStorage(STORAGE_KEY)
    if (!books || !books.length) {
        const books = [
            {
                _id: 'i102',
                title: "Navy Seale",
                price: 15,
                rate:4,
                wishList: ["user1", "user2"],
                owner: {
                    _id: "u102",
                    fullname: "Boya",
                    imgUrl: 'https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907_960_720.jpg',
                    rate: 5
                },
                name: "Joney",
                description: "Best book for Travel Affiliates Programs absolutely automated websites!!! Up to 3,000,000 Hotels, 600 Airlines, Over 1,000 Cruises, 23,000 tours & activities from 2,200 global destinations, and a variety of Car Rental companies on one website. Start Earning Money more traffic makes generate more money. Each time your users click on the deals suggested by the Search Engine, you will be making affiliate commissions, also on booking."
            },
            {
                _id: 'i103',
                title: "Web Design Mastery",
                price: 20,
                rate: 4.7,
                owner: {
                    _id: "u103",
                    fullname: "Alice Walker",
                    imgUrl: 'https://cdn.pixabay.com/photo/2016/11/29/09/22/mountain-1868305_960_720.jpg',
                    
                },
                name: "Emma",
                description: "This book covers the principles of modern web design with a focus on user experience and responsive design. Learn how to create websites that are both beautiful and functional, using industry-standard techniques, tools, and design practices."
            },
            {
                _id: 'i104',
                title: "Cooking for Beginners",
                price: 18,
                rate: 4.8,
                owner: {
                    _id: "u104",
                    fullname: "James Cook",
                    imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/food-736891_960_720.jpg',
                    
                },
                name: "Sarah",
                description: "A beginner's guide to cooking, perfect for anyone who wants to get started in the kitchen. This book includes step-by-step instructions, helpful tips, and delicious recipes for every meal of the day. Discover the joy of cooking and impress your friends and family with easy-to-make dishes."
            },
            {
                _id: 'i105',
                title: "Digital Marketing Secrets",
                price: 25,
                rate: 4.9,
                owner: {
                    _id: "u105",
                    fullname: "Daniel Smith",
                    imgUrl: 'https://cdn.pixabay.com/photo/2018/04/29/07/35/sunset-3361745_960_720.jpg',
                  
                },
                name: "Daniel",
                description: "Unlock the secrets to successful digital marketing with this comprehensive guide. Learn about social media marketing, SEO, email campaigns, content creation, and analytics. Perfect for beginners and experts alike who want to take their online marketing skills to the next level."
            },
            {
                _id: 'i106',
                title: "Fitness Revolution",
                price: 22,
                rate: 4.6,
                owner: {
                    _id: "u106",
                    fullname: "Laura Green",
                    imgUrl: 'https://cdn.pixabay.com/photo/2015/09/18/18/07/health-943655_960_720.jpg',
                    
                },
                name: "Michael",
                description: "A step-by-step guide to achieving your fitness goals with expert advice on exercise routines, nutrition, and mindset. This book provides practical tips for people of all fitness levels to improve their health and transform their bodies."
            },
            {
                _id: 'i107',
                title: "Investing for Success",
                price: 30,
                rate: 5,
                owner: {
                    _id: "u107",
                    fullname: "Robert Brown",
                    imgUrl: 'https://cdn.pixabay.com/photo/2016/09/06/21/47/africa-1644425_960_720.jpg',
                  
                },
                name: "John",
                description: "Learn how to make smart investment decisions with this insightful guide to investing. Whether you're just starting out or looking to refine your portfolio, this book covers everything from stocks and bonds to real estate and cryptocurrency. Gain the knowledge to build long-term wealth."
            }
        ]
    

        utilService.saveToStorage(STORAGE_KEY, books)
    }
}


function getEmptyBook(title = '', description = '', price = 0, wishList = []) {
    return {
        _id: '',
        title,
        description,
        price,
        wishList
    }
}



