import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function PrivateRoute({ children }) {
	const { isAuthenticated } = useAuth();

	return isAuthenticated ? (
		children
	) : (
		<Navigate to="/login" replace />
	);
}

export default PrivateRoute;