import React, { useState, useEffect } from "react";

import axios from "axios";

const LocationCard = props => {
    const [loc, setLoc] = useState();

    const id = props.match.params.id;

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/location/${id}`)

        .then(res => {
            setLoc(res.data.results);
        })

        .catch(err => {
            console.log(err);
        });
    }, [id]);

    if (!loc) {
        return <div > Loading characters... < /div>;
    }

    const { name, type, residents } = loc;

    return ( <
        div className = "character-card" >
        <
        h3 > { name } < /h3> <
        p > { type } < /p> <
        h4 > { residents } < /h4>{" "} <
        /div>
    );
};

export default LocationCard;