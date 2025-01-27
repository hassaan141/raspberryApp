import { supabase } from "./supabaseClient"

export const fetchNearbyMasjids = async () => {
  try {
    const { data, error } = await supabase
      .from("masjid-list") 
      .select("*")
      // .order("distance", { ascending: true }) 
      .limit(10)

    if (error) {
      throw error
    }

    console.log("masjid data in fetch", data)
    return data
  } catch (err) {
    console.error("Error fetching masjids:", err)
    throw err
  }
}
