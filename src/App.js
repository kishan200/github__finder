
import { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import axios from 'axios';

class App extends Component {
  state = { 
    users:[],
    loading:false
    
  }
    async componentDidMount()
    {
      this.setState({loading:true});

      const res = await axios.get('https://api.github.com/users');
      console.log(res.data)
      //this.setState({users : res.data, loading:false});
          // .then(res => console.log(res.data));
    }
  render()
  {
  
  
    return (
      <div className="App">
        
        <Navbar/>
        <div className= "container">
        <Users loading={this.state.loding} users={this.state.users}/>
        </div>

        
        {/* <UserItem /> */}
        
    </div>
    );
    }
}

export default App;
