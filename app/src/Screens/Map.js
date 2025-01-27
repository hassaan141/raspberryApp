import React from "react"
import { View, Text, StyleSheet, Dimensions } from "react-native"
import DetailedMaps from "../Components/Map/detailedMap"

export const Maps = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Nearby Masjids</Text>
      </View>
      <View style={styles.mapContainer}>
        <DetailedMaps />
      </View>     
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
  mapContainer: {
    flex: 1,
    backgroundColor: "#E2E8F0",
  },
  map: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
})

