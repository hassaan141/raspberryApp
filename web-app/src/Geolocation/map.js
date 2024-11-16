import React from 'react'
import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, TileLayer, Popup, Circle} from 'react-leaflet'
import { Icon} from 'leaflet'

const Map = () => {

    const markers=[
        {
            geocode:[43.45951, -80.53405],
            popUp: "Waterloo Masjid"
        },
        {
            geocode:[43.46458, -80.46095],
            popUp: "Kitchner Masjid"
        },
        {
            geocode:[43.47147, -80.54468],
            popUp: "SLC Prayer Room"
        }
    ]

    const customIcon = new Icon({
        iconUrl: require('./mosque.png'),
        iconSize: [40, 40]
    })

  return (
    <MapContainer
      className='border-red-500 border-2 rounded-lg'
      center={[43.45951, -80.53405]}
      zoom={14}
      scrollWheelZoom={true}
      style={{ height: '500px', width: '1000px' }}
    >
        <TileLayer
        attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map(marker=>(
            <Marker position={marker.geocode} icon={customIcon}>
                <Popup>{marker.popUp}</Popup>
                <Circle
                    center={marker.geocode}
                    radius={3000}
                    color="red"
                />
            </Marker>
        ))}
    </MapContainer>
  )

}
export default Map