import React from "react";
import { Icon } from "semantic-ui-react";

const Dpad = () => {
	return (
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
	);
};
export default Dpad;
