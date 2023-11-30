import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fjkgbrjvkpqxfmyttpuh.supabase.co";
// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqa2dicmp2a3BxeGZteXR0cHVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEyMzgzMDQsImV4cCI6MjAxNjgxNDMwNH0.LMY9vS9Ajfy8SfrhhZrG4pnypDJoFPQK5e_A-tJDG0E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
