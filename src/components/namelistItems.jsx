import React from 'react';

const nameListItems =(props)=>{
    return(
        <React.Fragment>
            <li className=" list-group-item shadow-sm">
                <div className="row align-items-center">
                    <div className="col-sm-4 col-md-6 col-lg-3">
                        <img className="border border-primary border-1 rounded-circle shadow-md" src= {props.avatar}  alt="avatar" />
                    </div>
                    <div className="col-sm-4 col-md-6 col-lg-9 font-monospace">
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