import React, {Component} from 'react';


class Search extends Component {
  render(){
  
    return(
      <div>
        <h1 className="title"> Repos at Adalab in GitHub</h1>
        <input className="look"
        onChange={this.props.handlelook}
        value={this.props.inputFilter}
        />
      </div>
    );
  }

}


 export default Search;
