import {
	IS_LOADING,
	CHANGE_NAME_ERR,
	CHANGE_NAME_SUCCESS,
	GET_MAP_SUCCESS,
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
const setChangeNameErr = (state, action) => {
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

const playerReducer = (state, action) => {
	switch (action.type) {
		case IS_LOADING:
			return setIsLoading(state, action);
		case CHANGE_NAME_SUCCESS:
			return setChangeName(state, action);
		case CHANGE_NAME_ERR:
			return setChangeNameErr(state, action);
		case GET_MAP_SUCCESS:
			return getMap(state, action);
		default:
			return state;
	}
};

export default playerReducer;
