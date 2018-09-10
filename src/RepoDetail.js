import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class RepoDetail extends Component {
  render(){
    const{repoDetailWithId}= this.props;
    const matchId = this.props.params.id;
    const matchParamsId= parseInt(matchId);

  return(
    <div className="details">
      <Link to="/"><button className="link__detail"> Repo</button> </Link>
      <ul className="detail__list">
        {repoDetailWithId.map(function(item){
          if (item.id === matchParamsId){
            return(
              <li className="detail__element">
                <div className="detail__repo">
                  <h3 className="detail_title">{item.name}</h3>
                    <p>Descripción: {item.description}</p>
                    <p>Lenguaje: {item.language}</p>
                    <p>Forks: {item.forks}</p>
                    <p>Estrellas:{item.stargazers}</p>
                    <p>Observadores: {item.watchers}</p>
                </div>
              </li>
            )
      }
          })}
      </ul>
  </div>
  );
  }

}

export default RepoDetail;
