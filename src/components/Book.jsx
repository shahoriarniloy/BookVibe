import bookData from '../Hooks/useBookData';
import Books from './Books';

const Book = () => {
    const {data,loading} = bookData();
    console.log(data);
    return (
            <div>
                <h2 className='text-neutral-900 text-[40px] font-bold text-center mb-8'>Books</h2>
                <div className='grid grid-cols-3 justify-items-center'>
            {data.map((item) => (
            
        <Books key={item.bookId} item={item}></Books>
    ))}



                
            </div>
            </div>
    );
};

export default Book;