import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import { useRouter } from 'next/router';

export default function CreateBook() {
    const router = useRouter();
    const { update_book_id } = router.query;
    const [publishers, setpublishers] = useState([])
    const [authors, setauthors] = useState([])
    const [retails, setretails] = useState([])
    const [genres, setgenres] = useState([])
    const [suppliers, setsuppliers] = useState([])
    useEffect(() => {
    axios.get('https://embarrassed-leotard-fly.cyclic.app/publisher')
    .then((result) => {
      console.log(result.data);
      setpublishers(result.data)
    }).catch((err) => {
      console.log(err)
    })
    axios.get('https://embarrassed-leotard-fly.cyclic.app/author')
    .then((result) => {
      console.log(result.data);
      setauthors(result.data)
    }).catch((err) => {
      console.log(err)
    })
    axios.get('https://embarrassed-leotard-fly.cyclic.app/retail')
    .then((result) => {
      console.log(result.data);
      setretails(result.data)
    }).catch((err) => {
      console.log(err)
    })
    axios.get('https://embarrassed-leotard-fly.cyclic.app/genre')
    .then((result) => {
      console.log(result.data);
      setgenres(result.data)
    }).catch((err) => {
      console.log(err)
    })
    axios.get('https://embarrassed-leotard-fly.cyclic.app/supplier')
    .then((result) => {
      console.log(result.data);
      setsuppliers(result.data)
    }).catch((err) => {
      console.log(err)
    })
    }, [])

    const [createBook, setUpdateBook] = useState({
        title: '',
        language: '',
        synopsis: '',
        publication_year: 0,
        genre_id: 1,
        publisher_id: 1,
        author_id: 1,
        retail_id: 1,
        price: 0,
        supplier_id: 1,
        quantity: 0,
        paymen_status :'',
        date : ''
    })

    return(
        <main className="grid place-items-center min-h-screen">
            <div className="bg-white rounded-lg shadow-md p-12 mb-4 text-black">
            <p className="text-black pb-1 text-2xl font-semibold">Create Book</p>
            <p className="text-black pb-1">Title</p>
            <input onChange={(e) =>{
                setUpdateBook({...createBook, title: e.target.value})
            }} className=" outline outline-2 outline-black mb-3 w-[400px]"/>
            <p className="text-black pb-1">Language</p>
            <input onChange={(e) =>{
                setUpdateBook({...createBook, language: e.target.value})
            }} className=" outline outline-2 outline-black mb-3 w-[400px]"/>
            <p className="text-black pb-1">Synopsis</p>
            <input onChange={(e) =>{
                setUpdateBook({...createBook, synopsis: e.target.value})
            }} className=" outline outline-2 outline-black mb-3 w-[400px]"/>
            <p className="text-black pb-1">Publication Year</p>
            <input onChange={(e) =>{
                setUpdateBook({...createBook, publication_year: Number(e.target.value)})
            }} className=" outline outline-2 outline-black mb-3 w-[400px]" type="number"/>
            <p className="text-black pb-1">Genre</p>
            <select onChange={(e) =>{
                setUpdateBook({...createBook, genre_id: e.target.value})
            }} className=" outline outline-2 outline-black mb-3 w-[400px] text-black">
                {
                    genres.map((genre) =>{
                        return (<option value={(genre.genre_id)} className='text-black'>{genre.name}</option>);
                    })
                }
            </select>
            <p className="text-black pb-1">Publisher</p>
            <select onChange={(e) => {
                setUpdateBook({...createBook, publisher_id: e.target.value})
            }} className=" outline outline-2 outline-black mb-3 w-[400px] text-black">
                {
                    publishers.map((publiser) =>{
                        return (<option value={publiser.publisher_id} className='text-black'>{publiser.name}</option>);
                    })
                }
            </select>
            <p className="text-black pb-1">Author</p>
            <select onChange={(e) =>{
                setUpdateBook({...createBook, author_id: e.target.value})
            }} className=" outline outline-2 outline-black mb-3 w-[400px] text-black">
                {
                    authors.map((author) =>{
                        return (<option value={author.author_id} className='text-black'>{author.name}</option>);
                    })
                }
            </select>
            <p className="text-black pb-1">Supplier</p>
            <select onChange={(e) => {
                setUpdateBook({...createBook, supplier_id: e.target.value})
            }} className=" outline outline-2 outline-black mb-3 w-[400px] text-black">
                {
                    suppliers.map((supplier) =>{
                        return (<option value={supplier.supplier_id} className='text-black'>{supplier.name}</option>);
                    })
                }
            </select>
            <p className="text-black pb-1">Retail</p>
            <select onChange={(e) => {
                setUpdateBook({...createBook, retail_id: e.target.value})
            }} className=" outline outline-2 outline-black mb-3 w-[400px] text-black">
                {
                    retails.map((retail) =>{
                        return (<option value={retail.retail_id} className='text-black'>{retail.name}</option>);
                    })
                }
            </select>
            <p className="text-black pb-1">Price</p>
            <input onChange={(e) => { 
                setUpdateBook({...createBook, price: Number(e.target.value)})
            }} className=" outline outline-2 outline-black mb-3 w-[400px]" type="number"/>
            <p className="text-black pb-1">Quantity</p>
            <input onChange={(e) =>{
                setUpdateBook({...createBook, quantity: Number(e.target.value)})
            }} className=" outline outline-2 outline-black mb-3 w-[400px]" type="number"/>
            <p className="text-black pb-1">Payment Status</p>
            <input onChange={(e) => {
                setUpdateBook({...createBook, paymen_status: e.target.value})
            }} className=" outline outline-2 outline-black mb-3 w-[400px]"/>
            <p className="text-black pb-1">Tanggal Supply</p>
            <input onChange={(e) =>{
                setUpdateBook({...createBook, date: e.target.value})
            }} className=" outline outline-2 outline-black mb-3 w-[400px]" type="date"/>
            
        <div className="flex justify-center my-2 ">
            <button onClick={
                () => {
                    console.log(createBook)
                    axios.post(`https://embarrassed-leotard-fly.cyclic.app/book`, createBook).then(() => {
                        router.push('/')
                    }).catch((err) => {
                        alert(err)
                    })
                }
            } className="bg-green-500 p-4 rounded-md mx-5">Save</button>
            <button onClick={()=>{
                router.push(`/`)
            }} className="bg-red-500 p-4 rounded-md mr-10">Cancel</button>
        </div>
            
    </div>
        </main>
    );
}