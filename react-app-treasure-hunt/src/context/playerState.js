import React, { createContext, useEffect, useReducer } from "react";
import {
	IS_LOADING,
	CHANGE_NAME_SUCCESS,
	GET_MAP_SUCCESS,
	MOVEMENT_SUCCESS,
	SHRINE_PATH_SUCCESS,
	STATUS_SUCCESS,
	PRAY_SUCCESS,
} from "./types";
import { loadState, saveState } from "../utils/localStorage";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";
import playerReducer from "./playerReducer";

export const PlayerContext = createContext();

const url = "http://localhost:8000";

export const PlayerState = props => {
	const initialState = {
		isLoading: false,
		map: {
			room_id: 0,
			room_name: null,
			room_description: null,
			room_exits: null,
			room_coordinates: null,
			terrain: "NORMAL",
			cooldown: 1,
		},
		card: {
			name: "User 20682",
			cooldown: 1.0,
			encumbrance: 0,
			strength: 10,
			speed: 10,
			gold: 0,
			bodywear: null,
			footwear: null,
			inventory: [],
			abilities: [],
			status: [],
			has_mined: false,
			errors: [],
			messages: [],
		},
	};

	const localState = loadState("treasure-hunt");

	const [state, dispatch] = useReducer(
		playerReducer,
		localState || initialState
	);

	useEffect(() => {
		saveState("treasure-hunt", state);
	}, [state]);

	const changeName = async name => {
		dispatch({ type: IS_LOADING, payload: true });
		try {
			axiosWithAuth().post("api/adv/change_name/", {
				name: name,
			});
			dispatch({ type: CHANGE_NAME_SUCCESS, payload: name });
		} catch (e) {
			console.log(e);
		}
	};
	const getInit = async () => {
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const map = await axiosWithAuth().get("/api/adv/init/");

			dispatch({ type: GET_MAP_SUCCESS, payload: map.data });
		} catch (e) {
			console.log(e);
		}
	};
	const move = async (path, name) => {
		dispatch({ type: IS_LOADING, payload: true });
		console.log("path", path);
		try {
			const travel = await axiosWithAuth().post("/api/adv/move", {
				direction: path,
				player: name,
			});
			dispatch({ type: MOVEMENT_SUCCESS, payload: travel.data });
		} catch (e) {
			console.log(e);
		}
	};
	const pathToShrine = async (current_room, shrine) => {
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const path = await axios.post(`${url}/find-shrine/`);
			dispatch({ type: SHRINE_PATH_SUCCESS, payload: path.data });
		} catch (e) {
			console.log(e);
		}
	};
	const getStats = async () => {
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const res = await axiosWithAuth().post("api/adv/status/");
			dispatch({ type: STATUS_SUCCESS, payload: res.data });
		} catch (e) {
			console.log(e);
		}
	};

	const prayAtShrine = async () => {
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const path = await axiosWithAuth.post(`/api/adv/pray/`);
			dispatch({ type: PRAY_SUCCESS, payload: path.data });
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<PlayerContext.Provider
			value={{
				changeName,
				getInit,
				move,
				pathToShrine,
				prayAtShrine,
				getStats,
				map: state.map,
				card: state.card,
			}}
		>
			{props.children}
		</PlayerContext.Provider>
	);
};
