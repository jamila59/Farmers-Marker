import React from 'react';
import Location from './Location';

var masterLocationList = [
  {
    location:"La Grande",
    time:"10 am - 3 pm",
    day:"Monday-Wendnesday!"
 },
 {
   location:"Ontario",
   time:"10 am - 3 pm",
   day:"Thursday-Saturday!"

 }
];

function LocationList(){
  return(
    <div>
      <hr/>
      {masterLocationList.map((location, index)=>
      <Location location={location.location}
        time={location.time}
        day={location.day}
        key={index}/>
    )}
  </div>
);
}


export default LocationList;
