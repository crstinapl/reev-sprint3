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
      inputFilter:'',
    }
    console.log('this.state.repos', this.state);
    this.handlelook=this.handlelook.bind(this);

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

  render() {
    const filter=this.state.repos.filter(web=>
    web.name.toUpperCase().includes(this.state.inputFilter.toUpperCase()))

    return (
      <div className="App">
        <h1 className="title"> Repos at Adalab in GitHub</h1>
        <input className="look"
        onChange={this.handlelook}
        value={this.state.inputFilter}
      />
        <RepoList arrayrepos={this.state.repos}/>
      </div>
    );
  }
}

export default App;
