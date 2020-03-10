import React from "react";
import Map from "./pages/Map";
import Wallet from "./pages/Wallet";
import Controls from "./pages/Controls";

// context
import { PlayerState } from "./context/playerState";

import "./App.scss";

function App() {
	return (
		<div className="App">
			<PlayerState>
				<h1 className="title">Treasure Hunt</h1>
				<div className="player-console">
					<Map />
					<Wallet />
				</div>
				<Controls />
			</PlayerState>
		</div>
	);
}

export default App;
