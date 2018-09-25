import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import ConfirmEmailMessage from '../messages/ConfirmedEmailMessage';

const DashboardPage = ({ isConfirmed }) => (
	<div>
		{!isConfirmed && <ConfirmEmailMessage />}
	</div>
);

DashboardPage.propTypes= {
	isConfirmed: propTypes.bool.isRequired
}

function mapStateToProps(state) {
	return {
		isConfirmed: !!state.user.confirmed
	}
}

export default connect(mapStateToProps)(DashboardPage);