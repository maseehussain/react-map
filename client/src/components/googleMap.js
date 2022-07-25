import React, { Component } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import axios from "axios";

const center = { lat: 51.5072, lng: 0.1276 }

export default class GoogleMaps extends Component {
    state = {
        companies: []
    }

    componentDidMount() {
        axios.get(`https://run.mocky.io/v3/7cb595ed-2882-4dc7-8179-d38d0b9c9d13`)
            .then(res => {
                this.setState({ companies: res.data })
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    render() {
        return (
            <div className="map-box">
                <GoogleMap
                    center={center}
                    zoom={11}
                    mapContainerStyle={{ height: '100%', width: '100%' }}
                >
                    {this.state.companies.map(company => {
                        // console.log(company);
                        return (
                            <Marker
                                onClick={this.onMarkerClick}
                                key={company.id}
                                position={{ lat: company.location.latitude, lng: company.location.longitude }}
                            >
                            </Marker>
                        );
                    })}
                </GoogleMap>
            </div>
        )
    }
}


