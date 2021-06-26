import { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(`http://localhost:5000/bike`);
    this.setState({ users: res.data, loading: false });
  }

  //search Github user
  searchUsers = async (text) => {
    console.log(text);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&{client_id=${process.env.REACT_APP_GIHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loding} users={this.state.users} />
        </div>

        {/* <UserItem /> */}
      </div>
    );
  }
}

export default App;
