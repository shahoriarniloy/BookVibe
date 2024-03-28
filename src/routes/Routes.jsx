import {createBrowserRouter} from 'react-router-dom';
import Home from "../components/Home";
import ListedBooks from "../components/ListedBooks";
import BooksToRead from "../components/BooksToRead";
import Banner from "../components/Banner";
import NotFound from '../components/NotFound';


import BookInfo from "../components/BookInfo";
import List from "../components/List"
import BarChart from '../components/ReadBarChart';



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
