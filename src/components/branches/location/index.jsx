import React from 'react'
import { GoogleMap, useJsApiLoader, Marker, Autocomplete } from "@react-google-maps/api"
import { Container } from './style';

const libraries = ['places']
const Index = ({ location }) => {
    const { REACT_APP_MAP_KEY: mapKey } = process.env;
    const { isLoaded } = useJsApiLoader({
        // googleMapsApiKey: mapKey,
        id: "fastfood",
        googleMapsApiKey: "AIzaSyD2fbm-0vqUfRB-L7NO8BiqBtk2IyYg38g",
        libraries
    })

    return (
        <Container>
            <Autocomplete onLoad={(e) => console.log(e)}>
                <input type="text" />
            </Autocomplete>
            {isLoaded && (
                <GoogleMap
                    id='fastfood'
                    zoom={12}
                    center={{ lat: 40.9983, lng: 71.67257 }}
                    mapContainerClassName='map'
                >
                    <Marker position={{ lat: 40.9983, lng: 71.67257 }} />
                    <Marker position={{ lat: 40.9123983, lng: 71.67257 }} />
                    <Marker position={{ lat: 40.9915383, lng: 71.673257 }} />
                </GoogleMap>
            )
            }
        </Container >
    )
}
export default Index;