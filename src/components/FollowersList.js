import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import FollowerCard from './FollowerCard';

import {fetchMoreFollowers} from '../actions';

import './FollowersList.css';

export class FollowersList extends React.Component {

  renderListOfFollowers(){
    return this.props.followers.list.map((follower) => {
      return (
        <Link key={follower.id} to={`/find/${follower.login}`}> 
          <FollowerCard 
            avatar_url={follower.avatar_url} 
            login={follower.login} />
        </Link>
      );
    });
  }
  
  render(){

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