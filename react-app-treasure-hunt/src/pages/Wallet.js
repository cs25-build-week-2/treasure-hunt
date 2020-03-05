import React, { useState, useContext } from "react";
import { PlayerContext } from "../context/playerState";

import "../App.scss";
import { FormField, Button, Form } from "semantic-ui-react";

const Wallet = () => {
	const [name, setName] = useState([""]);
	const { changeName, card } = useContext(PlayerContext);
	// useEffect(() => {
	// 	async function getBalance() {
	// 		const balance = await axiosWithAuth()
	// 			.get("/api/bc/get_balance/")
	// 			.then(res => res.data)
	// 			.catch(e => console.log(e));
	// 		setWallet({ balance });
	// 	}
	// 	getBalance();
	// }, []);
	const handleSubmit = e => {
		e.preventDefault();
		changeName(name);
	};
	return (
		<div className="wallet">
			<h1>Wallet</h1>
			<Form onSubmit={handleSubmit}>
				<h3>Name: {card && card.name} </h3>

				<FormField>
					<input
						type="text"
						value={name}
						placeholder="Name"
						onChange={e => setName(e.target.value)}
					/>
				</FormField>
				<Button type="submit">Change Name</Button>
			</Form>
			<h4>Balance:</h4>
			<p>{card && card.gold} gold</p>
		</div>
	);
};
export default Wallet;
