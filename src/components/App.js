import React from 'react';

import BookDetail from '../containers/BookDetail';
import BookList from '../containers/BookList';

export const App = () => {
	return (
		<div>
			<BookDetail />
			<BookList />
		</div>
	);
};

export default App;
