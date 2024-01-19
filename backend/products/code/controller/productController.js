import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

// Initialize Supabase client
const supabase = createClient(
  process.env.PUBLIC_SUPABASE_URL,
  process.env.PUBLIC_SUPABASE_ANON_KEY
);


const getAllProducts = async (req, res) => {
  try {
    // Fetch all products from Supabase
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id");


    if (error) {
      throw error;
    }

    res.json(data);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    // Fetch a product by ID from Supabase
    const { data: product, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", productId)
      .single();

    if (error) {
      throw error;
    }

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addProduct = async (req, res) => {
  const { newProductName, newProductType, newProductWeight, newProductPrice, newProductKcal, newProductNutriScore, newProductPictures, newProductFarmer_id, newProductstock } = req.body;
  const newProduct = {
    name: newProductName,
    type: newProductType,
    weight: newProductWeight,
    price: newProductPrice,
    kcal: newProductKcal,
    NutriScore: newProductNutriScore,
    pictures: newProductPictures,
    farmer_id: newProductFarmer_id,
    stock: newProductstock,
  }
  console.log(newProduct);

  try {
    const { data, error } = await supabase
      .from("products")
      .insert([newProduct])
      .select();

    if (error) {
      throw error;
    }

    res.status(200).json(newProduct);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getAllProducts, getProductById, addProduct };
