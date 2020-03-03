import React, { useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import axios from "axios";

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
			<div className="controls">
				<div className="n">
					<Icon name="arrow up" />
					<p>N</p>
				</div>
				<div className="e-w">
					<div className="w">
						<Icon name="arrow left" />W
					</div>
					<div className="e">
						E
						<Icon name="arrow right" />
					</div>
				</div>
				<div className="s">
					<Icon name="arrow down" />
					<p>S</p>
				</div>
			</div>
		</div>
	);
};

export default Controls;
