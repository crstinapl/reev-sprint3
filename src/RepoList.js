import React, {Component} from 'react';
import Repo from './Repo';

class RepoList extends RepoList {
  constructor(props) {
    super(props)
  }

  render(){
  const {arrayrepos}=this.props;
  return(
    <div>
      <ul className="card">
        {arrayrepos.map((repos, index)=>
          <li key={index}>
          <Repo
            name={repos.name}
            description={repos.description}
          />
          </li>
        )}
      </ul>
    </div>
  )
  }
}

export default RepoList;
