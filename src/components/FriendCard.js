import React from 'react';

import './FriendCard.css';

function FriendCard({friend}){
  return (
    <div className="FriendCard" >
      <img 
        className="avatar" 
        src={friend.avatar_url} 
        alt={`Profile avatar of ${friend.login}`} />
    </div>
  )
}

export default FriendCard;