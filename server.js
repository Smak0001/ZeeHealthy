import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Connection Pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'AdminTeam4',
  password: 'V3ryG@@dP@ssw@rd!!',
  database: 'ProductDatabase',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Route to fetch all orders
app.get('/api/products', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM products');
    connection.release();
    res.json(rows);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to fetch a single order by ID
app.get('/api/products/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM products WHERE id = ?', [productId]);
    connection.release();

    if (rows.length > 0) {
      res.json(rows[0]); // Respond with the product data
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
