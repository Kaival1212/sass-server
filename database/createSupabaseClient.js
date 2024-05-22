import {createClient} from "@supabase/supabase-js";

export default function createSupabaseClient(){

    const supabaseUrl = 'https://wueahcceqtwajvrapiar.supabase.co'
    const supabaseKey = process.env.SUPABASE_KEY ||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1ZWFoY2NlcXR3YWp2cmFwaWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwOTUyNTgsImV4cCI6MjAzMTY3MTI1OH0.A3YObKqaddUzIOcOgEueGO6_3OaLYDjEU0N1YIvh5g0"

    return createClient(supabaseUrl, supabaseKey);


}
