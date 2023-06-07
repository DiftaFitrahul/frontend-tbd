
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


export default function DetailBook(){
    const[book, setBook] = useState({})
    const router = useRouter();
    const { book_id } = router.query;
    useEffect(() => {
        axios.get(`https://embarrassed-leotard-fly.cyclic.app/book/${book_id}`)
        .then((result) => {
            setBook(result.data[0])
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return(
        <main className="grid place-items-center min-h-screen">
            <div className="bg-white rounded-lg shadow-md p-12 mb-4">
             <button onClick={() =>{
                router.replace('/')
             }} className="text-black pb-10 text-xl">Back</button>   
            <div className="flex justify-between">
                <div className="text-black text-6xl font-semibold">{book.title}</div>
                
                <div className="text-black py-4 mr-10">
                    <div><strong>{book.publication_year}</strong></div>
                    <div>Author: {book.author_name}</div>
                </div>
            
            </div>
            <p className="text-black">{book.genre}</p>
            <p className="text-black py-1 text-2xl">{book.synopsis}</p>
            <p className="text-black py-1 text-l"><strong>Language :</strong> {book.language}</p>
            <p className="text-black py-1 text-l"><strong>Publisher :</strong> {book.publisher_name}</p>
            <p className="text-black text-2xl">This book is available on {book.retail_name}</p>
            <p className="text-black text-3xl py-4">ONLY {book.book_price}</p>
            <div className="flex justify-end ">
                <button onClick={() => {
                    router.replace(`/update_book/${book_id}`)
                }} className="bg-green-500 p-4 rounded-md mx-5">update</button>
                <button onClick={() => {
                    axios.delete(`https://embarrassed-leotard-fly.cyclic.app/book/${book_id}`)
                    .then((result) => {
                        router.replace('/')
                    }).catch((err) => {
                        console.log(err)
                    })
                }} className="bg-red-500 p-4 rounded-md mr-10">delete</button>
            </div>
        </div>
        </main>
    );

}