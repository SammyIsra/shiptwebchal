import React from 'react';
import {connect} from 'react-redux';

import {fetchUser} from '../actions/index';

class UserPage extends React.Component {
  
  componentDidMount(){
    this.props.fetchUser();
  }
  
  render(){

    if(this.props.user.loaded){
      console.log(this.props.user.data);
    }

    return (
      <div className="UserPage">

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