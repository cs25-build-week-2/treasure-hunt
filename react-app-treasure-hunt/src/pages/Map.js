import React, { useContext } from "react";
import Timer from "react-compound-timer";
import { PlayerContext } from "../context/playerState";

const Map = () => {
	const { map } = useContext(PlayerContext);
	const time = map.cooldown * 1000;
	console.log("map.cooldown", map.cooldown);
	return (
		<div>
			<div className="room-info">
				<h3>Room Id: {map && map.room_id}</h3>
				<p>Cordinates {map && map.coordinates}</p>
			</div>
			<h3>Room Name: {map && map.title}</h3>
			<p>Room Description: {map && map.description}</p>
			<p>Room Exits: {map && map.exits}</p>
			<p>Room Terrain: {map && map.terrain}</p>
			{(() => {
				if (map.items.length === 0) {
					return <p>Treasure: "None"</p>;
				} else {
					return <p>Treasure: {map.items}</p>;
				}
			})()}
			<Timer
				initialTime={time}
				startImmediately={true}
				direction="backward"
			>
				{() => (
					<React.Fragment>
						CoolDown: <Timer.Seconds /> (s)
					</React.Fragment>
				)}
			</Timer>
		</div>
	);
};

export default Map;
