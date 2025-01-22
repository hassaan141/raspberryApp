import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import { Feather } from "@expo/vector-icons"

// Mock data (replace with actual API call)
const prayerTimes = [
  { name: "Fajr", time: "05:30 AM" },
  { name: "Dhuhr", time: "01:30 PM" },
  { name: "Asr", time: "05:00 PM" },
  { name: "Maghrib", time: "07:45 PM" },
  { name: "Isha", time: "09:15 PM" },
]

export const Home = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>{currentDate}</Text>
        <Text style={styles.masjidName}>Nearest Masjid: Al-Iman Mosque</Text>
      </View>
      <View style={styles.card}>
        {prayerTimes.map((prayer, index) => (
          <View key={index} style={styles.prayerRow}>
            <Text style={styles.prayerName}>{prayer.name}</Text>
            <Text style={styles.prayerTime}>{prayer.time}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.refreshButton}>
        <Feather name="refresh-cw" size={24} color="#4A5568" />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFC",
  },
  header: {
    padding: 20,
    alignItems: "center",
  },
  date: {
    fontSize: 18,
    color: "#4A5568",
    marginBottom: 5,
  },
  masjidName: {
    fontSize: 16,
    color: "#718096",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  prayerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  prayerName: {
    fontSize: 18,
    color: "#2D3748",
  },
  prayerTime: {
    fontSize: 18,
    color: "#4A5568",
    fontWeight: "bold",
  },
  refreshButton: {
    alignSelf: "center",
    padding: 10,
    marginTop: 20,
  },
})

