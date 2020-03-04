import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { usePlayerState } from "../context/player";

import "../App.scss";

const Wallet = () => {
	const [wallet, setWallet] = useState([]);
	useEffect(() => {
		async function getBalance() {
			const balance = await axiosWithAuth()
				.get("/api/bc/get_balance/")
				.then(res => res.data)
				.catch(e => console.log(e));
			setWallet({ balance });
		}
		getBalance();
	}, []);
	console.log(usePlayerState);
	return (
		<div className="wallet">
			<h1>Name: </h1>
			<h1>Wallet</h1>
			<h4>Balance:</h4>
			<p>{wallet.balance && wallet.balance.messages}</p>
		</div>
	);
};
export default Wallet;
