import express from "express";
import mysql from "mysql2";
import cors from 'cors';

const app = express();

app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1991ci",
  database: "test",
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello here is the backend!");
});

//! GET ALL WİTH MYSQL
app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.send(err);
    return res.send(data);
  });
});
//! POST WİTH MYSQL
app.post("/books", (req, res) => {
  const { title, desc, cover, price } = req.body;

  const q = "INSERT INTO books (`title`, `desc`, `cover`,`price`) VALUES (?)";
  const values = [title, desc, cover,price];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.send("BOOK HAS BEEN CREATED");
  });
});

const port = 8800;

app.listen(port, () => {
  console.log(`SERVER UYANDI http://localhost:${port}`);
});
