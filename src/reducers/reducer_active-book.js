// state argument is not application state, only state this reducer is responsible for
export default function(localState = null, action) {
	switch (action.type) {
		case `BOOK_SELECTED`:
			return action.payload;
		default:
			return localState;
	}
}
