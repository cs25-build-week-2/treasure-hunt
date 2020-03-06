import React, { useContext } from "react";
import { PlayerContext } from "../context/playerState";

import Dpad from "../components/dPad";
import StatusCard from "../components/StatusCard";
import Shrine from "../components/Shrine";
import Items from "../components/Items";
import Auto from "../components/auto";

import { Button } from "semantic-ui-react";

const Controls = () => {
	const { pathToShrine, getStats, map, examine } = useContext(PlayerContext);

	function shrine() {
		pathToShrine(map.room_id, 22);
	}
	function status() {
		getStats();
	}
	function examines() {
		examine("well");
	}
	if (map.room_id === 22) {
		shrine = <Shrine />;
	}
	return (
		<div className="controls-wrapper">
			<h1>Controls</h1>
			<div className="hot-key">
				<Button inverted color="blue" onClick={shrine}>
					Find Nearest Shrine
				</Button>
				<Auto />
				<Button inverted color="blue" onClick={status}>
					Get Status
				</Button>
				<Button inverted color="blue" onClick={examines}>
					Examine
				</Button>
			</div>
			<div className="actions">
				<Dpad />
				<StatusCard />
			</div>
			{shrine}
			<Items />
		</div>
	);
};

export default Controls;
