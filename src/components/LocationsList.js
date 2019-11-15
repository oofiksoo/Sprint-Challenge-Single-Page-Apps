import React, { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";
import styled from "styled-components";
const Card = styled.div `
  display: flex;

  flex-direction: column;

  align-items: center;

  padding: 10px;

  margin-bottom: 10px;

  border: 2px solid black;

  background: lightblue;
`;

const Img = styled.img `
  max-width: 60%;
`;

const Span = styled.span `
  font-weight: bold;
`;
const LocationList = props => {
    // TODO: Add useState to track data from useEffect

    const [location, setLocation] = useState([]);

    useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`

        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

        const getLocation = () => {
            axios
                .get("https://rickandmortyapi.com/api/location")

            .then(res => {
                console.log(res.data.results);

                setLocation(res.data.results);
            })

            .catch(err => {
                console.log("Catch error", err);
            });
        };

        getLocation();
    }, []);

    return ( <
        section className = "location-list grid-view" >
        <
        h2 > { " " } {
            location.map(locate => ( <
                Link to = { `/location/${locate.id}` } >
                <
                LocationDetails key = { locate.id }
                locate = { locate }
                />{" "} <
                /Link>
            ))
        } { " " } <
        /h2>{" "} <
        /section>
    );
};

function LocationDetails({ locate }) {
    const { name, type, residents } = locate;

    return ( <
        Card > { " " } { name } { `${type}` } { " " } <
        /Card>
    );
}

export default LocationList;