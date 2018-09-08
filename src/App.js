import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RepoList from './RepoList';
import Search from './Search';
import Repo from './Repo';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      repos:[],
    }
    console.log('this.state.repos', this.state);
    this.handlelook=this.handlelook.bind(this);
  }

  componentDidMount(){
    fetch('https://api.github.com/orgs/Adalab/repos')
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

      </div>
    );
  }
}

export default App;
