import Book from './Book';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="flex justify-between max-w-[1400px] max-h-[554px] bg-neutral-100 rounded-3xl p-8 mt-12 m-auto mb-16">
                <div className="ml-10">
                    <h1 className="w-[526px] text-neutral-900 text-[56px] font-bold">Refreshing your book collection</h1>
                    <NavLink to={`list`}><button className="btn bg-green-400 text-white float-left ml-16 mt-6">View The List</button></NavLink>
                </div>
                <img className="h-[318px] h=[394px] mr-20" src="/banner.png" alt="" />
            </div>

            {/* card */}

            <Book />

            <h2 className='text-neutral-900 text-[40px] font-bold text-center mb-8 mt-16'>Explore More</h2>


            <div className='flex justify-between max-w-[1400px] m-auto gap-12 mt-16'>
                <Link to="/authors">
                    <div className="card card-compact w-full h-96 bg-base-100 shadow-xl">
                        <figure><img src="/authors.jpg" alt="Authors" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Authors</h2>
                            <p>Embark on a literary adventure through the captivating realms of my favorite authors, where creativity flourishes and emotions resonate, offering readers unforgettable tales that inspire and enthrall!</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">See Authors</button>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/categories">
                    <div className="card card-compact w-full h-96 bg-base-100 shadow-xl">
                        <figure><img src="/categories.webp" alt="Categories" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Categories</h2>
                            <p>Embark on a journey through diverse book categories, where genres merge and stories await, offering a captivating array of narratives to enthrall and delight readers of all interests.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">See Categories</button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default Banner;
