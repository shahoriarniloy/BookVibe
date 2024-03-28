import bookData from '../Hooks/useBookData';
import Loader from './Loader';

const Authors = () => {
    const {data, loading} = bookData();
    if (loading) {
        return <Loader />;    }

    return (
        <div>
            <table className="table table-zebra text-center  max-w-[1400px] m-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-neutral-900 text-4xl font-bold text-center mb-16">Authors</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{item.author}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Authors;
