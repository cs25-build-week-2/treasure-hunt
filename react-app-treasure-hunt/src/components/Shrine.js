import React, { useContext } from "react";
import { Button } from "semantic-ui-react";

import "../App.scss";

import { PlayerContext } from "../context/playerState";
const Shrine = () => {
	const { prayAtShrine } = useContext(PlayerContext);
	function Pray() {
		prayAtShrine();
	}
	return (
		<div className="shrine">
			<p>Pray at the Shrine to get powers</p>
			<Button onClick={Pray} color="green">
				Pray
			</Button>
		</div>
	);
};
export default Shrine;
