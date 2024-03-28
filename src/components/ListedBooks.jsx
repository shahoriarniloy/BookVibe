import useWishlistData from '../Hooks/useWishListData';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ListedBooks = () => {
    const { wishlistData } = useWishlistData();
    const [sortType, setSortType] = useState('rating');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const sortedData = [...wishlistData].sort((a, b) => {
        switch(sortType) {
            case 'rating':
                return b.rating - a.rating;
            case 'yearOfPublishing':
                return b.yearOfPublishing - a.yearOfPublishing;
            case 'totalPages':
                return b.totalPages - a.totalPages;
            default:
                return b.rating - a.rating;
        }
    });

    const handleSortChange = (type) => {
        setSortType(type);
        setDropdownOpen(false);
    }

    return (
        <div className="relative">
            <div className="dropdown flex justify-center">
                <div tabIndex={0} role="button" className="btn w-[145px] h-[52px] px-5 py-3.5 bg-green-600 rounded-lg justify-center items-center m-1 mt-6" onClick={() => setDropdownOpen(!dropdownOpen)}>Sort by: <img src="/dropdown.svg" alt="" /></div>
                {dropdownOpen && (
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={() => handleSortChange('rating')}>Rating</a></li>
                        <li><a onClick={() => handleSortChange('yearOfPublishing')}>Year of Publishing</a></li>
                        <li><a onClick={() => handleSortChange('totalPages')}>Total Pages</a></li>
                    </ul>
                )}
            </div>
            <div className="grid grid-cols-1 gap-4 p-6">
                {sortedData.map((book, index) => (
                    <div key={index} className="card lg:card-side bg-base-100 shadow-xl flex items-center justify-center">
<figure className='w-[230px] h-[229px] bg-neutral-900 bg-opacity-5 rounded-2xl m-4'><img className="w-[129.32px] h-[172px]" src={book.image} alt="Album"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">{book.bookName}</h2>
                            <p>By : {book.author}</p>
                            <div className='flex lg:flex-row flex-col lg:justify-start justify-center'>
                                <div className='flex lg:flex-row flex-col gap-4'>
                                    <p className='text-neutral-900 text-base font-bold'>Tag</p>
                                    {book.tags.map((tag, tagIndex) => (
                                        <button key={tagIndex} className="btn btn-sm text-center text-green-600 text-base font-medium  mr-2">#{tag}</button>
                                    ))}
                                </div>
                                <div className='flex justify-center items-center'>
                                    <img className="mr-1" src="/published.svg" alt="" />
                                    <p> Year of Publishing: {book.yearOfPublishing}</p>
                                </div>
                            </div>
                            <div className='flex justify-start gap-4 mb-4'>
                                <div className='flex items-center'>
                                    <img className="mr-1" src="/publisher.svg" alt="" />
                                    <p className=' text-neutral-900 text-opacity-60 text-base font-normal'> Publisher: {book.publisher}</p>
                                </div>
                                <div className='flex items-center'>
                                    <img className="mr-1" src="/page.svg" alt="" />
                                    <p> Page {book.totalPages}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="card-actions flex justify-start items-center">
                                <button className="btn w-[174px] h-[41px] px-5  bg-blue-500 bg-opacity-20 rounded-[30px] text-blue-500 text-base font-normal">Category: {book.category}</button>
                                <button className='w-[123px] h-[41px] px-5  bg-amber-400 bg-opacity-20 rounded-[30px] text-center text-amber-400 text-base font-normal'>Rating: {book.rating}</button>
                                <Link  to={`/bookinfo/${book.bookId}`}> <button className='w-[150px] h-[41px] px-5  bg-green-600 rounded-[30px] text-center text-white text-lg font-medium'>View Details</button></Link>
                            </div>                </div>     </div>
                ))}
            </div>
        </div>
    );
};

export default ListedBooks;
