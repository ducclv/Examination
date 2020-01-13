import React, { Component } from 'react';
import AuthLoading from '../Components/AuthLoading'

export default class AuthLoadingScreen extends Component {
    render() {
        return (
            <AuthLoading {...this.props} />
        )
    }
}