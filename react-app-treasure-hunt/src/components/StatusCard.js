import React, { useContext } from "react";
import { PlayerContext } from "../context/playerState";

import { Grid, Segment } from "semantic-ui-react";

const StatusCard = () => {
	const { card } = useContext(PlayerContext);
	return (
		<div className="stat-card">
			<h1>Status Card</h1>
			<Grid columns="equal" divided padded inverted>
				<Grid.Row color="black">
					<Grid.Column>
						<Segment color="black" inverted>
							Name
						</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment color="blue" inverted>
							{card && card.name}
						</Segment>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row color="black">
					<Grid.Column>
						<Segment color="black" inverted>
							Cooldown
						</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment color="blue" inverted>
							{card && card.cooldown}
						</Segment>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row color="black">
					<Grid.Column>
						<Segment color="black" inverted>
							Encumbrance
						</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment color="blue" inverted>
							{card && card.encumbrance}
						</Segment>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row color="black">
					<Grid.Column>
						<Segment color="black" inverted>
							Strength
						</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment color="blue" inverted>
							{card && card.strength}
						</Segment>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row color="black">
					<Grid.Column>
						<Segment color="black" inverted>
							Speed
						</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment color="blue" inverted>
							{card && card.speed}
						</Segment>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row color="black">
					<Grid.Column>
						<Segment color="black" inverted>
							Gold
						</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment color="blue" inverted>
							{card && card.gold}
						</Segment>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row color="black">
					<Grid.Column>
						<Segment color="black" inverted>
							Bodywear
						</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment color="blue" inverted>
							{card && card.bodywear}
						</Segment>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row color="black">
					<Grid.Column>
						<Segment color="black" inverted>
							Footwear
						</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment color="blue" inverted>
							{card && card.footwear}
						</Segment>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row color="black">
					<Grid.Column>
						<Segment color="black" inverted>
							Inventory
						</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment color="blue" inverted>
							{card && card.inventory}
						</Segment>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row color="black">
					<Grid.Column>
						<Segment color="black" inverted>
							Abilities
						</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment color="blue" inverted>
							{card && card.abilities}
						</Segment>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row color="black">
					<Grid.Column>
						<Segment color="black" inverted>
							Status
						</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment color="blue" inverted>
							{card && card.status}
						</Segment>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row color="black">
					<Grid.Column>
						<Segment color="black" inverted>
							Has Mined
						</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment color="blue" inverted>
							{card && card.has_mined}
						</Segment>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row color="black">
					<Grid.Column>
						<Segment color="black" inverted>
							Messages
						</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment color="blue" inverted>
							{card && card.messages}
						</Segment>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
};
export default StatusCard;
