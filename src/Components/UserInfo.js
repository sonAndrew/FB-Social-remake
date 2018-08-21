import React from 'react';

function UserInfo(props) {
    
    return (
      <div className="infoStyle">
        <p>{props.job}</p>
        <p>{props.school}</p>
        <p>{props.city}, {props.state}, {props.country}</p>
      </div>
    );
}

export default UserInfo;