import React from 'react';

const nameListItems =(props)=>{
    return(
        <React.Fragment>
            
                <p> <img src= {props.avatar}  alt="avatar" />  </p>
                <p>Name : {props.Name} </p>
                <p>Email   : {props.Email} </p>
                <p>Gender  :  {props.Gender} </p>
                <p>City   : {props.City} </p>
            
        </React.Fragment>

    );
}

export default nameListItems;