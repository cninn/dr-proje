import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function Add() {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    /* navigate('/'); */
  };
  const handleClick =async (e)=>{
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books",book);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="form">
      <h2>Bilgileri girin</h2>
      <form>
        <input
          type="text"
          onChange={handleChange}
          name="title"
          id="title"
          placeholder="Kitap Başlığı"
        />
        <input
          type="text"
          onChange={handleChange}
          name="desc"
          id="desc"
          placeholder="Açıklama ve yazar adı"
        />
        <input
          type="number"
          onChange={handleChange}
          name="price"
          id="price"
          placeholder="Fiyat"
        />
        <input
          type="text"
          onChange={handleChange}
          name="cover"
          id="cover"
          placeholder="url girin"
        />
        <button onClick={handleClick} type="submit">Oluştur</button>
      </form>
    </div>
  );
}
