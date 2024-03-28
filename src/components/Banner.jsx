
import Book from './Book'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
             <div className="flex justify-between max-w-[1400px] max-h-[554px] bg-neutral-100 rounded-3xl p-8 mt-12 m-auto mb-16">
           <div className="ml-10">
                <h1 className="w-[526px] text-neutral-900 text-[56px] font-bold">Refreshing your book collection</h1>
                <NavLink to={`list`}><button className="btn bg-green-400 text-white float-left ml-16 mt-6">View The List</button>  </NavLink>  
           </div>
           <img className="h-[318px] h=[394px] mr-20" src="/banner.png" alt="" />

        </div>
        <Book></Book>


        </div>
        
       

    );
};

export default Banner;