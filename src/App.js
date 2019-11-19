import React from "react";

import "./App.css";
import Form from "./components/Form";
import Items from "./components/Items";
import Invaild from "./components/Invaild";

class App extends React.Component {
  state = {
    items: []
  };
  // on click getData
  getData = e => {
    //prevent
    e.preventDefault();
    // input value
    let search = e.target.elements.input;
    if (search.value === "") {
      alert("Add a movie name");
    } else {
      // key
      const key = "97f1bd616b51e07825e04a855aaeed30";
      // fetching data
      fetch(
        ` https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${search.value}`
      )
        .then(response => response.json())
        .then(data => {
          // adding data to state
          this.setState({ items: data.results });
          search.value = "";
        });
    }
  };

  // get data form localStorage
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ items: recipes });
  };

  // add data to localStorage
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.items);
    localStorage.setItem("recipes", recipes);
  };

  render() {
    return (
      <div className="App">
        <Form getData={this.getData} />
        <div className="items">
          {this.state.items.length === 0 ? (
            <Invaild />
          ) : (
            this.state.items.map(item => <Items key={item.id} data={item} />)
          )}
        </div>
      </div>
    );
  }
}

export default App;
