import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

// Initialize Supabase client
const supabase = createClient(
  process.env.PUBLIC_SUPABASE_URL,
  process.env.PUBLIC_SUPABASE_ANON_KEY
);

const getCart = async (req, res) => {
  try {
    // Fetch all products from Supabase
    const { data, error } = await supabase.from('shoppingCart').select('*').order('id');

    if (error) {
      throw error;
    }

    res.json(data);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const upsertNewProduct = async (req, res) => {
  const { Product, amount } = req.body;
  const newProduct = {
    Product,
    amount,
  };

  try {
    const { data, error } = await supabase
      .from("shoppingCart")
      .upsert([newProduct])
      .select();
  } catch (error) {
    console.log(error);
  }
};

const getCartId = async (req, res) => {
  const cartId = req.params.id;

  try {
    // Fetch a product by ID from Supabase
    const { data: product, error } = await supabase
      .from('shoppingCart')
      .select('*')
      .eq('id', cartId)
      .single();

    if (error) {
      throw error;
    }

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { getCart, upsertNewProduct, getCartId as getCartById };
