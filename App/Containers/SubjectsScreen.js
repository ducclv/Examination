import React, { Component } from 'react'
import Subjects_Main from '../Components/Subjects_Main'

export default class SubjectsScreen extends Component {
    render() {
        return (
            <Subjects_Main {...this.props} />
        );
    }
}