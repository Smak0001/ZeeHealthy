import express from 'express';
import env from 'dotenv';
import { createClient } from '@supabase/supabase-js';

env.config();

const router = express.Router();

const supabase = createClient(process.env.PUBLIC_SUPABASE_URL, process.env.PUBLIC_SUPABASE_ANON_KEY);

router.get('/:id', async (req, res) => {
  const { data } = await supabase.from("orders").select().match({ id: req.params.id });

  res.send(data);
});

router.post('/:id/accept', async (req, res) => {
  res.sendStatus(200);
});

export default router;