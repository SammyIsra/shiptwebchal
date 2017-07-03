import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import FriendCard from './FriendCard';

import {fetchMoreFollowers} from '../actions';

import './FollowersList.css';

class FollowersList extends React.Component {

  renderListOfFollowers(){
    return this.props.followers.list.map((_friend) => {
      return (
        <Link key={_friend.id} to={`/find/${_friend.login}`}> 
          <FriendCard friend={_friend} ></FriendCard>
        </Link>
      );
    });
  }
  
  render(){

    if(this.props.followers.loaded){
      console.log("Followers:" + this.props.followers.list.length);
    }

    return (
      <div className="FollowersList">
        {this.props.followers.loaded?
          this.renderListOfFollowers()
          :"Loading followers!"}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    followers: state.followers,
    followersCount: state.user.data.followers,
    followersUrl: state.user.data.followers_url
  };
}

export default connect(mapStateToProps, {fetchMoreFollowers})(FollowersList);