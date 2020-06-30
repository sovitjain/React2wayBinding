import React from 'react'

const userOutput =  (props) => {
    return (
        <div>
            <p style={{color: "red"}}>I am Headers. My name is {props.name}.</p>
        </div>
        
    );
};

export default userOutput;