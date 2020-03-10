import React, { useContext } from "react";
import { Button } from "semantic-ui-react";

import "../App.scss";

import { PlayerContext } from "../context/playerState";
const Shrine = () => {
	const { pickUp, map } = useContext(PlayerContext);
	function Take() {
		pickUp(map.items);
	}

	return (
		<div className="shrine">
			{(() => {
				if (map.items.length > 0) {
					return (
						<div>
							<p>Take the item in the room!</p>
							<Button onClick={Take} color="green">
								Take
							</Button>
						</div>
					);
				}
			})()}
		</div>
	);
};
export default Shrine;
