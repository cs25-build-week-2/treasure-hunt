import {
	IS_LOADING,
	CHANGE_NAME_SUCCESS,
	GET_MAP_SUCCESS,
	MOVEMENT_SUCCESS,
	SHRINE_PATH_SUCCESS,
	STATUS_SUCCESS,
	PRAY_SUCCESS,
} from "./types";

const setIsLoading = (state, action) => {
	return {
		...state,
		is_loading: action.payload,
	};
};

const setChangeName = (state, action) => {
	return {
		...state,
		is_loading: false,
		player: { ...action.payload },
	};
};

const getMap = (state, action) => {
	return {
		...state,
		is_loading: false,
		map: { ...action.payload },
	};
};
const movement = (state, action) => {
	return {
		...state,
		is_loading: false,
		map: { ...action.payload },
	};
};
const shrinePath = (state, action) => {
	return {
		...state,
		is_loading: false,
		shrine: { ...action.payload },
	};
};
const getStats = (state, action) => {
	return {
		...state,
		is_loading: false,
		card: { ...action.payload },
	};
};
const pray = (state, action) => {
	return {
		...state,
		is_loading: false,
		card: { ...action.payload },
	};
};
const playerReducer = (state, action) => {
	switch (action.type) {
		case IS_LOADING:
			return setIsLoading(state, action);
		case CHANGE_NAME_SUCCESS:
			return setChangeName(state, action);
		case GET_MAP_SUCCESS:
			return getMap(state, action);
		case MOVEMENT_SUCCESS:
			return movement(state, action);
		case SHRINE_PATH_SUCCESS:
			return shrinePath(state, action);
		case STATUS_SUCCESS:
			return getStats(state, action);
		case PRAY_SUCCESS:
			return pray(state, action);
		default:
			return state;
	}
};

export default playerReducer;
