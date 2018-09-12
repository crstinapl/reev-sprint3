import React, {Component} from 'react';
import Repo from './Repo';
import {Link} from 'react-router-dom';

class RepoList extends Component {
  constructor(props) {
    super(props);
  }

  render(){
  const {arrayrepos}=this.props;
  const arrayFilterInputs=arrayrepos.filter(web=>
  web.name.toUpperCase().includes(this.props.inputFilter.toUpperCase()));
  {/* voy a llamarle arrayAllFilters pq me filtra del filtro anterior (arrayFilterInputs), sus filtros. Es un filtro de un filtro*/}
  const arrayAllFilters=arrayFilterInputs.filter(web=>
  web.language.includes(this.props.selectFilter));
  const arrayfilterthreetimes=arrayAllFilters.filter(web=>
  web.stargazers_count>(this.props.inputStar));
  console.log(this.props.selectFilter);

  return(
    <div>
      <ul className="card">
        {arrayfilterthreetimes.map((repos, index)=>
          <li key={index}>
          <Link to={`/${repos.id}`}>
          <Repo
            name={repos.name}
            language={repos.language}
            description={repos.description}
          />
          </Link>
          </li>
        )}
      </ul>
    </div>
  )
  }
}

export default RepoList;
