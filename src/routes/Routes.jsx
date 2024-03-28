import {createBrowserRouter} from 'react-router-dom';
import Home from "../components/Home";
import ListedBooks from "../components/ListedBooks";
import BooksToRead from "../components/BooksToRead";
import Banner from "../components/Banner";
import NotFound from '../components/NotFound';


import BookInfo from "../components/BookInfo";
import List from "../components/List"
import BarChart from '../components/ReadBarChart';
import Authors from '../components/Authors';
import Categories from '../components/Categories';



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/bookinfo/:bookId",
                element: <BookInfo />
            },
            

            {
                path: "/",
                element: <Banner />
            },

            {
                path: "/authors",
                element: <Authors />
            },
            {
                path: "/categories",
                element: <Categories />
            },



            {
                path: "/list",
                element: <List />,
                children: [
                    {
                        index: true,
                        element: <BooksToRead />
                    },
                    {
                        path: 'wishlist',
                        element: <ListedBooks />
                    }
                ]
            },
            {
                path: '/barchart',
                element: <BarChart></BarChart>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    }
]);
