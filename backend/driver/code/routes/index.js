import express from 'express';
import env from 'dotenv';
import { createClient } from '@supabase/supabase-js';

env.config();

const router = express.Router();

const supabase = createClient(process.env.PUBLIC_SUPABASE_URL, process.env.PUBLIC_SUPABASE_ANON_KEY);

router.post('/api', async (req, res) => {
  const { data } = await supabase.from('profiles').select();
  // console.log(data);

  res.send(data);
});

export default router;