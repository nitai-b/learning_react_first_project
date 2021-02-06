// this is a different way of creating a component
// this is just a cunftion that returns some jsx
import React from 'react';


const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;