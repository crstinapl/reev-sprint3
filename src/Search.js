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
        <input className="star"
        onChange={this.props.handlestar}
        
        />
        <select onChange={this.props.handleselect}>
          <option value="">Todos los lenguajes</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>

        </select>
      </div>
    );
  }

}


 export default Search;
