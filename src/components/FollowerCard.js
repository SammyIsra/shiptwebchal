import React from 'react';

import './FollowerCard.css';

function FollowerCard({follower}){
  return (
    <div className="FollowerCard" >
      <img 
        className="avatar" 
        src={follower.avatar_url} 
        alt={`Profile avatar of ${follower.login}`} />
      <p className="user-label" >{follower.login}</p>
    </div>
  )
}

export default FollowerCard;