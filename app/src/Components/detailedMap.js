import React from "react";
import MapView, { Marker, Circle } from "react-native-maps";
import { StyleSheet, View, Image } from "react-native";

const DetailedMap = () => {
  const markers = [
    {
      latitude: 43.45951,
      longitude: -80.53405,
      title: "Waterloo Masjid",
    },
    {
      latitude: 43.46458,
      longitude: -80.46095,
      title: "Kitchener Masjid",
    },
    {
      latitude: 43.47147,
      longitude: -80.54468,
      title: "SLC Prayer Room",
    },
  ];

  const userLocation = {
    latitude: 43.4501, 
    longitude: -80.4926, 
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 43.45951,
          longitude: -80.53405,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >

        <Marker
          coordinate={userLocation}
          title="Your Location"
          pinColor="blue" // Blue marker for the user
        />
        
        {markers.map((marker, index) => (
          <React.Fragment key={index}>
            {/* Marker for the location */}
            <Marker
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.title}
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
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              radius={3000} // 3KM radius in meters
              strokeColor="rgba(255, 38, 0, 0.5)" // Circle border color
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
