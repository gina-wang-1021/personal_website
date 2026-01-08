import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function fetchWorkExperiences() {
  const { data, error } = await supabase.from("technical_work").select("*");

  if (error) throw error;
  return data;
}

export async function fetchMeta() {
  const { data, error } = await supabase
    .from("main_info")
    .select("*")
    .order("end_date", { ascending: false, nullsFirst: true })
    .order("start_date", { ascending: false });

  if (error) throw error;
  return data;
}

export async function fetchProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("priority", { ascending: false });

  if (error) throw error;
  return data;
}

export async function fetchOtherExperiences() {
  const { data, error } = await supabase
    .from("other")
    .select("*")
    .order("priority", { ascending: false });

  if (error) throw error;
  return data;
}
