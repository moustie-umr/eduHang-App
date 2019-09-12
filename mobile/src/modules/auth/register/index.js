import React, { Component } from 'react';
import { connect } from 'react-redux';
import { } from '../store';
import View from './View';

const mapStateToProps = state => {
	
	return {
		firstName: state.AuthStateReducer.firstName,
		lastName: state.AuthStateReducer.lastName,
		email: state.AuthStateReducer.email,
		username: state.AuthStateReducer.username,
		password: state.AuthStateReducer.password
	};
};

export default connect(mapStateToProps, null)(View);