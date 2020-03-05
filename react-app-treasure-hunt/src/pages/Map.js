import React, { useContext, useEffect } from "react";
import Timer from "react-compound-timer";
import { PlayerContext } from "../context/playerState";

const Map = () => {
	const { map, getInit } = useContext(PlayerContext);

	useEffect(() => {
		getInit();
	}, []);

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
			<Timer initialTime={map && map.cooldown} direction="backward">
				CoolDown: <Timer.Seconds /> (s)
			</Timer>
		</div>
	);
};

export default Map;
