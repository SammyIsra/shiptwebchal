import React from 'react';
import {connect} from 'react-redux';

import FriendsList from './FriendsList';

import {fetchGithubData} from '../actions/index';

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

  render(){

    // Determine the data displayed 
    //  depending on whether or not the user has been loaded
    const dataDisplay = {};
    if(this.props.user.loaded){
      dataDisplay.followers = this.props.user.data.followers;
      dataDisplay.username = this.props.user.data.login;  
    } else {
      dataDisplay.followers = this.props.match.params.username;
      dataDisplay.username = '~';
    }

    return (
      <div className="UserPage">
        <h1>{dataDisplay.username}</h1>
        <h3>{dataDisplay.followers} Followers</h3>
        {this.props.user.loaded? 
          <FriendsList friendsUrl={this.props.user.data.followers_url} />
          :"Loading..."}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, {fetchGithubData})(UserPage);