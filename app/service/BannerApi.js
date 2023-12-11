import supabase from "@/supabase/supabase";

export async function getBanners() {
  let { data: banner, error } = await supabase.from("banner").select("*");

  if (error) throw new Error(error);
  console.log(error);
  return banner;
}
