import React from 'react';

const nameListItems =(props)=>{
    return(
        <React.Fragment>
            <li className=" list-group-item">
                <div className="row align-items-center">
                    <div className="col-3">
                        <img src= {props.avatar}  alt="avatar" />
                    </div>
                    <div className="col-9">
                        <h4>Name : {props.Name}</h4>
                        <p>Email :  {props.Email} <br /> 
                            Gender : {props.Gender} <br />
                            City   : {props.City} </p>
                        
                    </div>
                </div>
            </li>
             
        </React.Fragment>

    );
}

export default nameListItems;