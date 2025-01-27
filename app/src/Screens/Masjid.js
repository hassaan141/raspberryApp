import React, {useState, useEffect} from "react"
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons"
import { fetchNearbyMasjids } from "../Supabase/fetchMasjidList"

export const MasjidItem = ({ item }) => (
  <TouchableOpacity style={styles.masjidItem}>
    <View style={styles.masjidInfo}>
      <Text style={styles.masjidName}>{item.Name}</Text>
      <Text style={styles.masjidAddress}>{item.Address}</Text>
    </View>
    <View style={styles.masjidDistance}>
      <Feather name="map-pin" size={16} color="#718096" style={styles.icon} />
      <Text style={styles.distanceText}>{item.distance}</Text>
    </View>
  </TouchableOpacity>
)

export const Masjids = () => {

  const [nearbyMasjids, setNearbyMasjids] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {  
    const loadMasid = async () => {
      try {
        const ten_masjid_list = await fetchNearbyMasjids()
        console.log("masjid list", ten_masjid_list)
        setNearbyMasjids(ten_masjid_list)
      } catch (err) {
        console.error("Error loading masjids:", err)
        setError("Failed to fetch masjids. Please try again later.")
      } finally {
        setLoading(false)
      }
    }
  
    loadMasid()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Nearby Masjids</Text>
      </View>
      <FlatList
        data={nearbyMasjids}
        renderItem={({ item }) => <MasjidItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFC",
  },
  header: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2D3748",
  },
  listContainer: {
    padding: 16,
  },
  masjidItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  masjidInfo: {
    flex: 1,
  },
  masjidName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2D3748",
    marginBottom: 4,
  },
  masjidAddress: {
    fontSize: 14,
    color: "#718096",
  },
  masjidDistance: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 4,
  },
  distanceText: {
    fontSize: 14,
    color: "#718096",
  },
})

