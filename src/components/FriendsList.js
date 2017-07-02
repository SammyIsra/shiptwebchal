import React from 'react';
import {connect} from 'react-redux';

import {fetchFriends} from '../actions/index';

class FriendsList extends React.Component {
  
  componentDidMount(){
    this.props.fetchFriends(this.props.friendsUrl);
  }

  renderListOfFriends(){
    return this.props.friends.list.map((friend) => {
      return <p key={friend.id}>{friend.login}</p>;
    })
  }
  
  render(){

    if(this.props.friends.loaded){
      console.log("Friends:" + this.props.friends.list);
    }

    return (
      <div className="FriendsList">
        {this.props.friends.loaded?
          this.renderListOfFriends()
          :"Loading friends..."}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    friends: state.friends
  };
}

export default connect(mapStateToProps, {fetchFriends})(FriendsList);