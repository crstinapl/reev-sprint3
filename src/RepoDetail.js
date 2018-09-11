import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class RepoDetail extends Component {
  render(){
    {/*const{repoDetailWithId}= this.props;
    const matchId = this.props.params.id;
    const matchParamsId= parseInt(matchId);*/}
      const {name, description, language, forks}=this.props.repoRouter;
      console.log(this.props.repoRouter);

  return(
    <div className="details">
    <Link to='/'>Back</Link>


        <div>
          <h2>{name}</h2>
          <p>{description}</p>
          <p> ● {language}</p>
          <p> {forks}</p>
        </div>


    {/*
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
      </ul>*/}
    repodetail
  </div>
  );
  }

}

export default RepoDetail;
