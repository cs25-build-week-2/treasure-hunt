import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import axios from "axios";

const url = "http://localhost:8000";
const Controls = () => {
	const [pathToShrine, setPathToShrine] = useState([]);
	const findNearestShrine = () => {
		async function getPath() {
			let path = await axios.get(`${url}`);
		}
	};

	return (
		<div>
			<h1>Controls</h1>
			<Button inverted color="blue" onClick={findNearestShrine}>
				Find Nearest Shrine
			</Button>
		</div>
	);
};

export default Controls;
