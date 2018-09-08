import React, {Component} from 'react';


class Repo extends Component {
  render() {
    const {name, description}=this.props
      return(
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      );
  }
}

export default Repo;
