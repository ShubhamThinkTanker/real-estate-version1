import React from 'react';
import { userdatas } from '../localstorage/localdata';
import jwt_decode from 'jwt-decode';
import moment from 'moment';
import { Redirect, Route } from 'react-router-dom';

export default function Logout() {
	const decoded = jwt_decode(userdatas.Token);
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		localStorage.clear();
		// Redirect To Login
		window.location.href = '/login';
	}
	return <></>;
}
