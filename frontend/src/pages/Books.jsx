import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
       setBooks(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);

  return <div className="Books">
 
    <h2>Tüm Kitaplar</h2>

    {books.map(book=>(
      <div key={book.id} className="book">
        {book.cover && <img src={book.cover} alt="..." /> }
        <h3>{book.title}</h3>
        <span>{book.desc}</span>
        <span>{book.price}</span>
        <button className="delete">Sil</button>
        <button className="update">Güncelle</button>
      </div>
    ))}
    <button>
      <Link to="/add">
        Kitap Ekle
      </Link>
    </button>
  </div>;
}
