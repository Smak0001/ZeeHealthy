import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file


// Initialize Supabase client
const supabase = createClient(
  "https://boxowxvpcjolxtstsoyz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJveG93eHZwY2pvbHh0c3Rzb3l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzMjYyMzMsImV4cCI6MjAxNzkwMjIzM30.FrIecHbrVAZ00HvyGzdtlUs51kARh7Os89N7kxvvQKI"
);

const getAlluserData = async (req, res) => {
  try {
    const { data, error } = await supabase
        .from('profiles')
        .select('*');

    if (error) {
      throw error;
    }

    res.json(data);

  } catch (error) {
    console.error('Error fetching data from Supabase:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await supabase
      .from('profiles')
      .delete()
      .eq('id', id);
    console.log(result);
    res.status(200).json({ message: 'Row deleted successfully' });
  } catch (error) {
    console.error('Error deleting row:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const updateUser = async (req, res) => {
  const { id, email, full_name, password } = req.body;
  const userId = req.params.id
  const updatedUser = {
    id,
    email,
    full_name,
    password,
  };
  try {
    const { data , error } = await supabase
      .from('profiles')
      .update([updatedUser])
      .eq('id', userId)// Specify the condition to update only the user with the given id

    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    res.status(200).json(updatedUser);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


const getUserId = async (req, res) => {
  const id = req.params.id;

  try {
    // Fetch a product by ID from Supabase
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    if (profile) {
      res.json(profile);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { getAlluserData, deleteUser, getUserId, updateUser };