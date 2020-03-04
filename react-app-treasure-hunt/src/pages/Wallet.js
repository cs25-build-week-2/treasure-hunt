import React, { useState, useEffect, useContext } from "react";
import { PlayerContext } from "../context/playerState";

import "../App.scss";
import { FormField, Button, Form } from "semantic-ui-react";

const Wallet = () => {
	const [wallet, setWallet] = useState([]);
	const [name, setName] = useState("");
	const { changeName, playerName } = useContext(PlayerContext);
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
	console.log("playerName");
	return (
		<div className="wallet">
			<Form onSubmit={handleSubmit}>
				<h1>Name: </h1>
				{playerName && playerName.name}
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
			<h1>Wallet</h1>
			<h4>Balance:</h4>
			<p>{wallet.balance && wallet.balance.messages}</p>
		</div>
	);
};
export default Wallet;
