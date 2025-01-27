import { useState, useEffect } from "react";
import * as Location from "expo-location";

export const useLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      try {
        // Request location permissions
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.log("Permission to access location was denied.");
          return;
        }

        // Get the user's current location
        const { coords } = await Location.getCurrentPositionAsync({});
        setLocation({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      } catch (err) {
        console.error("Error fetching location:", err);
      }
    };

    getLocation();
  }, []);

  return { location };
};
