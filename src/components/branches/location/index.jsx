import React from 'react'
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"
import { Container } from './style';

const Index = ({ location }) => {
    const { REACT_APP_MAP_KEY: mapKey } = process.env;
    const { isLoaded } = useJsApiLoader({
        // googleMapsApiKey: mapKey,
        id: "fastfood",
        googleMapsApiKey: "AIzaSyDdW7LC6CV - BDiegWcKiyeLoCKFx1uQ4kM"
    })
    return (
        <Container>
            {isLoaded && (
                <GoogleMap
                    id='fastfood'
                    zoom={12}
                    center={{ lat: 40.9983, lng: 71.67257 }}
                    mapContainerClassName='map'
                >

                </GoogleMap>
            )
            }
        </Container >
    )
}
export default Index;