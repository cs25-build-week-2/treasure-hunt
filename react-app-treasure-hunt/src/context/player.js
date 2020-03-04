import { createContext } from "react";

// Action Types
const SET_NAME = "SET_NAME";

const playerStateContext = createContext();

const initialState = {
	player: {
		name: null,
		room_id: null,
		coins: null,
	},
};

const playerStateReducer = (state, action) => {
	switch (action.type) {
		case SET_NAME:
			return {
				...state,
				name: { ...action.payload },
			};
		default:
			return state;
	}
};

export const playerStateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(playerStateReducer, initialState);
	return (
		<playerStateContext.Provider value={[state, dispatch]}>
			{children}
		</playerStateContext.Provider>
	);
};
const usePlayerState = () => {
	const [state, dispatch] = useContext(playerStateContext);
	const setName = ({ name }) => {
		dispatch({ type: SET_NAME, payload: { name } });
	};
	return {
		setName,
		player: { ...state.name },
	};
};

export default usePlayerState;
