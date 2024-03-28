import bookData from '../Hooks/useBookData';
import Loader from './Loader';

const Categories = () => {
    const {data, loading} = bookData();
    const uniqueCategories = [...new Set(data.map(item => item.category))];

    if (loading) {
        return <Loader />;    }

    return (
        <div>
            <table className="table table-zebra text-center  max-w-[1400px] m-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-neutral-900 text-4xl font-bold text-center mb-16">Categories</th>
                    </tr>
                </thead>
                <tbody>
                {uniqueCategories.map((category, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Categories;
