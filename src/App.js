import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: "",
		};
	}

	componentDidMount() {
		fetch("http://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			//.then(response => console.log(response))
			.then((users) => this.setState({ monsters: users }));
	}

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className="App">
				<h1>Monster Rolodex</h1>
				<SearchBox
					placeholder="search monsters"
					handleChange={(e) => this.setState({ searchField: e.target.value })}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
