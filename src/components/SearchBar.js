import React from 'react';
import {withRouter} from 'react-router-dom';

import './SearchBar.css';

export class SearchBar extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      userSearched: ''
    }

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
}

  onSearchChange(e){
    this.setState({
      userSearched: e.target.value
    })
  }

  //Go to the navigation page
  onSearchSubmit(e){
    this.props.history.push(`/find/${this.state.userSearched}`);
  }

  render(){
    return (
      <div className="SearchBar">
        <form onSubmit={this.onSearchSubmit}> 
          <input 
            type="text" 
            value={this.state.userSearched}
            placeholder="Search for a GitHub username!"
            onChange={this.onSearchChange} />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);