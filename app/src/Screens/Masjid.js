import React from "react"
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons"

// Placeholder data for nearby masjids
const nearbyMasjids = [
  { id: "1", name: "Al-Iman Mosque", distance: "0.5 km", address: "123 Main St" },
  { id: "2", name: "Islamic Center", distance: "1.2 km", address: "456 Oak Ave" },
  { id: "3", name: "Masjid Al-Noor", distance: "2.3 km", address: "789 Elm St" },
  { id: "4", name: "Al-Falah Mosque", distance: "3.1 km", address: "101 Pine Rd" },
  { id: "5", name: "Al-Huda Islamic Center", distance: "3.8 km", address: "202 Cedar Ln" },
]

export const MasjidItem = ({ item }) => (
  <TouchableOpacity style={styles.masjidItem}>
    <View style={styles.masjidInfo}>
      <Text style={styles.masjidName}>{item.name}</Text>
      <Text style={styles.masjidAddress}>{item.address}</Text>
    </View>
    <View style={styles.masjidDistance}>
      <Feather name="map-pin" size={16} color="#718096" style={styles.icon} />
      <Text style={styles.distanceText}>{item.distance}</Text>
    </View>
  </TouchableOpacity>
)

export const Masjids = () => {
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

