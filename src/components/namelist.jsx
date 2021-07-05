import React from 'react';
import Items from './namelistItems'



const namelist = () =>{
    const NameList = {
        gender: "male",
        name: {
            title: "mr",
            first: "brad",
            last: "gibson"
          },
          location: {
            street: "9278 new road",
            city: "kilcoole",
            state: "waterford",
            postcode: "93027",
          },
          email: "brad.gibson@example.com",
          dob: {
            date: "1993-07-20T09:44:18.674Z",
            age: 26
          },
          picture: {
            medium: "https://www.marketing91.com/wp-content/uploads/2016/01/download-1.jpg",
          },
    };
    return(
        <React.Fragment>
            <ul>
               <Items
                    Name = {NameList.name.title +". "+NameList.name.first+" "+NameList.name.last}
                    Gender = {NameList.gender}
                    City = {NameList.location.city}
                    Email = {NameList.email}
                    avatar = {NameList.picture.medium}
               /> 
              
            </ul>
        </React.Fragment>
    );
}

export default namelist;