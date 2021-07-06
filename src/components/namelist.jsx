import React from 'react';
import Items from './namelistItems'


const namelist = () =>{
    return(
      <React.Fragment>
        <div className="container mt-3">
          <ul className="list-group list-group-flush">
            {item()}
          </ul>
        </div>
        
        
      </React.Fragment>
       
    );
}

const item =()=>{
  const NameList = [
    {
      gender: "male",
      name: {title: "Mr", first: "brad",last: "gibson"},
      location: {street: "9278 new road",city: "kilcoole",state: "waterford",postcode: "93027"},
      email: "brad.gibson@example.com",
      dob: {date: "1993-07-20T09:44:18.674Z",age: 26},
      picture: {medium: "https://randomuser.me/api/portraits/men/75.jpg",},
    },
    {
      gender: "female",
      name: {title: "Ms", first: "Imelda",last: "Schwandt"},
      location: {street: "1783 new road",city: "Schwalmstadt",state: "waterford",postcode: "93027"},
      email: "imelda.schwandt@example.com",
      dob: {date: "1985-06-16T18:15:37.870Z",age: 36},
      picture: {medium: "https://randomuser.me/api/portraits/women/88.jpg",},
    },
    {
      gender: "female",
      name: {title: "Ms", first: "Michele",last: "Jennings"},
      location: {street: "8941 new road",city: "Geelong",state: "waterford",postcode: "93027"},
      email: "michele.jennings@example.com",
      dob: {date: "1970-08-01T09:22:30.326Z",age: 51},
      picture: {medium: "https://randomuser.me/api/portraits/women/77.jpg",},
    },
];
  return NameList.map((listItem)=>{
    return(
      <div className="p-2">
        <Items
        Name={listItem.name.title + ". " + listItem.name.first + " " + listItem.name.last}
        Gender={listItem.gender}
        City={listItem.location.city}
        Email={listItem.email}
        avatar={listItem.picture.medium} 
      />
      </div>
    )
      
    })
  };

export default namelist;