import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/Navigation/RootNavigation";
import "./global.css";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
