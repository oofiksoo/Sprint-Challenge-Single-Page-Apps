import React, { useEffect, useState } from "react";
import axios from "axios";

import { Card, Icon, Image } from "semantic-ui-react";

import { Link } from "react-router-dom";

const CharacterList = props => {
    // TODO: Add useState to track data from useEffect
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        const getCharacters = () => {
            axios
                .get("https://rickandmortyapi.com/api/character")

            .then(res => {
                console.log(res.data.results);

                setCharacter(res.data.results);
            })

            .catch(err => {
                console.log("Catch error", err);
            });
        };

        getCharacters();
    }, []);
    return ( <
        div className = "cards" >
        <
        section className = "character-list grid-view" >
        <
        h2 > { " " } {
            character.map(char => ( <
                Link to = { `/character/${char.id}` } >
                <
                CharDetails key = { char.id }
                char = { char }
                />{" "} <
                /Link>
            ))
        } { " " } <
        /h2>{" "} <
        /section> <
        /div>
    );
};

function CharDetails({ char }) {
    const { image, name, species, status, location, origin, episode } = char;

    return ( <
        Card >
        <
        Image src = { image }
        />{" "} <
        Card.Content >
        <
        Card.Header > { name } < /Card.Header>{" "} <
        Card.Meta > { `${species} ${status}` } < /Card.Meta>{" "} <
        Card.Description > { location.name } < /Card.Description>{" "} <
        Card.Description > { origin.name } < /Card.Description>{" "} <
        /Card.Content>{" "} <
        Card.Content extra >
        <
        a >
        <
        Icon name = "user" / >
        Episodes { " " } <
        /a>{" "} <
        /Card.Content>{" "} <
        /Card>
    );
}

export default CharacterList;