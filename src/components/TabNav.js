import React from "react";

import { Tab } from "semantic-ui-react";

import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below

// Take a look at React Semantic UI tabs

// https://react.semantic-ui.com/modules/tab/

export default function TabNav(props) {
    const panes = [
        { menuItem: "Tab 1", pane: "Tab 1 Content" },

        { menuItem: "Tab 2", pane: "Tab 2 Content" },

        { menuItem: "Tab 3", pane: "Tab 3 Content" }
    ];

    const TabExampleBasicAll = () => ( <
        Tab panes = { panes }
        renderActiveOnly = { false }
        />
    );

    TabExampleBasicAll();

    return ( <
        div className = "navLink-wrapper" >
        <
        div className = "ui attached tabular menu" >
        <
        NavLink exact to = "/"
        activeClassName = "active item" >
        Home { " " } <
        /NavLink> <
        NavLink to = "/character"
        activeClassName = "active item" >
        Characters { " " } <
        /NavLink> <
        NavLink to = "/location"
        activeClassName = "active item" >
        Location { " " } <
        /NavLink> <
        NavLink to = "/episode"
        activeClassName = "active item" >
        Episodes { " " } <
        /NavLink>{" "} <
        /div>{" "} <
        /div>
    );
}