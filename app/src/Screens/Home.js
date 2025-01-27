import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Image } from "react-native"
import { Feather } from "@expo/vector-icons"
import PrayerTimes from "../Data/waterloo-masjid/displaySalah"

const prayerTimes = [
  { name: "Fajr", time: "05:30 AM" },
  { name: "Sunrise", time: "06:45 AM" },
  { name: "Dhuhr", time: "01:30 PM" },
  { name: "Asr", time: "05:00 PM" },
  { name: "Maghrib", time: "07:45 PM" },
  { name: "Isha", time: "09:15 PM" },
]

const masjidDetails = {
  name: "Al-Iman Mosque",
  address: "123 Islamic Way, Cityville, State 12345",
  phone: "(123) 456-7890",
  website: "www.alimanmosque.com",
  distance: "0.5 miles",
  nextPrayer: "Asr",
  nextPrayerTime: "05:00 PM",
}

const MasjidDetailsModal = ({ visible, onClose, details }) => (
  <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>{details.name}</Text>
        <Text style={styles.modalText}>Address: {details.address}</Text>
        <Text style={styles.modalText}>Phone: {details.phone}</Text>
        <Text style={styles.modalText}>Website: {details.website}</Text>
        <Text style={styles.modalText}>Distance: {details.distance}</Text>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
)

export const Home = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* <Image source={require("../assets/mosque-icon.png")} style={styles.headerIcon} /> */}
        <Text style={styles.headerTitle}>Sadqah Jariyah</Text>        <Text style={styles.date}>{currentDate}</Text>

      </View>

      <View style={styles.nextPrayerCard}>
        <Text style={styles.nextPrayerTitle}>Next Prayer</Text>
        <Text style={styles.nextPrayerName}>{masjidDetails.nextPrayer}</Text>
        <Text style={styles.nextPrayerTime}>{masjidDetails.nextPrayerTime}</Text>
      </View>

      <TouchableOpacity style={styles.masjidButton} onPress={() => setModalVisible(true)}>
        <View style={styles.masjidButtonContent}>
          <View>
            <Text style={styles.masjidButtonText}>Nearest Masjid</Text>
            <Text style={styles.masjidName}>{masjidDetails.name}</Text>
          </View>
          <Text style={styles.masjidDistance}>{masjidDetails.distance}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Prayer Times</Text>
        {prayerTimes.map((prayer, index) => (
          <View key={index} style={styles.prayerRow}>
            <Text style={styles.prayerName}>{prayer.name}</Text>
            <Text style={styles.prayerTime}>{prayer.time}</Text>
          </View>
        ))}
        {/* <PrayerTimes/> */}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.refreshButton}>
          <Feather name="refresh-cw" size={24} color="#4A5568" />
        </TouchableOpacity>
      </View>

      <MasjidDetailsModal visible={modalVisible} onClose={() => setModalVisible(false)} details={masjidDetails} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFC",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#4A5568",
  },
  headerIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerTitle: {
    paddingTop: 12,
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  nextPrayerCard: {
    backgroundColor: "#48BB78",
    padding: 20,
    margin: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  nextPrayerTitle: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 5,
  },
  nextPrayerName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 5,
  },
  nextPrayerTime: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  masjidButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  masjidButtonContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  masjidButtonText: {
    fontSize: 16,
    color: "#4A5568",
    marginBottom: 5,
  },
  masjidName: {
    fontSize: 18,
    color: "#2D3748",
    fontWeight: "bold",
  },
  masjidDistance: {
    fontSize: 16,
    color: "#48BB78",
    fontWeight: "bold",
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
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2D3748",
    marginBottom: 15,
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
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  date: {
    fontSize: 16,
    color: "#4A5568",
  },
  refreshButton: {
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#2D3748",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#4A5568",
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#4A5568",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 15,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
})

