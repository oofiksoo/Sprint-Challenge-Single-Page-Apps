import React from "react";

import styled from "styled-components";

import { NavLink } from "react-router-dom";

const NavContainer = styled.nav `
  width: 90%;

  display: flex;

  justify-content: space-evenly;
`;

export default function Nav() {
    return ( <
        div className = "navbar" >
        <
        NavContainer >
        <
        NavLink exact to = "/" > { " " } <
        div className = "btnbk" >
        <
        button > Home < /button>{" "} <
        /div>{" "} <
        /NavLink>{" "} <
        NavLink to = "/characters" >
        <
        div className = "btnbk" >
        <
        button > Characters < /button>{" "} <
        /div>{" "} <
        /NavLink>{" "} <
        NavLink to = "/episodes" >
        <
        div className = "btnbk" >
        <
        button > Episodes < /button>{" "} <
        /div>{" "} <
        /NavLink>{" "} <
        /NavContainer>{" "} <
        /div>
    );
}