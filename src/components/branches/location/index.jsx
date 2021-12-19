import React, { useState } from 'react'
import { GoogleMap, Marker, Autocomplete } from "@react-google-maps/api"
import { Container } from './style';
import { Loader } from '@googlemaps/js-api-loader';

const libraries = ['places']
const Index = ({ location }) => {
    const { REACT_APP_MAP_KEY: mapKey } = process.env;
    const loader = new Loader({
        googleMapsApiKey: mapKey,
        id: "fastfood",
        // googleMapsApiKey: "AIzaSyBLE_dn1M7Wab6MNhn072gdzw8_5r40r6E",
        libraries
    })
    const [place, setPlace] = useState(null);
    const [center, setCenter] = useState({ lat: 40.9983, lng: 71.67257 });
    const onPlaceChanged = () => {
        setCenter({
            lat: place?.getPlace()?.geometry?.location?.lat(),
            lng: place?.getPlace()?.geometry?.location?.lng()
        })
    }
    return (
        <Container>
            <Autocomplete
                onLoad={(e) => setPlace(e)}
                onPlaceChanged={onPlaceChanged}
            >
                <input type="text" style={{
                    height: "44px",
                    marginTop: "5px",
                    border: " 1px solid #EDEFF3",
                    outline: "none",
                    paddingLeft: "10px",
                    width: "272px",
                    borderRadius: "6px"
                }} />
            </Autocomplete>
            {loader && (
                <GoogleMap
                    id='fastfood'
                    zoom={12}
                    center={center}
                    mapContainerClassName='map'
                >
                    <Marker position={center} />
                </GoogleMap>
            )
            }
        </Container >
    )
}
export default Index;