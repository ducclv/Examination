import React, { Component } from 'react'
import Students_Main from '../Components/Students_Main'

export default class StudentsScreen extends Component {
    render() {
        return (
            <Students_Main {...this.props} />
        );
    }
}