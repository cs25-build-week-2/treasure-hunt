import React, { useState } from "react";
import axios from "axios";

import Dpad from "../components/dPad";

import { Button } from "semantic-ui-react";

const url = "http://localhost:8000";

const Controls = () => {
	const [pathToShrine, setPathToShrine] = useState([]);
	const findNearestShrine = () => {
		async function getPath() {
			let path = await axios
				.post(`${url}/find-shrine/`)
				.then(res => console.log("res", res));
			setPathToShrine({ path });
		}
		getPath();
	};

	return (
		<div className="controls-wrapper">
			<h1>Controls</h1>
			<Button inverted color="blue" onClick={findNearestShrine}>
				Find Nearest Shrine
			</Button>
			<Dpad />
		</div>
	);
};

export default Controls;
