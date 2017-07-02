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
    if(this.props.user.data.login !== this.props.match.params.username){
      console.log("Different User!");
      this.props.fetchGithubData(this.props.match.params.username);      
      //Show this.props.unLoadUser? 
    }
  }

  render(){

    if(this.props.user.loaded){
      console.log(this.props.user.data);
    }

    return (
      <div className="UserPage">
        <h1>{this.props.match.params.username}</h1>
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