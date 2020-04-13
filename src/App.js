import React, { Component } from "react";
import axios from "axios";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/rearch-box.component";

import "./App.css";
import "./index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) =>
      this.setState({
        monsters: data,
      })
    );
  }

  handleChange = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonstres = monsters.filter(({ name }) =>
      name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonstres} />
      </div>
    );
  }
}

export default App;
