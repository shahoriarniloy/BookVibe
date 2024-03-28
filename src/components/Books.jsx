import { Link } from "react-router-dom";

const Books = ({ item }) => {
    const { bookId, bookName, author, image, rating, category, tags } = item || {};
    const formattedTags = tags ? tags.map(tag => tag + '    ').join('') : '';

    return (
        <div>
            <Link to={`/bookinfo/${bookId}`}>

            <div className='max-w-[326px] max-h-[350px] bg-zinc-100 rounded-2xl  mb-6 px-10 py-4 min-w-fit min-h-fit'>
                <div className='flex flex-col justify-center items-center'>
                    <img className="w-[120px] h-[154px]" src={image} alt="" />
                </div>
                <div className='flex lg:gap-8  min-h-fit'>
                    {formattedTags.split('    ').filter(tag => tag.trim() !== '').map((tag, index) => (
                        <p key={index} className='mt-2 w-[125px] h-[33px] px-4 py-[7px] text-xs bg-green-600 text-green-600 text-center bg-opacity-5 rounded-[30px] justify-center items-center'>{tag}</p>
                    ))}
                </div>
                <h3 className='text-neutral-900 text-xl text-left font-bold mt-2'>{bookName}</h3>
                <p className='text-neutral-900 text-opacity-80 text-left font-medium text-xs mb-4 mt-2'>By: {author}</p>
                <hr />
                <div className='flex justify-between mt-2  min-h-fit'> 
                    <p>{category}</p>
                    <div className='flex items-center  min-h-fit'>
                        <p>{rating}</p>
                        <img src="/rating.svg" alt="" />
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Books;
