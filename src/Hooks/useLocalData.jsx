import { useEffect, useState } from 'react';
import { getFromLocalStorage } from '../Utilities/localStorage';

const useLocalData = () => {
    const [localData, setLocalData] = useState([]);

    useEffect(() => {
        setLocalData(getFromLocalStorage());
    }, []); 

    return { localData };
};


export default useLocalData;
