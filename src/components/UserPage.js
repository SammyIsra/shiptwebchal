import React from 'react';
import {connect} from 'react-redux';

import FollowersList from './FollowersList';

import {fetchGithubData, fetchMoreFollowers} from '../actions/index';

import './UserPage.css';

export class UserPage extends React.Component {
  
  componentDidMount(){
    console.log("Mounted!")
    this.props.fetchGithubData(this.props.match.params.username || "SammyIsra");
  }

  componentDidUpdate(){

    //Component is updated, fetch new user
    if(this.props.user.data.login.toLowerCase() !== this.props.match.params.username.toLowerCase()){
      this.props.fetchGithubData(this.props.match.params.username);      
      //Show this.props.unLoadUser? 
    }
  }

  renderLoadMoreButton(){

    //If users havent loaded, OR if followers havent loade, OR if the user fetch failed
    // Early exit, dont render
    if(!this.props.user.loaded || !this.props.followersLoaded || this.props.user.failed)
      return undefined;

    //If our list of user followers is LTE to the listed number of followers, early exit
    if(this.props.followersCount >= this.props.user.data.followers)
      return undefined;

    //Page to be loaded
    // Current count/page size to determine next page
    // Getting computer arquitecture flashbacks...
    const page = Math.floor(this.props.followersCount/30)+1;
    //Event handler of Load More
    const onSubmitHandler = (e) => {
      this.props.fetchMoreFollowers(this.props.user.data.followers_url, page)
    }
    //Return the Load More button
    return (
      <button onClick={onSubmitHandler}>
        Load more followers
      </button>
    );
  }

  render(){

    // Determine the data displayed 
    //  depending on whether or not the user has been loaded
    const dataDisplay = {};
    if(this.props.user.loaded && !this.props.user.failed){
      dataDisplay.followers = this.props.user.data.followers;
      dataDisplay.username = this.props.user.data.login;  
    } else {
      dataDisplay.followers = '~';
      dataDisplay.username = this.props.match.params.username;
    }

    //If the fetch has ended
    //  If user fetch has failed
    //     Dispaly failure message
    //  Else
    //    Dispaly the follower list
    //Else
    //  Dispaly Loading message
    return (
      <div className="UserPage">
        <h1>{dataDisplay.username}</h1>
        <h3>{dataDisplay.followers} Followers</h3>
        {this.props.user.loaded? 
          this.props.user.failed? 
            <div className="errorMessage">User loading failed!</div>
            : <FollowersList followersUrl={this.props.user.data.followers_url} />
          : "Loading..."}
        {this.props.user.failed}
        {this.renderLoadMoreButton()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    followersCount: state.followers.list.length,
    followersLoaded: state.followers.loaded
  };
}

export default connect(mapStateToProps, {fetchGithubData, fetchMoreFollowers})(UserPage);