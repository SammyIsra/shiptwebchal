import React from 'react';

import './FollowerCard.css';

function FollowerCard({avatar_url, login}){
  return (
    <div className="FollowerCard" >
      <img 
        className="avatar" 
        src={avatar_url} 
        alt={`Profile avatar of ${login}`} />
      <p className="user-label" >{login}</p>
    </div>
  )
}

export default FollowerCard;