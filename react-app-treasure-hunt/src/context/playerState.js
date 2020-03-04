import React, { createContext, useEffect, useReducer } from "react";
import {
	IS_LOADING,
	CHANGE_NAME_SUCCESS,
	CHANGE_NAME_ERR,
	GET_MAP_SUCCESS,
} from "./types";
import { loadState, saveState } from "../utils/localStorage";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import playerReducer from "./playerReducer";

export const PlayerContext = createContext();

export const PlayerState = props => {
	const initialState = {
		isLoading: false,
		player: {
			name: "[HERO]",
			room_id: null,
			coins: null,
		},
		map: {
			room_id: null,
			room_name: null,
			room_description: null,
			room_exits: null,
			room_coordinates: null,
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
			const newName = await axiosWithAuth().post("api/adv/change_name/", {
				name: name,
			});
			dispatch({ type: CHANGE_NAME_SUCCESS, payload: newName.data });
		} catch (e) {
			console.log(e);
			dispatch({ type: CHANGE_NAME_ERR, payload: e });
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

	return (
		<PlayerContext.Provider
			value={{
				changeName,
				getInit,
				player: { ...state.name },
				playerName: state.player,
				map: state.map,
			}}
		>
			{props.children}
		</PlayerContext.Provider>
	);
};
