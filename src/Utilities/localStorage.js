export const saveToLocalStorage = (data) => {
    let savedData = JSON.parse(localStorage.getItem("read")) || [];

    const existedData = savedData.find(item => item.bookId === data.bookId);
    if (!existedData) {
        savedData.push(data);
        localStorage.setItem("read", JSON.stringify(savedData));
        alert("Data added");
    } else {
        alert("Data already exists");
    }
}

export const saveToLocalStorage2 = (data) => {
    let savedData = JSON.parse(localStorage.getItem("wishlist")) || [];

    const existedData = savedData.find(item => item.bookId === data.bookId);
    if (!existedData) {
        savedData.push(data);
        localStorage.setItem("wishlist", JSON.stringify(savedData));
        alert("Data added");
    } else {
        alert("Data already exists");
    }
}

export const getFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("read")) || [];
    return data;
}

export const getFromLocalStorage2 = () => {
    const data = JSON.parse(localStorage.getItem("wishlist")) || [];
    return data;
}
