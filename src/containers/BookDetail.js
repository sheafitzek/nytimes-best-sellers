import React, {PureComponent} from 'react';

import PropTypes from 'prop-types-defined';

import {connect} from 'react-redux';

export class BookDetail extends PureComponent {
	render() {
		if (!this.props.activeBook) {
			return <div>Select a Book to View its Details</div>;
		}

		return (
			<div>
				<h3>Details</h3>
				<div>Title: {this.props.activeBook.title}</div>
				<div>Pages: {this.props.activeBook.pages}</div>
			</div>
		);
	}
}

function mapStatetoProps(state) {
	return {
		activeBook : state.activeBook,
	};
}

BookDetail.propTypes = {
	activeBook : PropTypes.object.isDefined,
};

export default connect(mapStatetoProps)(BookDetail);
