import React from "react";

const ParentComponent = (props) => {
    return (
        <div>
            <ChildComponent firstname={"Jane"} lastname={"Doe"} />
        </div>
    )
}


const MyProducts = (props) => {
    return (
        <div className="PersonCard">
            <h1>{ props.firstname } { props.lastname }</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.haircolor}</p>
        </div>
    );
}


export default MyProducts;