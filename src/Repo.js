import React, {Component} from 'react';


class Repo extends Component {
  render() {
    const {name, description, language}=this.props
      return(
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
          <p> ● {language}</p>
        </div>
      );
  }
}

export default Repo;
