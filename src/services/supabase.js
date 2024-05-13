import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ggllrdzjdvlseiqpliwp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdnbGxyZHpqZHZsc2VpcXBsaXdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNTgxNzksImV4cCI6MjAzMDczNDE3OX0.b3rU1-Mfb_hRMxhs9FAxgZe_KtSPDZOG6M9TWT0zfDg";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
