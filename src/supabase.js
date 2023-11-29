// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fzcdoethcorblgbiupjg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6Y2RvZXRoY29yYmxnYml1cGpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEyNTI4ODUsImV4cCI6MjAxNjgyODg4NX0.hLVIFLExp15PZofh-fQrTA9EkEwFlsiv0MgFufMhQ8I';

export const supabase = createClient(supabaseUrl, supabaseKey);
