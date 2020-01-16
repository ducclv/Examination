import React, { Component } from 'react'
import Students_Add from '../Components/Students_Add'

export default class StudentsAddScreen extends Component {
    render() {
        return (
            <Students_Add {...this.props} />
        );
    }
}