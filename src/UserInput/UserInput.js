import React from 'react'
import UserInput from './UserInput.css'

const userInput =  (props) => {
    return (
        <div>
            <input type="text" className='UserInput' name="name" onChange={props.onChange}/>
        </div>
    );
};

export default userInput;