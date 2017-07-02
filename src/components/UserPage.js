import React from 'react';
import {connect} from 'react-redux';

import FriendsList from './FriendsList';

import {fetchUser} from '../actions/index';

class UserPage extends React.Component {

  state = {
    username: "SammyIsra"
  }
  
  componentDidMount(){
    this.props.fetchUser(this.state.username);
  }
  
  render(){

    if(this.props.user.loaded){
      console.log(this.props.user.data);
    }

    return (
      <div className="UserPage">
        <h1>{this.state.username}</h1>
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

export default connect(mapStateToProps, {fetchUser})(UserPage);