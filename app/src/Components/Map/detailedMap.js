import React, {useState, useEffect} from "react";
import MapView, { Marker, Circle } from "react-native-maps";
import { StyleSheet, View, Image } from "react-native";
import { fetchNearbyMasjids } from "../../Supabase/fetchMasjidList"
import { useLocation } from "../Use_Location/useLocationTest"

const DetailedMap = () => {

    const { location } = useLocation();
    const [nearbyMasjids, setNearbyMasjids] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const TEST = true;
  
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

  const userLocation = {
    latitude: 43.4501, 
    longitude: -80.4926, 
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        //TODO: Change the initial region to the user's location
        initialRegion={{
          latitude: TEST? 43.45951: 43.45951,
          longitude: TEST? -80.53405: -80.53405,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >

        <Marker
          coordinate={TEST ? userLocation: location}
          title="Your Location"
          pinColor="blue" 
        />
        
        {nearbyMasjids.map((marker, index) => (
          <React.Fragment key={index}>
            {/* Marker for the location */}
            <Marker
              coordinate={{
                latitude: marker.Latitude,
                longitude: marker.Longitude,
              }}
              title={marker.Name}
            >
              {/* Custom Icon */}
              <Image
                source={require("./mosque.png")}
                style={styles.markerIcon}
              />
            </Marker>

            {/* Circle with 3KM radius */}
            <Circle
              center={{
                latitude: marker.Latitude,
                longitude: marker.Longitude,
              }}
              radius={3000} // 3KM radius in meters
              strokeColor="rgba(255, 38, 0, 0.34)" // Circle border color
              fillColor="rgba(255, 60, 0, 0.2)" // Circle fill color
              strokeWidth={2}
            />
          </React.Fragment>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  markerIcon: {
    width: 30,
    height: 30,
  },
});

export default DetailedMap;
