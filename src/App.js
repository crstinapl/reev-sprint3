import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import Repo from './Repo';
import RepoList from './RepoList';
import { Route, Switch } from 'react-router-dom';
import RepoDetail from './RepoDetail';
import Footer from './Footer';


const Adalab = "https://api.github.com/orgs/Adalab/repos"

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      repos:[],
      inputFilter:'',
      selectFilter:'',
    }
    console.log('this.state.repos', this.state);
    this.handlelook=this.handlelook.bind(this);
    this.handleselect=this.handleselect.bind(this);
    this.getRepo=this.getRepo.bind(this);

  }

  componentDidMount(){
    fetch(Adalab)
    .then((response)=>{
      return response.json();
    })
    .then((json)=>{
      this.setState({
        repos:json
      });
    });
  }

  handlelook(event){
    this.setState(
      {inputFilter:event.target.value}
    )
  }

  handleselect(event){
    this.setState(
      {selectFilter:event.target.value}
    )
  }

  getRepo(id){ console.log('id del estado',this.state.repos.id)
    console.log('hola',id);
      const {repos}=this.state;
      // debugger;
      return repos.find(repoFind =>repoFind.id === parseInt(id));
    }


  render() { console.log('this.state.repos', this.state.repos.length);
    // const {arrayrepos}=this.state.repos;
    if(this.state.repos.length===0){
      return(
        <div>
          <p>Cargando</p>
        </div>
      )
     } else {


    return (
      <div className="App">

        <Search
          inputFilter={this.state.inputFilter}
          handlelook={this.handlelook}
          repos={this.state.repos}
          handleselect={this.handleselect}
        />

      <main>
        <Switch>
          <Route
            exact path='/'
            render={()=>
            <RepoList arrayrepos={this.state.repos}
              inputFilter={this.state.inputFilter}
              selectFilter={this.state.selectFilter}
            />
            }
          />
          <Route
            exact path='/:id'
            render={({match})=>
            <RepoDetail
              match={match}
              repoRouter={this.getRepo(match.params.id)}

            />
            }
          />
        </Switch>
      </main>

      </div>
    );
  }
}
}

export default App;
