import env from 'dotenv';
import { createClient } from '@supabase/supabase-js';

env.config();

const supabase = createClient(
  process.env.PUBLIC_SUPABASE_URL,
  process.env.PUBLIC_SUPABASE_ANON_KEY
);

async function getOrderById(req, res) {
  const { data } = await supabase
    .from("orders")
    .select()
    .match({ id: req.params.id });

  res.send(data);
}

export { getOrderById }