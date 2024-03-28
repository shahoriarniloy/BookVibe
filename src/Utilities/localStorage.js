import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const saveToLocalStorage = (data) => {
    let savedData = JSON.parse(localStorage.getItem("read")) || [];

    const existedData = savedData.find(item => item.bookId === data.bookId);
    if (!existedData) {
        savedData.push(data);
        localStorage.setItem("read", JSON.stringify(savedData));
        toast.success("Book Added As Read"); 
    } else {
        toast.error("Already Read!"); 
    }
}

export const saveToLocalStorage2 = (data) => {
    let savedReadData = JSON.parse(localStorage.getItem("read")) || [];
    let savedWishData = JSON.parse(localStorage.getItem("wishlist")) || [];

    const existedReadData = savedReadData.find(item => item.bookId === data.bookId);
    const existedWishData = savedWishData.find(item => item.bookId === data.bookId);

    if (!existedReadData && !existedWishData) {
        savedWishData.push(data);
        localStorage.setItem("wishlist", JSON.stringify(savedWishData));
        toast.success("Book Added On Wishlist"); 
    } 
    else if (existedReadData && !existedWishData) {
        toast.error("You Have Already Read This Book!"); 
    }
    else{
        toast.error("Already on Wishlist!"); 
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
