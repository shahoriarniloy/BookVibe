import bookData from '../Hooks/useBookData';
import Books from './Books';
import Loader from './Loader';

const Book = () => {
    const {data,loading} = bookData();
    if (loading) {
        return <Loader />;    }
    return (
            <div>
                <h2 className='text-neutral-900 text-[40px] font-bold text-center mb-8'>Books</h2>
                <div className='grid lg:grid-cols-3 grid-cols-1 justify-items-center'>
            {data.map((item) => (
            
        <Books key={item.bookId} item={item}></Books>
    ))}



                
            </div>
            </div>
    );
};

export default Book;