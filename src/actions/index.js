// action creator function
export function selectBook(book) {
	// return an action (object with type...& sometimes a payload)
	return {
		type    : `BOOK_SELECTED`,
		payload : book,
	};
}
