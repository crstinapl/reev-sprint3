import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import Repo from './Repo';
import RepoList from './RepoList';


const Adalab = "https://api.github.com/orgs/Adalab/repos"

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      repos:[],
    }
    console.log('this.state.repos', this.state);

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

  render() {
    

    return (
      <div className="App">
        <h1 className="title"> Repos at Adalab in GitHub</h1>
        <input className="look"
        onChange={this.handlelook}
      />
        <RepoList arrayrepos={this.state.repos}/>
      </div>
    );
  }
}

export default App;
