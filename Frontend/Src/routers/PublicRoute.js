import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';

export const PublicRoute = ({
    isAuthenticated,
    redirectHome,
    component: Component,
    ...rest }) => {
    if (!isAuthenticated) {
        return (
            <Route {...rest} component={Component} />
        );
    } else {
        return (
            <Redirect to="/" />
        );
    }
};

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.user.isAuthenticated
    };
};

export default connect(mapStateToProps)(PublicRoute);
