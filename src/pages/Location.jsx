import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";

const GoogleMapComponent = () => {
    const [center, setCenter] = useState({ lat: -26.2041, lng: 28.0473 }); // Johannesburg, South Africa

    return (
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
                mapContainerStyle={{ width: "100%", height: "500px"}}
                center={center}
                zoom={12}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapComponent;
