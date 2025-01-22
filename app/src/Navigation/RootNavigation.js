import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../Screens/Home"
import { Maps } from "../Screens/Map"
import { Masjids } from "../Screens/Masjid"
import { Feather } from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

const RootNavigator = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === "Home") {
              iconName = "home"
            } else if (route.name === "Map") {
              iconName = "map"
            } else if (route.name === "Masjids") {
              iconName = "list"
            }

            return <Feather name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: "#4A5568",
          tabBarInactiveTintColor: "#A0AEC0",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Map" component={Maps} />
        <Tab.Screen name="Masjids" component={Masjids} />
      </Tab.Navigator>
  )
}

export default RootNavigator

