import React from 'react';
import {connect} from 'react-redux';

import FollowersList from './FollowersList';

import {fetchGithubData, fetchMoreFollowers} from '../actions/index';

import './UserPage.css';

class UserPage extends React.Component {
  
  componentDidMount(){
    console.log("Mounted!")
    this.props.fetchGithubData(this.props.match.params.username || "SammyIsra");
  }

  componentDidUpdate(){

    //Component is updated, fetch new user
    if(this.props.user.data.login.toLowerCase() !== this.props.match.params.username.toLowerCase()){
      console.log("Different User!");
      this.props.fetchGithubData(this.props.match.params.username);      
      //Show this.props.unLoadUser? 
    }
  }

  renderLoadMoreButton(){

    //If we have less followers than the user has
    if(this.props.followersCount < this.props.user.data.followers){
      const page = Math.floor( this.props.user.data.followers/this.props.followersCount)+1;
      const onSubmitHandler = (e) => {
        this.props.fetchMoreFollowers(this.props.user.data.followers_url, page)
      }
      return (
        <button onClick={onSubmitHandler}>
          Load more followers
        </button>
      );
    } else {
      return undefined;
    }
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
    followersCount: state.followers.list.length
  };
}

export default connect(mapStateToProps, {fetchGithubData, fetchMoreFollowers})(UserPage);