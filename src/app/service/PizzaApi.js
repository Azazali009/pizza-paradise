import supabase from "@/supabase/supabase";

// get all pizzas
export async function getPizzas() {
  let { data: Pizza, error } = await supabase
    .from("Pizza")
    .select("*,pizza_extras(*)");

  if (error) throw new Error("Failed to fetch pizzas.");
  console.log(error);
  return Pizza;
}

// get single pizza by id

export async function getSinglePizza(id) {
  const { data, error } = await supabase
    .from("Pizza")
    .select("*,pizza_extras(*)")
    .eq("id", id);

  if (error) throw new Error("Failed to fetch pizza.");
  console.log(error);

  return data[0];
}

// get featured pizzas

export async function getFeaturePizzas() {
  const { data, error } = await supabase
    .from("Pizza")
    .select("*")
    .eq("isFeatureProduct", true);

  if (error) throw new Error("Failed to fetch pizza.");
  console.log(error);
  return data;
}

// Get pizza by search name

export async function getSearchedPizzas(title) {
  console.log(title.toLowerCase());
  let { data, error } = await supabase
    .from("Pizza")
    .select("*")
    .eq("title", title.toLowerCase());

  if (error) throw new Error(error);
  console.log(error);

  return data;
}

// Get Recommended pizzas

export async function getRecommendedPizza(category) {
  let { data, error } = await supabase
    .from("Pizza")
    .select("*")
    .eq("category", category);

  if (error) throw new Error(error);
  console.log(error);
  return data;
}
