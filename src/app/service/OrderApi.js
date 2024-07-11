import supabase from "@/supabase/supabase";

export async function createOrder(newOrder) {
  const { data, error } = await supabase
    .from("order")
    .insert([{ ...newOrder }])
    .select()
    .single();

  if (error) {
    console.log("Error", error);
    throw new Error("Order did not created.Try again.");
  }

  return data;
}

export async function getOrders() {
  let { data: orders, error } = await supabase
    .from("order")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.log("Error", error);
    throw new Error("Order did not created.Try again.");
  }

  return orders;
}
export async function getSingleOrder(id) {
  let { data, error } = await supabase.from("order").select("*").eq("id", id);

  if (error) {
    console.log("Error", error);
    throw new Error("Order did not fetched.Try again.");
  }

  return data[0];
}

export async function updateOrder({ updateObj, id }) {
  const { data, error } = await supabase
    .from("order")
    .update(updateObj)
    .eq("id", id)
    .select();

  if (error) {
    console.log("Error", error);
    throw new Error("Order did not updated.");
  }

  return data;
}
