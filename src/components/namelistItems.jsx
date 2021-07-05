import React from 'react';

const nameListItems =(props)=>{
    return(
        <React.Fragment>
            <li>
                <p> <img src=" {props.avatar} " alt="avatar" />  </p>
                <p> {props.Name} </p>
                <p> {props.Email} </p>
                <p> {props.Gender} </p>
                <p> {props.City} </p>
            </li>
        </React.Fragment>

    );
}

export default nameListItems;