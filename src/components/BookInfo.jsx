import { useParams } from "react-router-dom";
import bookData from "../Hooks/useBookData";
import { useEffect, useState } from "react";
import { saveToLocalStorage, saveToLocalStorage2 } from "../Utilities/localStorage.js";

const BookInfo = () => {
    const { bookId } = useParams();
    const { data, loading } = bookData();
    const [singleBook, setSingleBook] = useState({});


    const handleWishList = () =>
{
    saveToLocalStorage2(singleBook);

}



    const handleRead =() =>{

        saveToLocalStorage(singleBook);    }

    useEffect(() => {
        const singleBook = data.find(item => item.bookId == bookId);
        setSingleBook(singleBook);
    }, [data, bookId]);

    const { image, tags, bookName, author, category, review, totalPages, publisher, yearOfPublishing, rating } = singleBook || {};

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-14 ml-20 w-[1250px] h-[711px]">
            <figure className="w-[573px] h-[711px] bg-neutral-900 bg-opacity-5 rounded-2xl">
                <img className="w-[425px] h-[565px] bg-base-200" src={image} alt="Image"/>
            </figure>
            <div className="card-body w-[594px] text-neutral">
                <h2 className="text-neutral-900 text-[40px] font-bold mt-16">{bookName}</h2>
                <h2 className="text-neutral-900 text-opacity-80 text-xl font-medium">By : {author}</h2>
                <hr/>
                <h2 className="text-neutral-900 text-opacity-80 text-xl font-medium">{category}</h2>
                <h2 className="text-neutral-900 text-base"> <span className="font-bold">Review: </span>{review}</h2>
                <div className="flex pt-4 gap-4 mb-4">
                    <h2 className="text-[16px] font-bold">Tag</h2>
                    {tags && tags.map((tag, index) => <h2 key={index} className="text-[16px] text-[#23BE0A] font-bold">#{tag}</h2>)}
                </div>
                <hr/>
                <div className="flex gap-16 text-[16px] text-[#131313B3] pb-2">
                    <div>
                        <h2 className="mb-2">Number of Pages:</h2>
                        <h2 className="mb-2">Publisher:</h2>
                        <h2 className="mb-2">Year Of Publishing:</h2>
                        <h2 className="mb-2">Rating:</h2>
                    </div>
                    <div className="font-bold ">
                        <h2 className="mb-2">{totalPages}</h2>
                        <h2 className="mb-2">{publisher}</h2>
                        <h2 className="mb-2">{yearOfPublishing}</h2>
                        <h2 className="mb-2">{rating}</h2>
                    </div>
                </div>

                <div>
                <button onClick={handleRead} className="btn w-[101px] h-[57px] px-7 py-[18px] rounded-lg border border-neutral-900 border-opacity-30 mr-6">Read</button>
                <button onClick={handleWishList} className="btn w-32 h-[57px] px-7 py-[18px] bg-teal-400 rounded-lg">Wish list</button>
                </div>
            </div>
        </div>
    );
};

export default BookInfo;
