import React from "react";

function Header(props) {
    {/* 
    I console.log the props object to see what it contains. The result is: 
    {"name": "Anna","color": "purple"}

    I then destructure the name and color props */}
    console.log(props);
    return <h1>Hello there indeed, {props.name}, {props.color}</h1>;
}

export default Header;