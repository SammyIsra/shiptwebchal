import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import FriendCard from './FriendCard';

import './FriendsList.css';

class FriendsList extends React.Component {
  
  componentDidMount(){
    //this.props.fetchFriends(this.props.friendsUrl);
  }

  renderListOfFriends(){
    return this.props.friends.list.map((_friend) => {
      return (
        <Link key={_friend.id} to={`/find/${_friend.login}`}> 
          <FriendCard friend={_friend} ></FriendCard>
        </Link>
      );
    });
  }
  
  render(){

    if(this.props.friends.loaded){
      console.log("Friends:" + this.props.friends.list.length);
    }

    return (
      <div className="FriendsList">
        {this.props.friends.loaded?
          this.renderListOfFriends()
          :"Loading friends!"}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    friends: state.friends
  };
}

export default connect(mapStateToProps)(FriendsList);