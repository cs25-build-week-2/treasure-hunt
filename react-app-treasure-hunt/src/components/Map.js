import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Map = () => {
	const [init, setInit] = useState([]);

	useEffect(() => {
		async function getInit() {
			const setUp = await axiosWithAuth()
				.get("/api/adv/init/")
				.then(res => res.data)
				.catch(e => console.log(e));
			setInit({ setUp });
		}
		getInit();
	}, []);
	return (
		<div>
			<div className="room-info">
				<h3>Room Id: {init.setUp && init.setUp.room_id}</h3>
				<p>Cordinates {init.setUp && init.setUp.coordinates}</p>
			</div>
			<h3>Room Name: {init.setUp && init.setUp.title}</h3>
			<p>Room Description: {init.setUp && init.setUp.description}</p>
			<p>Room Exits: {init.setUp && init.setUp.exits}</p>
		</div>
	);
};

export default Map;
