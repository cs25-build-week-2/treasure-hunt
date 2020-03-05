import React, { useContext } from "react";
import { Icon, Button } from "semantic-ui-react";
import { PlayerContext } from "../context/playerState";

const Dpad = () => {
	const { move, card } = useContext(PlayerContext);

	function movement(e) {
		move(e, card.name);
	}
	return (
		<div className="controls">
			<Button inverted color="blue" onClick={() => movement("n")}>
				<div className="n">
					<Icon name="arrow up" />
					<p>N</p>
				</div>
			</Button>
			<div className="e-w">
				<Button inverted color="blue" onClick={() => movement("w")}>
					<div className="w">
						<Icon name="arrow left" />W
					</div>
				</Button>
				<Button inverted color="blue" onClick={() => movement("e")}>
					<div className="e">
						E
						<Icon name="arrow right" />
					</div>
				</Button>
			</div>
			<Button inverted color="blue" onClick={() => movement("s")}>
				<div className="s">
					<Icon name="arrow down" />
					<p>S</p>
				</div>
			</Button>
		</div>
	);
};
export default Dpad;
