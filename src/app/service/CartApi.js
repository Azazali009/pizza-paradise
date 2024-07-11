import supabase from "@/supabase/supabase";

// Get all cart data
export async function getCartData() {
  let { data: cart, error } = await supabase.from("cart").select("*");

  if (error) {
    console.log(error);
    throw new Error(error);
  }

  return cart;
}

// Add item to the cart
export async function addItem(cartItem) {
  const { data, error } = await supabase
    .from("cart")
    .insert([{ ...cartItem }])
    .select()
    .single();

  if (error) {
    console.log(error);
    throw new Error(error);
  }

  return data;
}

export async function updateCartItem(updateObj, id) {
  console.log(updateObj);
  const { data, error } = await supabase
    .from("cart")
    .update(updateObj)
    .eq("id", id)
    .select();

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
  return data;
}

export async function deletCartItem(id) {
  const { data, error } = await supabase.from("cart").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
  return data;
}
export async function deleteAllCart() {
  const { data, error } = await supabase.from("cart").delete().neq("id", 0);

  if (error) {
    console.log(error);
    throw new Error("Unable to delete all cart");
  }
  return data;
}
