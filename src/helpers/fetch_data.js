import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchMeta() {
  const { data, error } = await supabase.from("main_info").select("*");

  if (error) throw error;
  return data[0];
}

export async function fetchExperience() {
  const { data, error } = await supabase
    .from("technical_work")
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

export async function fetchAllData() {
  const [meta, exp, projects, other] = await Promise.all([
    fetchMeta(),
    fetchExperience(),
    fetchProjects(),
    fetchOtherExperiences(),
  ]);
  return { meta, exp, projects, other };
}
