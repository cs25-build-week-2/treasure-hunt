import React, { useContext } from "react";
import { PlayerContext } from "../context/playerState";

import { Button } from "semantic-ui-react";

const Auto = () => {
	const { auto, map } = useContext(PlayerContext);
	function Auto() {
		auto(map.room_id);
	}
	return (
		<div>
			<Button inverted color="blue" onClick={Auto}>
				Auto
			</Button>
		</div>
	);
};
export default Auto;
