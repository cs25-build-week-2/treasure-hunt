import React from "react";
import Map from "./components/Map";
import Wallet from "./components/Wallet";

import "./App.scss";

function App() {
	return (
		<div className="App">
			<h1>Treasure Hunt</h1>
			<div className="player-console">
				<Map />
				<Wallet />
			</div>
		</div>
	);
}

export default App;
