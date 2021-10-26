import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';
import Scroll from './scroll';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        this.setState({robots: robots})
    }
    onSearch=(event)=>{
        this.setState({searchfield: event.target.value})
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f1'>iROBOTS</h1>
                <SearchBox searchchange={this.onSearch}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
          );
    }
  
}


export default App;