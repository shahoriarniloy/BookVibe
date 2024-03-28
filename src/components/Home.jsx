import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';


const Home = () => {
   

    return (
        <div >
            <Navbar />
            
            <Outlet></Outlet>
            <Footer />


          
           
        </div>
    );
};

export default Home;
