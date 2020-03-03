import React from "react";
import Map from "./components/Map";
import Wallet from "./components/Wallet";
import Controls from "./components/Controls";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<h1 className="title">Treasure Hunt</h1>
			<div className="player-console">
				<Map />
				<Wallet />
			</div>
			<Controls />
		</div>
	);
}

export default App;
