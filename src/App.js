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


    return (
      <div className="App">
        <Search
          inputFilter={this.state.inputFilter}
          handlelook={this.handlelook}
          repos={this.state.repos}
          />
          <RepoList arrayrepos={this.state.repos}
            inputFilter={this.state.inputFilter}
          />
      </div>
    );
  }
}

export default App;
