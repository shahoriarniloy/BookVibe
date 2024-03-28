import { useEffect, useState } from "react";

const useBookData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/data.json");
                const data = await res.json();
                setData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    return { data, loading };
};

export default useBookData;
