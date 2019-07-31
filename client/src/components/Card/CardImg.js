import React from "react";

export const CardImg = props => {

    return (
    <img className="card-img-top" src={props.children} alt="Card image cap"/>
    );
};