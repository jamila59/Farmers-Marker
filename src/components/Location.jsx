import React from 'react';
import PropTypes from 'prop-types';


function Location(props){
    return (
        <div>
          <style jsx>{`
          div {
            background-color: red;
          }
        `}</style>
            <h3>{props.location}</h3>
            <h3>{props.day}</h3>
            <p><em>{props.time}</em></p>
            <hr/>
        </div>
    );
}

Location.propTypes = {
    location: PropTypes.string,
    time: PropTypes.string,
    day: PropTypes.string
};

export default Location;
