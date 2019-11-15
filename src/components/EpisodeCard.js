import React, { useState, useEffect } from "react";

import axios from "axios";

const EpisodeCard = props => {
    const [sode, setSode] = useState();

    const id = props.match.params.id;

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/episode/${id}`)

        .then(res => {
            setSode(res.data.results);
        })

        .catch(err => {
            console.log(err);
        });
    }, [id]);

    if (!sode) {
        return <div > Loading characters... < /div>;
    }

    const { name, air_date, characters } = sode;

    return ( <
        div className = "character-card" >
        <
        h3 > { name } < /h3> <
        p > { air_date } < /p> <
        h4 > { characters } < /h4>{" "} <
        /div>
    );
};

export default EpisodeCard;