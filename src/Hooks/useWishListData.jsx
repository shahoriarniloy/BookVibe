import { useEffect, useState } from 'react';
import { getFromLocalStorage2 } from '../Utilities/localStorage';


export const useWishlistData = () => {
    const [wishlistData, setWishlistData] = useState([]);

    useEffect(() => {
        const data = getFromLocalStorage2();
        setWishlistData(data);
    }, []);

    return { wishlistData };
};

export default useWishlistData;
