import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [books, setBooks] = useState([])
  const router = useRouter();
  useEffect(() => {
  axios.get('https://embarrassed-leotard-fly.cyclic.app/')
  .then((result) => {
    console.log(result.data);
    setBooks(result.data)
  }).catch((err) => {
    console.log(err)
  })
  }, [])
  return (
    <div className="bg-white text-black min-h-screen">
      <div className='w-max h[2px] bg-black'>
      </div>
      {
        books.map((book) => {
          
          return (
            <Link key={book.book_id} href={`/${book.book_id}`}>
            
              <div className="container mx-auto p-4">
                <BookCard
                  title={book.title}
                  language={book.language}
                  synopsis={book.synopsis}
                  publicationYear={book.publication_year}
                  book_price={book.book_price}
                />
              </div>

          </Link>
          
          
            );
        })
      }
      <button onClick={() =>{
        router.push('/create_book/createBook')
      }} className="fixed bottom-20 right-20 text-white text-[30px] bg-blue-600 w-[60px] h-[60px] grid place-items-center rounded-full aspect-square">+</button>
    </div>
  );
}


const BookCard = ({ title, language, synopsis, publicationYear, book_price }) => {
  return ( 
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p><strong>Language:</strong> {language}</p>
      <p><strong>Synopsis:</strong> {synopsis}</p>
      <p><strong>Publication Year:</strong> {publicationYear}</p>
      <p><strong>Price:</strong> Rp{book_price}</p>
    </div>
  );
};
