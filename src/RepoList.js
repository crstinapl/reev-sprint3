import React, {Component} from 'react';
import Repo from './Repo';

class RepoList extends Component {
  constructor(props) {
    super(props);
  }

  render(){
  const {arrayrepos}=this.props;
  const filter=arrayrepos.filter(web=>
  web.name.toUpperCase().includes(this.props.inputFilter.toUpperCase()))


  return(
    <div>
      <ul className="card">
        {filter.map((repos, index)=>
          <li key={index}>
          <Repo
            name={repos.name}
            language={repos.language}
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
