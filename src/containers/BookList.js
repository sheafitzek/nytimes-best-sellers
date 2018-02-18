import React, {Component} from 'react';

import PropTypes from 'prop-types-defined';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {selectBook} from '../actions/index';
export class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li
					key={book.title}
					className="list-group-item"
					onClick={() => {
						this.props.selectBook(book);
					}}
				>
					{book.title}
				</li>
			);
		});
	}
	render() {
		return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
	}
}

// access redux state
// returned value will be available as props in container
function mapStateToProps(state) {
	return {
		books : state.books,
	};
}

// access redux action creator functions
// returned value will be available as props in container
function mapDispatchToProps(dispatch) {
	// passes result of function to reducers to process data
	return bindActionCreators(
		{
			selectBook,
		},
		dispatch
	);
}

BookList.proptypes = {
	books      : PropTypes.object.isRequired,
	selectBook : PropTypes.func.isRequired,
};

// promote component to container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
