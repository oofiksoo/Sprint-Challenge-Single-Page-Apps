import React, { useEffect, useState } from "react";

import axios from "axios";

import { Card, Icon, Image } from "semantic-ui-react";

import { Link } from "react-router-dom";

const EpisodeList = props => {
    // TODO: Add useState to track data from useEffect

    const [episode, setEpisode] = useState([]);

    useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`

        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

        const getEpisode = () => {
            axios
                .get("https://rickandmortyapi.com/api/episode")

            .then(res => {
                console.log(res.data.results);

                setEpisode(res.data.results);
            })

            .catch(err => {
                console.log("Catch error", err);
            });
        };

        getEpisode();
    }, []);

    return ( <
        section className = "location-list-grid-view" >
        <
        h2 > { " " } {
            episode.map(sode => ( <
                Link key = { sode.id }
                to = { `/episode/${sode.id}` } >
                <
                LocationDetails key = { sode.id }
                sode = { sode }
                />{" "} <
                /Link>
            ))
        } { " " } <
        /h2>{" "} <
        /section>
    );
};

function LocationDetails({ sode }) {
    const { name, air_date, characters } = sode;

    return ( <
        Card >
        <
        Card.Content >
        <
        Card.Header > { name } < /Card.Header>{" "} <
        Card.Meta > { `${air_date}` } < /Card.Meta>{" "} <
        Card.Description > < /Card.Description>{" "} <
        /Card.Content>{" "} <
        Card.Content extra > < /Card.Content>{" "} <
        /Card>
    );
}

export default EpisodeList;