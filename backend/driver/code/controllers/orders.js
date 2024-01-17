import env from 'dotenv';
import { createClient } from '@supabase/supabase-js';

env.config();

const supabase = createClient(
  'https://boxowxvpcjolxtstsoyz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJveG93eHZwY2pvbHh0c3Rzb3l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzMjYyMzMsImV4cCI6MjAxNzkwMjIzM30.FrIecHbrVAZ00HvyGzdtlUs51kARh7Os89N7kxvvQKIweq'
);


async function getOrderById(req, res) {
  const { data } = await supabase
    .from("orders")
    .select()
    .match({ id: req.params.id });

  res.send(data);
}

export { getOrderById }