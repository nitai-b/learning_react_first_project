// this is a different way of creating a component
// this is just a cunftion that returns some jsx
import React from 'react';


const person = (props) => {
    return <p>I'm {props.name} and I am {props.age} years old!</p>
}

export default person;