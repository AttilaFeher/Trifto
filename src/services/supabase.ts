import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/supabase-types";
// YUYfv9bm0aIFq87w
const supabaseUrl = "https://wgmvfcqzrfufnictjcsm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnbXZmY3F6cmZ1Zm5pY3RqY3NtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MDE3NTQsImV4cCI6MjAyNDE3Nzc1NH0.ddTVCJnTo0UsRPKeF3s85pcsErBdZhGv8dz3wZNxLn4";

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
