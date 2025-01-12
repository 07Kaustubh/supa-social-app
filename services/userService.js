import { supabase } from "../lib/supabase"

export const getUserData = async userId => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("id", userId)
      .single()

    if (error) {
      return { msg: error.message, success: false }
    }

    return { data, success: true }
  } catch (error) {
    console.log("Got error >>:", error)
    return { msg: error.message, success: false }
  }
}

export const updateUser = async (data, userId) => {
  try {
    const { error } = await supabase
      .from("users")
      .update(data)
      .eq("id", userId)

    if (error) {
      return { msg: error.message, success: false }
    }

    return { data, success: true }
  } catch (error) {
    console.log("Got error >>:", error)
    return { msg: error.message, success: false }
  }
}
